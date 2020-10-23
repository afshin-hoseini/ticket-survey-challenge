import { SurveyAnswerMap, SurveyEntry, SurveyEntryType, SurveyField, SurveyFieldType, SurveyForm } from 'src/@types';

const createQna = (formName: string, formFields: SurveyField[], rawAnswers: SurveyAnswerMap) => {
  return formFields.map((field) => {
    const question = field.qnaSummaryQuestion || field.title;
    let answer = String(rawAnswers[formName][field.name]);

    if (field.type === SurveyFieldType.option) {
      const option = (field.options ?? []).find((item) => String(item.value) === answer);
      if (option) answer = option.label;
    }

    return { question, answer };
  });
};

export function createProcessedQnA(
  survey: SurveyEntry,
  answers: SurveyAnswerMap,
  formOrder: string[],
  formIndex: number
): { question: string; answer: string }[] {
  const form = survey as SurveyForm;
  const children = (survey as SurveyForm).children || [];
  const nextFormNameIndex = formIndex + 1;

  const processedAnswers = createQna(form.name, form.fields, answers);

  for (const child of children) {
    if (child.name === formOrder[nextFormNameIndex]) {
      const childAnswers = createProcessedQnA(child, answers, formOrder, nextFormNameIndex);
      return [...processedAnswers, ...childAnswers];
    }
  }

  return processedAnswers;
}
