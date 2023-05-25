import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";

InertiaProgress.init();

createInertiaApp({
    resolve: async (name) => {
        const pages = await import(`./pages/${name}`);

        return pages.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <ThemeProvider>
                    <MaterialTailwindControllerProvider>
                        <App {...props} />
                    </MaterialTailwindControllerProvider>
                </ThemeProvider>
            </React.StrictMode>
        );
    },
});
