import { ClinicChatbotTemporaryButtonPropsType } from '../type';

type ItemType = Pick<ClinicChatbotTemporaryButtonPropsType, 'onChangeValueHandler'>;

export interface ClinicChatbotLayoutPropsType extends ItemType {
  children: React.ReactNode;
  isModalVisible: boolean;
  handleCloseModal: () => void;
  className?: string;
}
