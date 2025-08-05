export type OptionsTypes = {
  api?: 'doctor/file' | 'shareeexperience/v3/file';
  onSuccess?: (v: string) => void;
  method?: 'POST' | 'PUT';
  onError?: () => void;
};

export type FileDataHandlerTypes = (args: { e: React.ChangeEvent<HTMLInputElement>; file?: File }) => void;

export type FileResponseTypes = { name: string; valid: boolean };

export type FileUploadImageFileTypes = null | { image: string; imageType: string };
