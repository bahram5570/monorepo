import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

interface UserNameDetailsProps extends Pick<ProfileResponseTypes, 'avatar' | 'name' | 'username'> {}
interface SubscriptionProps extends Pick<ProfileResponseTypes, 'remaindDays'> {}
