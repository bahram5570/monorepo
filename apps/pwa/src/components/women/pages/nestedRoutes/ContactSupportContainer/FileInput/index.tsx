import useTheme from '@hooks/useTheme';

import EmptyState from './EmptyState';
import HasFile from './HasFile';
import { FileInputProps } from './type';

const FileInput = ({ fileName, valuesHandler }: FileInputProps) => {
  const { colors } = useTheme();

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className={`px-5 w-full ${fileName ? 'rounded-lg' : 'rounded-full'} `}
        style={{
          border: !fileName
            ? `1px solid ${colors.Surface_OutlineVariant}`
            : `1px solid ${colors.Surface_SurfaceVariant}`,
          background: fileName ? colors.Surface_SurfaceVariant : colors.White,
        }}
      >
        {fileName === '' && <EmptyState valuesHandler={valuesHandler} />}

        {fileName !== '' && <HasFile fileName={fileName} valuesHandler={valuesHandler} />}
      </div>
    </div>
  );
};
export default FileInput;
