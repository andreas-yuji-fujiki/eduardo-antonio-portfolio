// zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// types
import { ThemeStore } from '@/types/stores/useThemeTypes';

// store
export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme: "light",
            setTheme: (theme) => set({ theme }),
            toggleTheme: () =>
                set({ theme: get().theme === "dark" ? "light" : "dark" })
        }),
        {
            name: "theme-storage",
        }
    )
);