module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: [
    'out-tsc/n2e'
  ],
  output_folder: "n2e/e2e-test-results",
  live_output: true,
  webdriver: {
    start_process: true,
    port: 9515,
    server_path: require('chromedriver').path,
    cli_args: []
  },

  test_settings: {
    default: {
      launch_url: 'https://localhost:4200',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--headless',
            '--disable-gpu',
            '--window-size=800,600',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-browser-side-navigation',
            // `--binary=${process.env.CHROME_BIN}`
          ],
          w3c: false,
          prefs: {
            "profile.default_content_setting_values.geolocation": 1,
            "profile.default_content_setting_values.notifications": 2,
          },
        },
      },
      globals: {
        waitForConditionTimeout: 30000
      }
    }
  }
};
