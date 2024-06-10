import {
  FindOptionsWithGroup,
  FindOptionsWithOrder,
  FindOptionsWithUnique,
} from "./types";

export const DEFAULT_OPTIONS: FindOptionsWithUnique &
  FindOptionsWithGroup &
  FindOptionsWithOrder = {
  dir: "./",
  pattern: "--[\\w-]+(?=[;\\s,})])",
  extensions: [".css", ".scss"],
  unique: false,
  order: undefined,
  group: undefined,
};
