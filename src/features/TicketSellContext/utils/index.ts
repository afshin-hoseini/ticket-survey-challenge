import { SurveyAnswerMap, SurveyEntry, SurveyForm } from 'src/@types';

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
