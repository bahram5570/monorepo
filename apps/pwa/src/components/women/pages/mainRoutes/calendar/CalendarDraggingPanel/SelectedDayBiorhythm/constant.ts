import BrainIcon from '@assets/icons/brain.svg';
import EmotionlIcon from '@assets/icons/emotional.svg';
import EnergyIcon from '@assets/icons/energy.svg';

import { BiorhythmStatusType } from './type';

export const EXTRA_LINK = 'https://impo.app/biorhythm';

export const BIORHYTHM_STATUS: BiorhythmStatusType[] = [
  {
    Icon: EmotionlIcon,
    text: 'احساسی',
    type: 'emotionalPercent',
    typeText: 'emotional',
  },
  {
    Icon: EnergyIcon,
    text: 'جسمانی',
    type: 'bodyPercent',
    typeText: 'physical',
  },
  {
    Icon: BrainIcon,
    text: 'ذهنی',
    type: 'cognitivePercent',
    typeText: 'mental',
  },
];
