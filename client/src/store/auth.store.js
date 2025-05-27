import axios from "axios";
import { BarChart } from "lucide-react";
import { create } from "zustand";

const BACKEND_URL = "http://localhost:3000/api/auth";

export const useStore = create((set) => ({
  user: null,
  isAuthenticated: null,
  isLoading: null,
  signup: async (email, password, name) => {
    set({ isLoading: true });
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
      set({ isLoading: false });
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
  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`${BACKEND_URL}/login`, {
        email,
        password,
      });
      set({ user: response.data.user, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
}));
