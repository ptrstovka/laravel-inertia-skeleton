import { createInertiaApp } from "@inertiajs/inertia-vue3"
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createApp, h } from "vue"

import '../css/app.css'
import route from 'ziggy-js';

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue') as unknown as Record<string, Promise<any>>),
    setup({el, app, props, plugin}) {
        const vue = createApp({render: () => h(app, props)})
            .use(plugin)

        vue.config.globalProperties.$route = route

        vue.mount(el)
    },
})
