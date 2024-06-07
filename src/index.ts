/* eslint-disable no-console */
import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { config } from "./config";
import { cssFindVariables } from "./css-find-vars";

const argv = yargs(hideBin(process.argv))
  .locale("en")
  .option("dir", {
    alias: "d",
    describe: "Directory to search",
    type: "string",
    default: config.dir,
  })
  .option("pattern", {
    alias: "p",
    describe: "CSS variable pattern",
    type: "string",
    default: config.pattern,
  })
  .option("extensions", {
    alias: "e",
    describe: "File extensions to look for",
    type: "array",
    default: config.extensions,
  })
  .option("unique", {
    alias: "u",
    describe: "Return unique variables only",
    type: "boolean",
    default: config.unique,
  })
  .help().argv;

(async () => {
  const args = await argv;

  if (require.main === module) {
    const resultVariables = cssFindVariables(
      args.dir as string,
      args.pattern as string,
      args.extensions as string[],
      args.unique as boolean,
    );

    if (!resultVariables.length) {
      console.log(chalk.gray("No variables found matching the pattern."));
      return;
    }

    resultVariables.forEach((variable) =>
      console.log(chalk.blue("CSS Variable found:"), chalk.green(variable)),
    );
  }
})();
