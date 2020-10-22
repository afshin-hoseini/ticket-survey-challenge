import { SurveyFieldType, SurveyForm } from 'src/@types';
import { SurveyFormValuesDictionary } from '../@types';

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
