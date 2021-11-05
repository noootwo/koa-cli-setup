import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import { getFilePath } from "./utils.js";

export default (config) => {
  const packageTemplate = fs.readFileSync(
    getFilePath("./template/package.ejs")
  );

  const code = ejs.render(packageTemplate.toString(), config);

  return prettier.format(code, { parser: "json" });
};
