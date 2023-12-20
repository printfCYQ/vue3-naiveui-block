import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from "node:url";
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      configFile: './uno.config.ts',
    }),
    AutoImport({
      imports: [
        "vue",
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
      dts: "src/auto-import.d.ts",
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url)),
    },
  },
})
