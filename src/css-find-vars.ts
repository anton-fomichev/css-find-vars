import fs from "fs";
import path from "path";

import {
  BaseFindOptions,
  FindOptionsWithGroup,
  FindOptionsWithOrder,
  FindOptionsWithUnique,
} from "./types";
import { filterInPlaceByUnique, sortInPlace } from "./utils";

const findCssVariablesByFile = ({
  dir,
  pattern,
  extensions,
}: BaseFindOptions): Record<string, string[]> => {
  const varPattern = new RegExp(pattern, "g");
  const varsByFile: Record<string, string[]> = {};

  function isFileMatchesExtensions(filename: string): boolean {
    return extensions.some((extension) => filename.endsWith(extension));
  }

  function execDirRecursive(
    directory: string,
    cb: (fullPath: string) => void,
  ): void {
    const files = fs.readdirSync(directory);

    files.forEach((filename): void => {
      const fullPath = path.join(directory, filename);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        return execDirRecursive(fullPath, cb);
      } else if (stats.isFile() && isFileMatchesExtensions(filename)) {
        return cb(fullPath);
      }
    });
  }

  function execFileContents(fullPath: string): void {
    const content = fs.readFileSync(fullPath, "utf-8");
    const matches = content.match(varPattern);
    if (matches) {
      varsByFile[fullPath] = matches;
    }
  }

  execDirRecursive(dir, execFileContents);

  return varsByFile;
};

const findCssVariablesWithGroup = ({
  order,
  unique,
  ...options
}: FindOptionsWithGroup & FindOptionsWithOrder & FindOptionsWithUnique) => {
  const cssVariablesByFile = findCssVariablesByFile(options);

  Object.entries(cssVariablesByFile).forEach(([, cssVariables]) => {
    if (order) {
      sortInPlace(cssVariables, order);
    }
    if (unique) {
      filterInPlaceByUnique(cssVariables);
    }
  });

  return cssVariablesByFile;
};

const findCssVariables = ({
  order,
  unique,
  ...options
}: FindOptionsWithOrder & FindOptionsWithUnique) => {
  const flatCssVariables = Object.values(
    findCssVariablesByFile(options),
  ).flat();

  if (order) {
    sortInPlace(flatCssVariables, order);
  }
  if (unique) {
    filterInPlaceByUnique(flatCssVariables);
  }

  return flatCssVariables;
};

export const cssFindVars = ({
  group,
  ...options
}: FindOptionsWithGroup & FindOptionsWithOrder & FindOptionsWithUnique) => {
  if (group === "file") {
    return findCssVariablesWithGroup(options);
  }
  return findCssVariables(options);
};
