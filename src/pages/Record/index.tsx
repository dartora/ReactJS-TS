import { Record } from '../../interfaces/RecordEntities';
import { RecordIndexProps } from '../../interfaces/PagesProps';
import { useFetch } from '../../hooks/useFetch';
import { RecordList } from './List';
import { RecordMutations } from './Mutations';

export const RecordIndex = <T extends Record>({
  ListItem,
  apiPath,
  apiOptions,
  FormFields,
  emptyRecord,
}: RecordIndexProps<T>) => {
  const { records } = useFetch<T>(apiPath, apiOptions);

  return (
    <div className="page">
      <div className="content">
        <RecordList<T> ListItem={ListItem} records={records} />
        <RecordMutations<T>
          FormFields={FormFields}
          activeRecord={emptyRecord}
        />
      </div>
    </div>
  );
};
