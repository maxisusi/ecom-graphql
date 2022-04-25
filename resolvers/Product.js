exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    return db.categories.find(({ id }) => id === categoryId);
  },
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter(({ productId }) => productId === id);
  },
};
