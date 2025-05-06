'use client'

import { createContext, useState } from "react";
import { TaskContextInterface, TaskInterface } from "../interfaces/task";
import { sampleTasks } from "../mocks/task";

export const TaskContext = createContext<TaskContextInterface | null>(null)

const TaskProvider = ({children} : {children : React.ReactNode}) => {

    const [tasks, setTasks] = useState<TaskInterface[]>(sampleTasks)

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider