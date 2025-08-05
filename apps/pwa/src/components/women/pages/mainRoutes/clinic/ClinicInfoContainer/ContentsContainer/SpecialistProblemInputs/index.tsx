import { toPersianNumbers } from '@utils/numbers';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useCustomToast from '@hooks/useCustomToast';
import useFileUpload from '@hooks/useFileUpload';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import FileInput from './FileInput';
import SpecialistProblemModal from './SpecialistProblemModal';
import useValues from './__hooks__/useValues';
import { SpecialistProblemInputsProps } from './types';

const SpecialistProblemInputs = ({ info, infoHelper, questionValuesHandler }: SpecialistProblemInputsProps) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { values, valuesHandler } = useValues();
  const { colors, typography } = useTheme();
  const { onToast } = useCustomToast();
  const router = useRouter();

  const loadingId = 'SpecialistProblemInputs';

  const onSuccessHandler = (v: string) => {
    valuesHandler({ name: 'fileName', value: v });
    router.back();
  };

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v) => onSuccessHandler(v),
  });

  const paymentHandler = () => {
    if (values.text.trim() === '') {
      onToast({ message: 'اول مشکلت بنویس و بعد ارسال کن' });
    } else {
      questionValuesHandler({ text: values.text, fileName: values.fileName });
      pageNavigationHandler({ showProgressBar: false, id: loadingId });
    }
  };

  return (
    <>
      <div className="w-full py-4 px-2 rounded-2xl border-[1px]" style={{ borderColor: colors.Neutral_Surface }}>
        <Typography scale="Body" size="Small">
          {info}
        </Typography>

        <div className="flex flex-col gap-4 py-4">
          <textarea
            rows={4}
            placeholder={infoHelper}
            value={toPersianNumbers(values.text)}
            onChange={(e) => valuesHandler({ name: 'text', value: e.target.value })}
            className="w-full max-h-[100px] rounded-xl text-right p-2 resize-none outline-none"
            style={{ backgroundColor: colors.Surface_SurfaceVariant, direction: 'rtl', ...typography.Body.Small }}
          />
        </div>

        <FileInput fileName={values.fileName} valuesHandler={valuesHandler} />
      </div>

      <div className="w-full mt-auto pt-5">
        <Button
          size="medium"
          variant="fill"
          color="primary"
          onClick={paymentHandler}
          isLoading={pageNavigationLoading === loadingId}
        >
          مرحله بعد
        </Button>
      </div>

      <SpecialistProblemModal fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
    </>
  );
};

export default SpecialistProblemInputs;
