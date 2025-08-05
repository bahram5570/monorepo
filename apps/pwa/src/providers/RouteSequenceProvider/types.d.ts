export interface RouteSequenceProviderProps {
  children: React.ReactNode;
}

export type RouteSequenceListTypes = string[] | null;

export type SequenceHandlerTypes = (v: string[]) => void;

export type RouteSequenceContextTypes = {
  sequenceHandler: SequenceHandlerTypes;
};
