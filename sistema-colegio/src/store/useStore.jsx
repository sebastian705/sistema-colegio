import axios from "axios";
import { create } from "zustand";


export const useStore = create((set) => ({
  students: [],
  getStudents: () => 'hola',
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))