import { join } from "path";
import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [join(__dirname, "src/**/*!(*.stories|*.spec).{vue,ts}")],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "Noto Sans Thai Variable", ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
