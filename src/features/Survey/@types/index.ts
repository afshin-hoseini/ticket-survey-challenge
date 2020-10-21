import { SurveyEntry, SurveyField, SurveyFieldValue, SurveyForm } from 'src/@types';

export type SurveyFieldComponentProps = {
  field: SurveyField;
  error?: string;
  onChange?: (name: string, value: SurveyFieldValue) => void;
  className?: string;
  value?: string | number;
};

export type SurveyFormComponentProps = {
  form: SurveyForm;
  className?: string;
  onSubmit?: (name: string, values: { [fieldName: string]: SurveyFieldValue }) => void;
  loading?: boolean;
};

export type SurveyContainerProps = {
  survey?: SurveyEntry;
};
