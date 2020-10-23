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

/**
 * Survey json to JS object converter. This will revive the functions inside the JSON is they are in format of
 * `function(someParams){...}`.
 * @param jsonSurvey Survey's json string, it also can be object in order to revive the functions inside
 */
export function convertJsonToSurveyObject(jsonSurvey: string | object) {
  const strJsSurvey = typeof jsonSurvey === 'object' ? JSON.stringify(jsonSurvey) : jsonSurvey;
  return JSON.parse(strJsSurvey, (k, v) => {
    if (typeof v === 'string' && v.trim().startsWith('function')) {
      const regex = new RegExp('function\\s*\\(.*\\)');
      if (regex.test(v)) return eval('(' + v + ')');
      return v;
    }
    return v;
  });
}
