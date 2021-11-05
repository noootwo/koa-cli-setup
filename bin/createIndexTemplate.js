import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import { getFilePath } from "./utils.js";

export default (config) => {
  const indexTemplate = fs.readFileSync(getFilePath("./template/index.ejs"));

  const code = ejs.render(indexTemplate.toString(), {
    port: config.port,
    middleware: config.middleware,
  });

  return prettier.format(code, { parser: "babel" });
};
