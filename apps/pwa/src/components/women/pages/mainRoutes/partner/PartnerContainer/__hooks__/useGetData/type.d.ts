export type ButtonType = {
  enable: boolean;
  b1: string;
  b2: string;
  b3: string;
};

type CardType = {
  enable: boolean;
  link: {
    type: number;
    url: string;
  };
  id: string;
  state: number;
  btnText: string;
  text: string;
  rightIcon: string;
  leftIcon: string;
};

type MemoryType = {
  enable: boolean;
  cardTitle: string;
  dateText: string;
  description: string;
  image: string;
  buttonText: string;
  title: string;
};

type PartnerType = {
  cycleEnable: boolean;
  cycleTitle: string;
  cycleCard: {
    image: string;
    title: string;
    subTitle: string;
    buttonText: string;
    trailing: string;
    gradient: string[];
  };
  hintTitle: string;
  hintEnable: boolean;
  hints: [];
};

type BioType = {
  enable: boolean;
  physical: number;
  emotional: number;
  mental: number;
};

type ItemType = {
  icon: string;
  title: string;
  description: string;
};

type BioRhythemWidget = {
  order: number;
  type: number;
  data: {
    items: ItemType[];
    title: string;
    description: string;
    backgroundColour: string;
  };
};
export type ChallengeResponseType = {
  valid: boolean;
  manName: string;
  manAvatar: string;
  womanName: string;
  womanAvatar: string;
  status: string;
  canDeleteProfile: boolean;
  button: ButtonType;
  card: CardType;
  memory: MemoryType;
  partner: PartnerType;
  selfBio: BioType;
  partnerBio: BioType;
  bioRhythemWidget: BioRhythemWidget;
  coverImage: string;
};
