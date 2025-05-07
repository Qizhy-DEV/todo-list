import { TaskInterface, TasksState } from '@/interfaces/task';
import { sampleTasks } from '@/mocks/task';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TasksState = {
  tasks: sampleTasks,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskInterface>) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    updateTask: (state, action: PayloadAction<TaskInterface>) => {
      state.tasks = state.tasks.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;
