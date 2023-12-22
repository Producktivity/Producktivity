import { join } from 'path';
import { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [join(__dirname, 'src/**/*!(*.stories|*.spec).{vue,ts}')],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Noto Sans Thai Looped', ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
