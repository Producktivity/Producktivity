import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview, VueRenderer } from '@storybook/vue3';

import './styles.css';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<VueRenderer>({
      attributeName: 'data-mode',
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
