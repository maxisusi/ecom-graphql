exports.Query = {
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id }, { categories }) => {
    return categories.find((categories) => categories.id === id);
  },
  reviews: (parent, args, { reviews }) => {
    return reviews;
  },

  review: (parent, { id }, { reviews }) => {
    return reviews.find((review) => review.id === id);
  },
};
