import { SurveyFieldValue, SurveyForm } from 'src/@types';

/**
 * Validates the given values object against the validators defined on form.
 * @param form The survey form for validating values using definitions.
 * @param values The values that needs to be validated.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const validateForm = (form: SurveyForm, values: { [field: string]: SurveyFieldValue } = {}) => {
  return form.fields.reduce((errors, field) => {
    if (field.required && !values[field.name]) {
      errors[field.name] = 'Required';
    } else if (field.validate) {
      try {
        const error = field.validate(values[field.name]);
        if (error) {
          errors[field.name] = error;
        }
      } catch (e) {
        errors[field.name] = `Exception while validating ${field.name}`;
      }
    }

    return errors;
  }, {} as { [field: string]: string });
};
