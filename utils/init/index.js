const initConfig = require('./initConfig');
const initFiles = require('./initFiles');
const initDockerSecrets = require('./initDockerSecrets');
const initSecret = require('./initSecret');
const normalizeTheme = require('./normalizeTheme');

const initApp = async () => {
  if (!process.env.SECRET) {
    console.error('ERROR: SECRET key is missing in environment variables');
    process.exit(1);
  }
  initDockerSecrets();
  initSecret();
  await initFiles();
  await initConfig();
  await normalizeTheme();
};

module.exports = initApp;
