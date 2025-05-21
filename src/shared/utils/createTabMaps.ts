export type TabItem = {
  key: string;
  text: string;
  path: string;
};

export type TabFrom<T extends readonly TabItem[]> = T[number];

export type TabKeyFrom<T extends readonly TabItem[]> = TabFrom<T>["key"];

export function createTabsMap<T extends readonly TabItem[]>(tabList: T) {
  return Object.fromEntries(tabList.map((tab) => [tab.key, tab])) as Record<
    TabKeyFrom<T>,
    TabFrom<T>
  >;
}
