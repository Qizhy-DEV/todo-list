export interface TaskInterface {
    id: string;
    title: string;
    subtitle: string;
    isCompleted: boolean;
}

export interface TaskContextInterface {
    tasks: TaskInterface[];
    setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
}

export interface TasksState {
    tasks: TaskInterface[];
}
