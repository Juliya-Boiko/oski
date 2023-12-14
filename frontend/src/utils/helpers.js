export const sortByScore = (arr) => {
  if (arr) {
    const sorted = [...arr].sort(({ score: a }, { score: b }) => (b === null) - (a === null) || b - a);
    return sorted;
  }
  return [];
};