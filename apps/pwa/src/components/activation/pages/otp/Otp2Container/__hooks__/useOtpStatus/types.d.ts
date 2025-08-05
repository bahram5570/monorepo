export type OtpStatusTypes = null | 'correct' | 'wrong';

export type OtpStatusHandlerTypes = (v: OtpStatusTypes) => void;
