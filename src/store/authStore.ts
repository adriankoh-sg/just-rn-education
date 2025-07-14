import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { setItem, getItem, deleteItemAsync } from 'expo-secure-store';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'guest';
};

type UserState = {
  user: User | null;
  isLogin: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      isLogin: false,
      login: (user) => set({ user, isLogin: true }),
      logout: () => set({ user: null, isLogin: false }),
    }),
    {
      name: 'auth-storage', // unique name
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
);

export default useAuthStore;
