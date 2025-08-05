import { DeleteModalDataTypes } from '../../../__hooks__/useTestKitsDeleteModal/types';
import { TestKitModalsListsDeleteProps } from '../../types';

export interface UseTestKitDeleteProps extends Pick<TestKitModalsListsDeleteProps, 'onDelete'> {
  isDeleteModalOpen: boolean;
}

export type TestKitDeleteHandlerTypes = (v: DeleteModalDataTypes) => void;
