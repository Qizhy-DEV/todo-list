export enum StatusToast {
  SUCCESS = 'success',
  WARNING = 'warning',
  FAIL = 'fail',
}

export interface ToastInterface {
  id?: string;
  title: string;
  subtitle: string;
  status: StatusToast;
  done: boolean;
}

export interface ToastContextInterface {
  toasts: ToastInterface[];
  notify: (toast: ToastInterface) => void;
  clear: (id: string) => void;
}
