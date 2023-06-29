import { mergeConfig, UserConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

interface ViteConfig extends UserConfig {
  resolve: {
    alias: Record<string, string>;
  };
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
    },
  },
  async viteFinal(config: UserConfig) {
    const viteConfig = (await import('../vite.config.js')).default as ViteConfig;

    // Merge custom configuration into the default config
    const mergedConfig = mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: viteConfig.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
    return mergedConfig;
  },
};
export default config;
