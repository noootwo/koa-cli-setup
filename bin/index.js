#!/usr/bin/env node
import fs from "fs";
import execa from "execa";
import chalk from "chalk";
import createIndexTemplate from "./createIndexTemplate.js";
import createPackageTemplate from "./createPackageTemplate.js";
import question from "./question/index.js";
import { createConfig } from "./config.js";
import { getRootPath } from "./utils.js";

const answer = await question();

const config = createConfig(answer);

const rootPath = getRootPath(config);

console.log(chalk.blue(`创建文件夹：${config.packageName}`));
fs.mkdirSync(rootPath);

console.log(chalk.blue(`创建入口文件：index.js`));
fs.writeFileSync(`${rootPath}/index.js`, createIndexTemplate(config));

console.log(chalk.blue(`创建package.json`));
fs.writeFileSync(`${rootPath}/package.json`, createPackageTemplate(config));

console.log(chalk.blue(`安装依赖...`));
execa("yarn", {
  cwd: rootPath,
  stdio: [2, 2, 2],
});
