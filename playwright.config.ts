import { PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/dropdown.test.ts"],
  use: {
    headless: false,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: 500,
    },
  },
  reporter: [['dot'], ['json', {
    outputFile: 'jsonReports/jsonReport.json'
  }], ['html', {
    open: 'on-failure'
  }]]
};

export default config;
