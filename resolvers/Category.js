exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    let filteredProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredProducts;
  },
};
