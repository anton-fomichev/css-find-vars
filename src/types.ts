export type OrderType = "ASC" | "DESC";
export type GroupType = "file";

export type BaseFindOptions = {
  dir: string;
  pattern: string;
  extensions: string[];
};

export type FindOptionsWithUnique = BaseFindOptions & {
  unique?: boolean;
};

export type FindOptionsWithGroup = BaseFindOptions & {
  group?: GroupType;
};

export type FindOptionsWithOrder = BaseFindOptions & {
  order?: OrderType;
};
