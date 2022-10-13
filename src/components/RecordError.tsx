import { AxiosError } from 'axios';
import { ValidationError } from 'class-validator';

interface IProps {
  error: AxiosError;
}

export const RecordError: React.FC<IProps> = ({ error }) => {
  // console.log(error?.response?.data?.validation);

  const validationErrors = error?.response?.data;
  // as ValidationError[];

  // console.log(validationErrors.validation);

  if (error.response) {
    const { data } = error.response;
    console.log(data);
  }
  return (
    <div className="error">
      <div>
        <b>Message:</b> {error.message}
      </div>
      <div>
        <b>URL:</b> {error.config?.url}
      </div>
      {error.message && (
        <div>
          <b>Details:</b> {error.message}
        </div>
      )}
      {/* {validationErrors &&
        validationErrors.map((error, errorKey) => (
          <ul key={errorKey}>
            {error.constraints &&
              Object.values(error.constraints).map(
                (constraint, constraintKey) => (
                  <li key={constraintKey}>{constraint}</li>
                )
              )}
          </ul>
        ))} */}
    </div>
  );
};
