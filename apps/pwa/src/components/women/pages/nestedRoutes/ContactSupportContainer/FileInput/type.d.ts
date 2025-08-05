export type ValuesHandlerTypes = (v: { name: 'fileName' | 'text'; value: string }) => void;

export type FileInputProps = {
  valuesHandler: ValuesHandlerTypes;
  fileName: string;
};

export type EmptyStatePropsType = Pick<FileInputProps, 'valuesHandler'>;

export type HasFilePropsType = Pick<FileInputProps, 'fileName' | 'valuesHandler'>;
