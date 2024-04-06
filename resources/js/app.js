import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import FeatherDirective from "./FeatherIcons.js";
import { createPinia } from "pinia";

const appName = import.meta.env.VITE_APP_NAME || "Loading";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        const pinia = createPinia();
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue);

        app.directive("feather", FeatherDirective);
        app.use(pinia);
        app.mount(el);

        return app;
    },
    progress: {
        color: "#4B5563",
    },
});
