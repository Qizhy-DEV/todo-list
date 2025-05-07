export enum StatusToast {
  SUCCESS = 'success',
  WARNING = 'warning',
  FAIL = 'fail',
}

export interface Toast {
  id: string;
  title: string;
  subtitle: string;
  status: StatusToast;
  done: boolean;
  duration: number;
}

export interface ToastContextTypes {
  notify: (toast: Omit<Toast, 'id'>) => void;
}
