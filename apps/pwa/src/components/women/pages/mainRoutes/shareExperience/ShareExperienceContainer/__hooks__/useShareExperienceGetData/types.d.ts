export type ShareExperienceResponseTypes = {
  groupsTitleText: string;
  otherTitleText: string;
  selfTitleText: string;
  inputText: string;
  text: string;
  topics: {
    coverImage: string;
    inputText: string;
    image: string;
    name: string;
    bio: string;
    id: string;
  }[];
  profile: {
    medicalNumber: string;
    avatarImage: string;
    expertise: string;
    biography: string;
    username: string;
    userId: string;
  };
  categories: {
    isSelected: boolean;
    title: string;
    icon: string;
    id: string;
  }[];
};
