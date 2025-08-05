import { colorFormatConverter } from '@utils/scripts';

import styles from './styles.module.css';

import Typography from '@components/ui/Typography';

import Btn from './Btn';
import { CircleContainerContentsProps } from './types';

const CircleContainerContents = ({ textColor, description, leading, title, button }: CircleContainerContentsProps) => {
  const color = colorFormatConverter(textColor);

  return (
    <div className={styles.container}>
      <div className="relative flex h-[70%] flex-col justify-center items-center gap-3 px-10">
        <Typography scale="Lable" size="Large" textAlign="center" color="FREE-STYLE" freeColor={color}>
          {leading}
        </Typography>

        <Typography scale="Headline" size="Small" textAlign="center" color="FREE-STYLE" freeColor={color}>
          {title}
        </Typography>

        <Typography scale="Body" size="Large" textAlign="center" color="FREE-STYLE" freeColor={color}>
          {description}
        </Typography>
      </div>

      <Btn button={button} />
    </div>
  );
};

export default CircleContainerContents;
