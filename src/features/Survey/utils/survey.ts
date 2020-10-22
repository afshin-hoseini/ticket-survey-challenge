import { SurveyAnswerMap, SurveyEntry, SurveyFieldType, SurveyForm } from 'src/@types';
import { SurveyFormValuesDictionary } from '../@types';

/**
 * Through a recursive reviewe over survey decision tree, and looking up in given answers, fetches the next
 * survey entry that might be either a form or ticket.
 */
export function getNextSurveyEntry(entry: SurveyEntry, answers: SurveyAnswerMap = {}): SurveyEntry | undefined {
  if (Object.keys(answers).length === 0) return entry;

  if (entry.name in answers) {
    for (const child of (entry as SurveyForm).children ?? []) {
      const eligibleEntry = getNextSurveyEntry(child, answers);
      if (eligibleEntry) return eligibleEntry;
    }
  } else if (!entry.isEligible || entry.isEligible(answers) === true) {
    return entry;
  }
  return undefined;
}

/**
 * Generates default value dictionary from the given form.
 * It proovides key for fields including default value, or selects the first option for fields of type `option`.
 */
export const createInitialValues = (form: SurveyForm) =>
  form?.fields?.reduce((values, field) => {
    if (field.type === SurveyFieldType.option && (field.options?.length ?? 0) > 0) {
      values[field.name] = field.options![0].value;
    }

    if (field.defaultValue) {
      values[field.name] = field.defaultValue;
    }
    return values;
  }, {} as SurveyFormValuesDictionary);
