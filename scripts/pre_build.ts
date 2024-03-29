import { program } from "commander";
import { generateRobotsTxt } from './generate_robots_txt.ts';

program.option("--mode <mode>", "server environment", "development");
program.parse();
const options = program.opts();

generateRobotsTxt(options.mode);