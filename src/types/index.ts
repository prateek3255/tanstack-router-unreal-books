export const ALLOWED_FILTERS = ["overdue", "due-soon", "paid"] as const;
export const ALLOWED_SORTS = [
  "date-desc",
  "date-asc",
  "amount-desc",
  "amount-asc",
] as const;

export type Filter = typeof ALLOWED_FILTERS[number];
export type Sort = typeof ALLOWED_SORTS[number];
