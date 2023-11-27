const SOMETHING_WITH_SEMANTIC_MEANING = "something";

export const something = (queue?: number, mockedCallback?: () => {}) => {
  if (queue && queue > 3) {
    if (queue > 5 && mockedCallback) {
      mockedCallback();
      mockedCallback();
    }
    return queue;
  }

  return SOMETHING_WITH_SEMANTIC_MEANING;
};
