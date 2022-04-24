exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find(({ id }) => id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter(({ productId }) => productId === id);
  },
};
