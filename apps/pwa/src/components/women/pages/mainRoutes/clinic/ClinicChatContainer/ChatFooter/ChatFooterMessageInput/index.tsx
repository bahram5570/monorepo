import AttachIcon from '@assets/icons/attach.svg';
import SendIcon from '@assets/icons/ticketSend.svg';
import { toPersianNumbers } from '@utils/numbers';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import ChatFooterModal from '../ChatFooterModal';
import useTextValue from './__hooks__/useTextValue';

const ChatFooterMessageInput = () => {
  const { colors, typography } = useTheme();
  const { getQueryParams } = useQueryParamsHandler();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const ticketId = getQueryParams('ticketId') || '';

  const { text, textHandler, submitTextHandler, textLoading } = useTextValue(ticketId);

  const clickHandler = () => {
    (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
      pageNavigationHandler({ showProgressBar: false, id: 'chatFooterModal' }));
  };

  return (
    <div className="w-full flex items-center gap-2">
      <div
        className="w-full h-10 px-4 flex items-center justify-between gap-2 border-[1px] rounded-full"
        style={{ borderColor: colors.Neutral_Surface }}
      >
        <div
          className="relative w-6 h-6 min-w-6 min-h-6 flex items-center justify-center overflow-hidden"
          onClick={clickHandler}
        >
          <AttachIcon
            className="w-4 h-auto rotate-45 pointer-events-none"
            style={{ fill: colors.PrimaryWoman_Primary }}
          />
        </div>

        <input
          placeholder="پیامت رو بنویس"
          value={toPersianNumbers(text)}
          style={{ ...typography.Body.Large }}
          className="border-none outline-none w-full"
          onChange={(e) => textHandler(e.target.value)}
        />
      </div>

      <div
        onClick={submitTextHandler}
        style={{ backgroundColor: colors.PrimaryWoman_Primary, opacity: text.trim() === '' ? '0.5' : '1' }}
        className="w-12 h-12 min-w-12 min-h-12 rounded-full flex items-center justify-center cursor-pointer"
      >
        {textLoading && <Spinner color="FREE-STYLES" borderColor={colors.White} width={20} />}
        {!textLoading && <SendIcon className="w-5 h-auto ml-1" style={{ fill: colors.White, stroke: colors.White }} />}
      </div>

      <ChatFooterModal ticketId={ticketId} />
    </div>
  );
};

export default ChatFooterMessageInput;
