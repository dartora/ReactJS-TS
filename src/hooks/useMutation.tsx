import axios from 'axios';
import { Record } from '../interfaces/RecordEntities';

export type Action<T> = (record: T) => Promise<void>;

export const useMutation = <T extends Record>(path: string) => {
  const url = `${process.env.REACT_APP_API}/${path}`;

  const create: Action<T> = async (record: T) => {
    await axios.post(url, record);
  };

  const update: Action<T> = async (record: T) => {
    await axios.put(`${url}/${record.id}`, record);
  };
  const remove: Action<T> = async (record: T) => {
    await axios.delete(`${url}/${record.id}`);
  };

  return {
    create,
    update,
    remove,
  };
};
