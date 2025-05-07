'use client';

import AddNewForm from '@/components/add-new-form';
import Overlay from '@/components/overlay';
import UpdateForm from '@/components/update-form';
import { TaskInterface } from '@/interfaces/task';
import { createContext, useState } from 'react';

export interface FormContextTypes {
  expandAddNewForm: () => void;
  expandUpdateForm: (currentTask: TaskInterface) => void;
}

export const FormContext = createContext<FormContextTypes | null>(null);

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [visibleAddNewForm, setVisibleAddNewForm] = useState<boolean>(false);

  const [visibleUpdateForm, setVisibleUpdateForm] = useState<boolean>(false);

  const [currentTask, setCurrentTask] = useState<TaskInterface>();

  const collapseAll = () => {
    if (visibleAddNewForm) {
      setVisibleAddNewForm(false);
    }
    if (visibleUpdateForm) {
      setVisibleAddNewForm(false);
    }
  };

  const checkVisible = () => {
    const visibles = [visibleAddNewForm, visibleUpdateForm];
    if (visibles.find((item) => item)) {
      return true;
    }
    return false;
  };

  const expandAddNewForm = () => {
    setVisibleAddNewForm(true);
  };

  const collapseAddNewForm = () => {
    setVisibleAddNewForm(false);
  };

  const expandUpdateForm = (currentTask: TaskInterface) => {
    setVisibleUpdateForm(true);
    setCurrentTask(currentTask);
  };

  const collapseUpdateForm = () => {
    setVisibleUpdateForm(false);
    setCurrentTask(undefined);
  };

  return (
    <FormContext.Provider value={{ expandAddNewForm, expandUpdateForm }}>
      <Overlay visible={checkVisible()} collapseAll={collapseAll} />
      <AddNewForm visible={visibleAddNewForm} collapse={collapseAddNewForm} />
      <UpdateForm
        visible={visibleUpdateForm}
        collapse={collapseUpdateForm}
        currentTask={currentTask}
      />
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
