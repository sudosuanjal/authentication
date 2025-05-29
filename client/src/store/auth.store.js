import axios from "axios";
import { Backpack, BarChart } from "lucide-react";
import { create } from "zustand";

const BACKEND_URL = "http://localhost:3000/api/auth";

axios.defaults.withCredentials = true;

export const useStore = create((set) => ({
  user: null,
  isAuthenticated: null,
  isLoading: null,
  signup: async (email, password, name) => {
    set({ isLoading: true });
    try {
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
      set({ isLoading: false, isAuthenticated: false });
      throw error;
    }
  },
  verify: async (code) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`${BACKEND_URL}/verify-email`, {
        code,
      });

      set({
        user: response.data.user,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (error) {
      set({ isLoading: false, isAuthenticated: false });
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
      set({
        user: response.data.user,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (error) {
      set({ isLoading: false, isAuthenticated: false });
      throw error;
    }
  },
  logout: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`${BACKEND_URL}/logout`);
      set({ isAuthenticated: false, isLoading: false, user: null });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${BACKEND_URL}/verify-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false, isAuthenticated: false });
    }
  },
}));
