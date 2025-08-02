import { PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    headless: process.env.CI ? true : false,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: process.env.CI ? 0 : 500,
    },
  },
  reporter: [['dot'], ['json', {
    outputFile: 'jsonReports/jsonReport.json'
  }], ['html', {
    open: 'on-failure'
  }]]
};

export default config;
