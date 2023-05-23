import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

InertiaProgress.init();

createInertiaApp({
    resolve: async (name) => {
        const pages = await import(`./Pages/${name}`);
        return pages.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
