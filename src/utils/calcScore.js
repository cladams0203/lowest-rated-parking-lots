export const calcScore = (review_count, rating) => {
  return (review_count * rating) / (review_count + 1);
};
