import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  rules: [
    [/^m-px-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
    ["white-black", { color: "white", 'background-color': "black" }],
    ["black-white", { color: "black", 'background-color': "white" }],
  ],
  shortcuts: {
    fcc: "flex justify-center items-center"
  },
  presets: [presetIcons(), presetAttributify(), presetUno()],
})