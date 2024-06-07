import fs from "fs";
import path from "path";

export const cssFindVariables = (
  dir: string,
  pattern: string,
  extensions: string[],
  unique: boolean,
): string[] => {
  const varPattern = new RegExp(pattern, "g");
  const vars: string[] = [];

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
      matches.forEach((variable) => vars.push(variable));
    }
  }

  execDirRecursive(dir, execFileContents);

  if (unique) {
    return Array.from(new Set(vars)).sort();
  }

  return vars.sort();
};
