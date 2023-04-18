// Usage: for use with github actions workflow passing command line arguments
import { createAppAuth } from '@octokit/auth-app';
import yargs from 'yargs';

const { appId, installationId, privateKey } = yargs(process.argv.slice(2)).argv;

const auth = createAppAuth({
  appId: appId,
  privateKey: privateKey,
  installationId: installationId,
});

const installationAuthentication = await auth({ type: 'installation' });
console.log(installationAuthentication.token); // to be captured by github workflow
