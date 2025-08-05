import { ResponsePropsType } from '../__hooks__/useGetData/type';

type QuestionsType = Pick<Pick<ResponsePropsType, 'data'>['data'], 'question'>;

export interface QuestionCheckupPropsType extends QuestionsType {}
