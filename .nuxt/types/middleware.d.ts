import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.5.5_ioredis@5.4.1_magicast@0.3.5_rollup@4.22_d74dvaa2xksiz3c5wpre6aal4e/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}