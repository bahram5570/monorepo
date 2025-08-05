'use client';

import { useEffect } from 'react';

import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import MessageContainerSkeleton from './MessageContainerSkeleton';
import MessageItem from './MessageItem';
import NewMessage from './NewMessage';
import Warning from './Warning';
import useGetData from './__hooks__/useGetData';
import useReadMessage from './__hooks__/useReadMessage';

const MessageContainer = () => {
  const { colors } = useTheme();
  const { data, isLoading } = useGetData();
  const { submitHandler } = useReadMessage();

  const hasData = data && data.length > 0;

  useEffect(() => {
    if (data) {
      const findNotReadMessage = data.find((message) => message.fromMan && !message.readFlag);
      if (findNotReadMessage) {
        const messageIdList = [findNotReadMessage.messageId];
        submitHandler({ messageIds: messageIdList });
      }
    }
  }, [data]);

  return (
    <>
      {isLoading && <MessageContainerSkeleton />}
      {!isLoading && (
        <WomenPageLayout
          rightElement="BackButton"
          rightElementScript="ارسال پیام"
          className="flex flex-col gap-5 px-4 min-h-[100dvh] "
        >
          <Typography scale="Title" size="Small" textAlign="center" className="w-full">
            ارسال پیام به همدل
          </Typography>
          {hasData && (
            <div className="flex flex-col gap-5">
              {data.map((message) => {
                return (
                  <div key={message.messageId} className={`${message.fromMan ? `pr-6` : `pl-6`}`}>
                    <div
                      className={` rounded-t-2xl ${message.fromMan ? `rounded-r-2xl relative` : `rounded-l-2xl`}  min-h-[70px] p-1`}
                      style={{
                        border: message.fromMan
                          ? `1px solid ${colors.PrimaryMan_PrimaryMan}`
                          : `1px solid ${colors.PrimaryWoman_Primary}`,
                      }}
                    >
                      <MessageItem {...message} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {hasData && !data[data.length - 1].readFlag && !data[data.length - 1].fromMan ? <Warning /> : <NewMessage />}
        </WomenPageLayout>
      )}
    </>
  );
};

export default MessageContainer;
