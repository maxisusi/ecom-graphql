exports.Query = {
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;
    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, { id }, { db }) => {
    return db.products.find((product) => product.id === id);
  },
  categories: (parent, args, { db }) => {
    return db.categories;
  },
  category: (parent, { id }, { db }) => {
    return db.categories.find((category) => category.id === id);
  },
  reviews: (parent, args, { db }) => {
    return db.reviews;
  },

  review: (parent, { id }, { db }) => {
    return db.reviews.find((review) => review.id === id);
  },
};
