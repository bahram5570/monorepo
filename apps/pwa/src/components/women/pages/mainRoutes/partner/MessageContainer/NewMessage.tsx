import { useState } from 'react';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useSubmit from './__hooks__/useSubmit';

const NewMessage = () => {
  const [newMessage, setNewMessage] = useState('');
  const { submitHandler, isLoading } = useSubmit();
  const { colors } = useTheme();
  return (
    <>
      <textarea
        placeholder="برای همدل خود یک پیام ارسال کنید"
        className="w-full text-end px-4 py-3 rounded-2xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm"
        style={{ border: `1px solid ${colors.Neutral_Surface}`, outlineColor: colors.PrimaryWoman_Primary }}
        rows={4}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <div className="flex justify-center items-center">
        <Button
          size="medium"
          variant="fill"
          color="primary"
          fullWidth={false}
          className="px-6 py-2"
          onClick={() => submitHandler({ text: newMessage, title: '' })}
          isDisable={!newMessage}
          isLoading={isLoading}
        >
          <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
            ارسال پیام
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default NewMessage;
