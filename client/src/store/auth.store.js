import axios from "axios";
import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  isAuthenticated: null,
  error: null,
  signup: async (email, password, name) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/signup`, {
        email,
        password,
        name,
      });
      set({ user: response.data.user, isAuthenticated: true });
    } catch (error) {
      set({ error: error.response.data.message });
      throw error;
    }
  },
}));
