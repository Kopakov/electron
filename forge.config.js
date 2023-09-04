require('dotenv').config();

console.log('Test: ', process.env.GITHUB_KEY);

module.exports = {
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32']
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin']
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Kopakov',
          name: 'electron'
        },
        prerelease: false,
        draft: true,
        authToken: process.env.GITHUB_KEY
      }
    }
  ],
};
