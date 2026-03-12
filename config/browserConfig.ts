import { LaunchOptions } from 'playwright';

export function getLaunchOptions(): LaunchOptions {

  const isDebug =
    process.env.PWDEBUG === '1' ||
    process.env.DEBUG === 'true' ||
    process.env.HEADLESS === 'false';

  const options: LaunchOptions = {
    headless: !isDebug,
    slowMo: isDebug ? 100 : 0
  };

  return options;

}