export type validationType =
  | { name: 'required'; message: string }
  | { name: 'min'; value: number; message: string }
  | { name: 'max'; value: number; message: string };
