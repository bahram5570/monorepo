import { TestKistModalBabyCheckTypes } from '../__hooks__/useTestKitModalsInfo/types';

export interface TestKitModalsBabyCheckProps
  extends Pick<TestKistModalBabyCheckTypes, 'babyCheckType' | 'gregorianDate' | 'moduleType'> {
  onComplete?: () => void;
}
