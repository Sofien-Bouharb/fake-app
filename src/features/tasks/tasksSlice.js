import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn Redux", completed: false },
  { id: 3, text: "Build Todo App", completed: true },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
