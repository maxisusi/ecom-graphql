const { gql } = require('apollo-server');
exports.typeDefs = gql`
  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(id: ID!): Boolean
    deleteProduct(id: ID!): Boolean
    deleteReview(id: ID!): Boolean
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category
    updateProduct(id: ID!, input: UpdateProductInput!): Product
    updateReview(id: ID!, input: UpdateReviewInput): Review
  }
  type Query {
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
    review(id: ID!): Review
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }
  input ProductsFilterInput {
    onSale: Boolean
  }
  input AddCategoryInput {
    name: String!
  }
  input UpdateCategoryInput {
    name: String!
  }
  input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: String
  }
  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: String!
  }
  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: Int!
  }
`;
