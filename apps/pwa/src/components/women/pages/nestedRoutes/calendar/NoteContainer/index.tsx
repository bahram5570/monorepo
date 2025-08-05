'use client';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import DeleteNoteBtn from './DeleteNoteBtn';
import NoteContainerSkeleton from './NoteContainerSkeleton';
import NoteInputGenerator from './NoteInputGenerator';
import NoteModal from './NoteModal';
import useGetData from './__hooks__/useGetData';
import useSubmit from './__hooks__/useSubmit';

const NoteContainer = () => {
  const { colors } = useTheme();
  const { noteValue, onChangeHandler, isLoading: getDataLoading } = useGetData();
  const isEditMode = noteValue.noteId ? true : false;
  const { isLoading, submitHandler } = useSubmit({ isEditMode });

  return (
    <>
      {getDataLoading && <NoteContainerSkeleton />}

      {!getDataLoading && (
        <WomenPageLayout
          paddingTop={0}
          rightElement="BackButton"
          rightElementScript="ثبت یادداشت"
          backgroundColor={colors.Grey_50}
          headerBackgroundColor={colors.Grey_50}
        >
          <div className="flex flex-col min-h-[100dvh] gap-6 pb-6 px-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
            <div className="flex flex-col justify-center items-center p-4 gap-2">
              <Typography scale="Title" size="Small">
                میخوای به کارهات اولویت بدی؟
              </Typography>

              <Typography scale="Body" size="Medium" textAlign="center">
                کارهات رو اینجا بنویس و در صورت لزوم میتونی یادآور هم براش تنظیم کنی
              </Typography>
            </div>

            <NoteInputGenerator noteValue={noteValue} onChangeHandler={onChangeHandler} />

            {isEditMode && <DeleteNoteBtn />}

            <Button
              size="medium"
              variant="fill"
              color="primary"
              isLoading={isLoading}
              isDisable={!noteValue.title}
              className="mt-auto py-3 px-2"
              onClick={() => submitHandler(noteValue)}
            >
              {isEditMode ? 'ویرایش یادداشت' : 'ثبت یادداشت'}
            </Button>
          </div>

          <NoteModal noteValue={noteValue} onChangeHandler={onChangeHandler} />
        </WomenPageLayout>
      )}
    </>
  );
};

export default NoteContainer;
