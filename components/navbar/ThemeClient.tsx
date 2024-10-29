'use client';
import { ThemeProvider } from "next-themes";

import React, { ReactNode } from "react";

const ThemeClient = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider attribute="class"
            defaultTheme="system">
            {children}
        </ThemeProvider>
    )
}

export default ThemeClient;