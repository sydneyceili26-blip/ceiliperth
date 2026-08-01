import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ceiliperth.app',
  appName: 'Perth Céilí',
  webDir: 'dist',
  ios: {
    contentInset: 'automatic',
  },
  android: {
    backgroundColor: '#faf9f7',
  },
};

export default config;
