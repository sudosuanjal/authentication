import axios from "axios";
import { create } from "zustand";

const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/auth"
    : "/api/auth";

axios.defaults.withCredentials = true;

export const useStore = create((set) => ({
  user: null,
  isAuthenticated: false,
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
  forgotPassword: async (email) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`${BACKEND_URL}/forgot-password`, {
        email,
      });
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  resetPassword: async (password, token) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(
        `${BACKEND_URL}/reset-password/${token}`,
        { password }
      );
      await axios.post(`${BACKEND_URL}/logout`);
      set({ isAuthenticated: false, isLoading: false, user: null });
    } catch (error) {
      set({ isAuthenticated: false, isLoading: false, user: null });
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
      console.log("from authstore");
    } catch (error) {
      set({ isLoading: false, isAuthenticated: false });
    }
  },
}));
