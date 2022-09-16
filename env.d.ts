/// <reference types="vite/client" />

import route from "ziggy-js";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $route: typeof route
    }
}
