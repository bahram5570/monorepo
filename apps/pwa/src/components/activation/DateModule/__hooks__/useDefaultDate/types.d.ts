export interface UseDefaultDatePros {
  defaultDate?: string;
  onDefaultData: (v: { year: string; month: string; day: string }) => void;
}
