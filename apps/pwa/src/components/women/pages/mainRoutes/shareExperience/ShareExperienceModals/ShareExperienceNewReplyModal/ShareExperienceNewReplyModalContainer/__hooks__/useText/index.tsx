import { useState } from 'react';

const useText = () => {
  const [text, setText] = useState('');

  const textHandler = (v: string) => {
    setText(v);
  };

  return { text, textHandler };
};

export default useText;
