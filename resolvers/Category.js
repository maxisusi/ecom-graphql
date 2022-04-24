exports.Category = {
  products: ({ id: categoryId }, { filter }, { products }) => {
    let filteredProducts = products.filter(
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
