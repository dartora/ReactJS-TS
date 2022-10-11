import React from 'react';
import { IChangeElement } from '../hooks/useForm';

export interface RecordIndexProps<T> {
  ListItem: React.FC<ListItemProps<T>>;
  apiPath: string;
  apiOptions: {};
  FormFields: React.FC<FormFieldsProps<T>>;
  emptyRecord: T;
}

export interface RecordListProps<T> {
  ListItem: React.FC<ListItemProps<T>>;
  records: T[];
  emptyRecord: T;
  activeRecord: T;
  setActiveRecord: Function;
}

export interface ListItemProps<T> {
  record: T;
}

export interface RecordMutationsProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
}

export interface RecordNewProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
}

export interface RecordEditProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
}

export interface RecordFormProps<T> {
  FormFields: React.FC<FormFieldsProps<T>>;
  activeRecord: T;
}

export interface FormFieldsProps<T> {
  formState: T;
  handleChange: (event: React.ChangeEvent<IChangeElement>) => void;
}
