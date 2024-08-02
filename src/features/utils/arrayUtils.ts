// utils/idUtils.ts

interface Tab {
  id: number | string;
}

export const getNewId = (array: Tab[]): number => {
  return array.length > 0
    ? Math.max(
        ...array
          .map((tab) =>
            typeof tab.id === "number" ? tab.id : parseInt(tab.id as string, 10)
          )
          .filter((id) => !isNaN(id))
      ) + 1
    : 1;
};
