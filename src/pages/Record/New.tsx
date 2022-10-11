import { Record } from '../../interfaces/RecordEntities';
import { RecordNewProps } from '../../interfaces/PagesProps';
import { RecordForm } from './Form';

export const RecordNew = <T extends Record>({
  FormFields,
  activeRecord,
}: RecordNewProps<T>) => {
  return (
    <div className="new">
      <h2>New</h2>
      <RecordForm FormFields={FormFields} activeRecord={activeRecord} />
    </div>
  );
};
