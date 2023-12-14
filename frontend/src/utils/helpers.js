export const sortByScoreNull = (data) => {
  if (data) {
    const sorted = [...data].sort(({ score: a }, { score: b }) => (b === null) - (a === null) || b - a);
    return sorted;
  }
  return [];
};

export const filterByScorePassed = (data) => {
  if (data) {
    const filtered = [...data].filter(({ score }) => score !== null);
    return filtered;
  }
  return [];
};

export const formatFormValues = (data) => {
  if (data) {
    const formatted = data.questions.reduce((acc, v) => ({ ...acc, [v._id]: '' }), {});
    return formatted
  }
  return {};
};

export const getLastIdx = (data) => {
  return data ? data.questions.length - 1 : 0;
};

export const getQuestionsAmount = (data) => {
  return data ? data.questions.length : 0;
};

export const getCurrentItem = (data, idx) => {
  return data ? data.questions[idx] : {};
};