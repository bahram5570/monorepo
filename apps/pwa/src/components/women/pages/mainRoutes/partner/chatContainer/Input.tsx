import { useState } from 'react';

import PaperPlaneRightIcon from '@assets/icons/PaperPlaneRight.svg';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import { ItemPropsType } from './__hooks__/useGetData/type';
import { initailMessageValue } from './constants';
import { InputPropsType } from './type';

const Input = ({ submitHandler, onChange }: InputPropsType) => {
  const { colors } = useTheme();
  const [messageValue, setMessageValue] = useState<ItemPropsType>(initailMessageValue);

  return (
    <div
      className="mt-auto fixed bottom-0 left-0 right-0 flex items-center gap-2 h-20 p-3 backdrop-blur-md mx-auto z-50"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <textarea
        placeholder="اینجا تایپ کنید"
        className="w-full text-end px-4 py-3 rounded-full focus-visible:outline-1 focus-visible:outline placeholder:text-sm"
        style={{
          border: `1px solid ${colors.Neutral_Surface}`,
          outlineColor: colors.PrimaryWoman_Primary,
        }}
        rows={1}
        value={messageValue.text}
        onChange={(e) => setMessageValue({ ...messageValue, text: e.target.value })}
      />

      <button
        className=" h-11 w-11 rounded-full flex justify-center items-center"
        style={{
          background: !messageValue.text ? colors.Surface_SurfaceVariant : colors.PrimaryWoman_Primary,
          cursor: !messageValue ? 'not-allowed' : 'pointer',
        }}
        onClick={() => {
          onChange(messageValue);
          submitHandler({ text: messageValue.text });
        }}
      >
        <PaperPlaneRightIcon
          className="w-6 h-6"
          style={{ fill: !messageValue.text ? colors.Surface_OutlineVariant : colors.PrimaryMan_OnPrimaryMan }}
        />
      </button>
    </div>
  );
};

export default Input;
