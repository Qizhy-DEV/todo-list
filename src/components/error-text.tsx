import { FieldError } from 'react-hook-form';

type Props = {
  error?: FieldError;
};

export const ErrorText = ({ error }: Props) =>
  error?.message ? <p style={{ color: 'red' }}>{error.message}</p> : null;
