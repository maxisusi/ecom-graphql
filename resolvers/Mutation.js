const { v4: uuid } = require('uuid');
exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, onSale, image, category } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      onSale,
      image,
      category,
    };
    db.products.push(newProduct);
    return newProduct;
  },
  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      else return product;
    });
    return true;
  },
  deleteProduct: (parent, { id }, { db }) => {
    // Delete the product
    db.products = db.products.filter((product) => product.id !== id);

    // Delete reviews associated with the product id
    db.reviews = db.reviews.filter((review) => review.productId !== id);
    return true;
  },
  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
  },
  updateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id);
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  },
  updateProduct: (parent, { id, input }, { db }) => {
    const index = db.products.findIndex((product) => product.id === id);
    db.products[index] = {
      ...db.product[index],
      ...input,
    };
  },
};
