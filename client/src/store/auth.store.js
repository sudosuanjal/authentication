import axios from "axios";
import { create } from "zustand";

const BACKEND_URL = "http://localhost:3000/api/auth";

export const useStore = create((set) => ({
  user: null,
  isAuthenticated: null,
  isLoading: null,
  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      console.log("Sending signup data:" + email);

      const response = await axios.post(`${BACKEND_URL}/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ error: error.response.data.message, isLoading: false });
      throw error;
    }
  },
  verify: async (code) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`${BACKEND_URL}/verify-email`, {
        code,
      });

      set({ user: response.data.user, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
}));
