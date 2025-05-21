// vite.config.ts
import { defineConfig } from "file:///workspaces/Internet_device_visualization/node_modules/vite/dist/node/index.js";
import vue from "file:///workspaces/Internet_device_visualization/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import AutoImport from "file:///workspaces/Internet_device_visualization/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///workspaces/Internet_device_visualization/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///workspaces/Internet_device_visualization/node_modules/unplugin-vue-components/dist/resolvers.js";
import ElementPlus from "file:///workspaces/Internet_device_visualization/node_modules/unplugin-element-plus/dist/vite.mjs";
var __vite_injected_original_dirname = "/workspaces/Internet_device_visualization";
var vite_config_default = defineConfig(({ command, mode }) => {
  console.log(command, mode);
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      ElementPlus({
        // useSource: true
      })
    ],
    publicDir: "public",
    base: "./",
    server: {
      host: "0.0.0.0",
      port: 8112,
      open: false,
      strictPort: false
      // proxy: {}
    },
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./src"),
        "components": resolve(__vite_injected_original_dirname, "./src/components"),
        "api": resolve(__vite_injected_original_dirname, "./src/api")
      }
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // charset: false,
          additionalData: `@use "./src/assets/css/variable.scss" as *;`
        }
      }
    },
    build: {
      outDir: "dist"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9JbnRlcm5ldF9kZXZpY2VfdmlzdWFsaXphdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3dvcmtzcGFjZXMvSW50ZXJuZXRfZGV2aWNlX3Zpc3VhbGl6YXRpb24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3dvcmtzcGFjZXMvSW50ZXJuZXRfZGV2aWNlX3Zpc3VhbGl6YXRpb24vdml0ZS5jb25maWcudHNcIjtcbmltcG9ydCB0eXBlIHsgVXNlckNvbmZpZywgQ29uZmlnRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbi8vaHR0cHM6Ly9naXRodWIuY29tL2VsZW1lbnQtcGx1cy91bnBsdWdpbi1lbGVtZW50LXBsdXMvYmxvYi9IRUFEL1JFQURNRS56aC1DTi5tZFxuaW1wb3J0IEVsZW1lbnRQbHVzIGZyb20gJ3VucGx1Z2luLWVsZW1lbnQtcGx1cy92aXRlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG5cbiAgLy8gY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJylcbiAgY29uc29sZS5sb2coY29tbWFuZCwgbW9kZSk7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW3Z1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gICAgRWxlbWVudFBsdXMoe1xuICAgICAgLy8gdXNlU291cmNlOiB0cnVlXG4gICAgfSlcbiAgICBdLFxuICAgIHB1YmxpY0RpcjogXCJwdWJsaWNcIixcbiAgICBiYXNlOiBcIi4vXCIsXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICBwb3J0OiA4MTEyLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBzdHJpY3RQb3J0OiBmYWxzZSxcbiAgICAgIC8vIHByb3h5OiB7fVxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgICBcImNvbXBvbmVudHNcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50c1wiKSxcbiAgICAgICAgXCJhcGlcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXBpXCIpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgLy8gY3NzXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICAvLyBjaGFyc2V0OiBmYWxzZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCIuL3NyYy9hc3NldHMvY3NzL3ZhcmlhYmxlLnNjc3NcIiBhcyAqO2AsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogJ2Rpc3QnLFxuICAgIH0sXG4gIH1cblxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUVwQyxPQUFPLGlCQUFpQjtBQVR4QixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUE2QjtBQUd4RSxVQUFRLElBQUksU0FBUyxJQUFJO0FBQ3pCLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUFDLElBQUk7QUFBQSxNQUNkLFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUNELFlBQVk7QUFBQTtBQUFBLE1BRVosQ0FBQztBQUFBLElBQ0Q7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQTtBQUFBLElBRWQ7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsUUFDL0IsY0FBYyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLFFBQ25ELE9BQU8sUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDdkM7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUE7QUFBQSxNQUVILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQTtBQUFBLFVBRUosZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBRUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
