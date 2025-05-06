export interface TaskInterface {
    id: number,
    title: string,
    subtitle: string,
    isCompleted: boolean
}

export interface TaskContextInterface {
    tasks: TaskInterface[],
    setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
}