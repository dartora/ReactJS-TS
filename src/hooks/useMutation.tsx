import axios from 'axios';
import { Record } from '../interfaces/RecordEntities';

export type Action<T> = (record: T) => Promise<void>;

export const useMutation = <T extends Record>(
  path: string,
  callback?: Function
) => {
  const url = `${process.env.REACT_APP_API}/${path}`;
  const wrap = (fn: Action<T>) => {
    return async (record: T) => {
      fn(record).then(() => {
        if (callback) {
          callback();
        }
      });
    };
  };

  const create: Action<T> = wrap(async (record: T) => {
    await axios.post(url, record);
  });

  const update: Action<T> = wrap(async (record: T) => {
    await axios.put(`${url}/${record.id}`, record);
  });
  const remove: Action<T> = wrap(async (record: T) => {
    await axios.delete(`${url}/${record.id}`);
  });

  return {
    create,
    update,
    remove,
  };
};
