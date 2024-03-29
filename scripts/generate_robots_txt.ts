import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { loadEnv } from 'vite';

const createRobotsTxt = (mode: string) => {
  const env = loadEnv(mode, process.cwd());
  if (env.VITE_ROBOTS_TXT_ALLOW === 'true') {
    return `User-agent: *\nAllow: /\n`;
  } else {
    return `User-agent: *\nDisallow: /\n`;
  }
};

export const generateRobotsTxt = (mode: string) => {
  const filename = fileURLToPath(import.meta.url);
  const foldername = dirname(filename);
  const outputname = join(foldername, '../public/robots.txt');
  // ユーザーの入力がここに到達することはない
  // eslint-disable-next-line detect-non-literal-fs-filename
  writeFileSync(outputname, createRobotsTxt(mode));
};