/* eslint-disable no-console */
import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { DEFAULT_OPTIONS } from "./config";
import { cssFindVars } from "./css-find-vars";
import { GroupType, OrderType } from "./types";

const argv = yargs(hideBin(process.argv))
  .locale("en")
  .option("dir", {
    alias: "d",
    describe: "Directory to search",
    type: "string",
    default: DEFAULT_OPTIONS.dir,
  })
  .option("pattern", {
    alias: "p",
    describe: "CSS variable pattern",
    type: "string",
    default: DEFAULT_OPTIONS.pattern,
  })
  .option("extensions", {
    alias: "e",
    describe: "File extensions to look for",
    type: "array",
    default: DEFAULT_OPTIONS.extensions,
  })
  .option("unique", {
    alias: "u",
    describe: "Return unique variables only",
    type: "boolean",
    default: DEFAULT_OPTIONS.unique,
  })
  .option("order", {
    alias: "o",
    describe: "Order variables alphabetically in ascending or descending order",
    type: "string",
    default: DEFAULT_OPTIONS.order,
  })
  .option("group", {
    alias: "g",
    describe: "Group variables by the file",
    type: "string",
    default: DEFAULT_OPTIONS.group,
  })
  .help().argv;

(async () => {
  const args = await argv;

  if (require.main === module) {
    const resultVariables = cssFindVars({
      dir: args.dir as string,
      pattern: args.pattern as string,
      extensions: args.extensions as string[],
      unique: args.unique as boolean,
      order: args.order as OrderType,
      group: args.group as GroupType,
    });

    if (Array.isArray(resultVariables)) {
      if (!resultVariables.length) {
        console.log(chalk.gray("No variables found matching the pattern."));
        return;
      }
      resultVariables.forEach((variable) =>
        console.log(chalk.blue("CSS Variable found:"), chalk.green(variable)),
      );
    } else {
      if (!Object.keys(resultVariables).length) {
        console.log(chalk.gray("No variables found matching the pattern."));
        return;
      }
      for (const [fileName, cssVariables] of Object.entries(resultVariables)) {
        console.log(chalk.bgGreen.white(`File ${fileName}:`));
        cssVariables.forEach((variable) =>
          console.log(chalk.blue("CSS Variable found:"), chalk.green(variable)),
        );
      }
    }
  }
})();
