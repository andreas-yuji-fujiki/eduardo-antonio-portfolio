// react
import { useEffect } from "react";

// zustand theme store
import { useThemeStore } from "@/stores/useThemeStore";

// apply theme hook
export function useApplyUserTheme() {
    // get theme from zustand store
    const theme = useThemeStore((state) => state.theme);

    // applying the theme
    useEffect(()=>{
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
    }, [ theme ]);
}