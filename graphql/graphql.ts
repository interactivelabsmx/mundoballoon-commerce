export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
}

export type ComparableDoubleOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  ngt?: InputMaybe<Scalars['Float']>;
  ngte?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<Scalars['Float']>>;
  nlt?: InputMaybe<Scalars['Float']>;
  nlte?: InputMaybe<Scalars['Float']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type CountryCode = {
  __typename?: 'CountryCode';
  capital: Scalars['String'];
  continent: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  dial: Scalars['String'];
  ds: Scalars['String'];
  fifa: Scalars['String'];
  geoNameId: Scalars['Int'];
  ioc: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  itu: Scalars['String'];
  languages: Scalars['String'];
  officialNameEn: Scalars['String'];
  officialNameEs: Scalars['String'];
  supported: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  wmo: Scalars['String'];
};

export type EventCartDetail = {
  __typename?: 'EventCartDetail';
  eventCartId: Scalars['Int'];
  label: Scalars['String'];
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku: Scalars['String'];
  userEvent?: Maybe<UserEvent>;
  userEventId?: Maybe<Scalars['Int']>;
  variant?: Maybe<ProductVariant>;
};

export type EventCartDetailFilterInput = {
  and?: InputMaybe<Array<EventCartDetailFilterInput>>;
  eventCartId?: InputMaybe<ComparableInt32OperationFilterInput>;
  label?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<EventCartDetailFilterInput>>;
  price?: InputMaybe<ComparableDoubleOperationFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  quantity?: InputMaybe<ComparableDoubleOperationFilterInput>;
  sku?: InputMaybe<StringOperationFilterInput>;
  userEvent?: InputMaybe<UserEventFilterInput>;
  userEventId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  variant?: InputMaybe<ProductVariantFilterInput>;
};

export type EventCartDetailInput = {
  eventCartId: Scalars['Int'];
  label: Scalars['String'];
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku: Scalars['String'];
  userEvent?: InputMaybe<UserEventInput>;
  userEventId?: InputMaybe<Scalars['Int']>;
  variant?: InputMaybe<ProductVariantInput>;
};

export type FirebaseUser = {
  __typename?: 'FirebaseUser';
  carts?: Maybe<Array<UserCart>>;
  claims?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  events?: Maybe<Array<UserEvent>>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  phoneNumber?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<ProductVariantReview>>;
  userId: Scalars['String'];
};

export type KeyValuePairOfStringAndListOfProduct = {
  __typename?: 'KeyValuePairOfStringAndListOfProduct';
  key: Scalars['String'];
  value: Array<Product>;
};

export type ListFilterInputTypeOfEventCartDetailFilterInput = {
  all?: InputMaybe<EventCartDetailFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<EventCartDetailFilterInput>;
  some?: InputMaybe<EventCartDetailFilterInput>;
};

export type ListFilterInputTypeOfProductVariantFilterInput = {
  all?: InputMaybe<ProductVariantFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantFilterInput>;
  some?: InputMaybe<ProductVariantFilterInput>;
};

export type ListFilterInputTypeOfProductVariantMediumFilterInput = {
  all?: InputMaybe<ProductVariantMediumFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantMediumFilterInput>;
  some?: InputMaybe<ProductVariantMediumFilterInput>;
};

export type ListFilterInputTypeOfProductVariantReviewFilterInput = {
  all?: InputMaybe<ProductVariantReviewFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantReviewFilterInput>;
  some?: InputMaybe<ProductVariantReviewFilterInput>;
};

export type ListFilterInputTypeOfProductVariantValueFilterInput = {
  all?: InputMaybe<ProductVariantValueFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantValueFilterInput>;
  some?: InputMaybe<ProductVariantValueFilterInput>;
};

export type ListFilterInputTypeOfUserCartFilterInput = {
  all?: InputMaybe<UserCartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserCartFilterInput>;
  some?: InputMaybe<UserCartFilterInput>;
};

export type ListFilterInputTypeOfUserEventFilterInput = {
  all?: InputMaybe<UserEventFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserEventFilterInput>;
  some?: InputMaybe<UserEventFilterInput>;
};

export type ListFilterInputTypeOfUserPaymentProfileFilterInput = {
  all?: InputMaybe<UserPaymentProfileFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserPaymentProfileFilterInput>;
  some?: InputMaybe<UserPaymentProfileFilterInput>;
};

export type ListFilterInputTypeOfVariantValueFilterInput = {
  all?: InputMaybe<VariantValueFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<VariantValueFilterInput>;
  some?: InputMaybe<VariantValueFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProductVariantReview?: Maybe<ProductVariant>;
  createProduct: Product;
  createProductCategory: ProductCategory;
  createProductVariant: ProductVariant;
  createUser: User;
  createUserEvent: UserEvent;
  createVariant: Variant;
  createVariantValue: VariantValue;
  deleteProduct: Scalars['Boolean'];
  deleteProductVariant: Scalars['Boolean'];
  deleteProductVariantMedia: Scalars['Boolean'];
  deleteProductVariantValue: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteUserEvent: Scalars['Boolean'];
  grantAdminUser: Scalars['Boolean'];
  productVariantAddMedia?: Maybe<ProductVariant>;
  productVariantAddValue: ProductVariant;
  revokeAdminUser: Scalars['Boolean'];
  updateProduct: Product;
  updateProductVariant: ProductVariant;
  updateUserEvent: UserEvent;
};

export type MutationAddProductVariantReviewArgs = {
  input: ProductVariantReviewInput;
};

export type MutationCreateProductArgs = {
  input: ProductInput;
};

export type MutationCreateProductCategoryArgs = {
  input: ProductCategoryInput;
};

export type MutationCreateProductVariantArgs = {
  input: ProductVariantInput;
};

export type MutationCreateUserArgs = {
  userId: Scalars['String'];
};

export type MutationCreateUserEventArgs = {
  details: Scalars['String'];
  name: Scalars['String'];
};

export type MutationCreateVariantArgs = {
  input: VariantInput;
};

export type MutationCreateVariantValueArgs = {
  input: VariantValueInput;
};

export type MutationDeleteProductArgs = {
  productId: Scalars['Int'];
};

export type MutationDeleteProductVariantArgs = {
  productVariantId: Scalars['Int'];
};

export type MutationDeleteProductVariantMediaArgs = {
  productVariantMediaId: Scalars['Int'];
};

export type MutationDeleteProductVariantValueArgs = {
  productVariantId: Scalars['Int'];
  variantId: Scalars['Int'];
  variantValueId: Scalars['Int'];
};

export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};

export type MutationDeleteUserEventArgs = {
  userEventId: Scalars['Int'];
};

export type MutationGrantAdminUserArgs = {
  userId: Scalars['String'];
};

export type MutationProductVariantAddMediaArgs = {
  file: Scalars['Upload'];
  input: ProductVariantMediumInput;
};

export type MutationProductVariantAddValueArgs = {
  input: ProductVariantValueInput;
};

export type MutationRevokeAdminUserArgs = {
  userId: Scalars['String'];
};

export type MutationUpdateProductArgs = {
  input: ProductEntityInput;
};

export type MutationUpdateProductVariantArgs = {
  input: ProductVariantEntityInput;
};

export type MutationUpdateUserEventArgs = {
  input: UserEventInput;
};

export type NavCategory = {
  __typename?: 'NavCategory';
  href: Scalars['String'];
  imageAlt: Scalars['String'];
  imageSrc: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
};

export type NavOption = {
  __typename?: 'NavOption';
  href?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  options?: Maybe<Array<NavCategory>>;
  order: Scalars['Int'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<ProductCategory>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  variants?: Maybe<Array<ProductVariant>>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  description: Scalars['String'];
  name: Scalars['String'];
  productCategoryId?: Maybe<Scalars['Int']>;
};

export type ProductCategoryFilterInput = {
  and?: InputMaybe<Array<ProductCategoryFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductCategoryFilterInput>>;
  productCategoryId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
};

export type ProductCategoryInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  productCategoryId?: InputMaybe<Scalars['Int']>;
};

export type ProductCategorySortInput = {
  description?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId: Scalars['Int'];
};

export type ProductEntityInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId: Scalars['Int'];
};

export type ProductEntitySortInput = {
  description?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
};

export type ProductFilterInput = {
  and?: InputMaybe<Array<ProductFilterInput>>;
  category?: InputMaybe<ProductCategoryFilterInput>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductFilterInput>>;
  price?: InputMaybe<ComparableDoubleOperationFilterInput>;
  productCategoryId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  variants?: InputMaybe<ListFilterInputTypeOfProductVariantFilterInput>;
};

export type ProductInput = {
  category?: InputMaybe<ProductCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productCategoryId: Scalars['Int'];
  productId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  variants?: InputMaybe<Array<ProductVariantInput>>;
};

<<<<<<< HEAD
=======
export type ProductQuickView = {
  __typename?: 'ProductQuickView';
  product?: Maybe<Product>;
  variantValues?: Maybe<Array<VariantValue>>;
  variants?: Maybe<Array<Variant>>;
};

>>>>>>> eea98ae (Updated config to read graphql.ts and moved quick view to in folder location)
export type ProductSortInput = {
  category?: InputMaybe<ProductCategorySortInput>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  productCategoryId?: InputMaybe<SortEnumType>;
  productId?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  description: Scalars['String'];
  media?: Maybe<Array<ProductVariantMedium>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId?: Maybe<Scalars['Int']>;
  reviews?: Maybe<Array<ProductVariantReview>>;
  sku: Scalars['String'];
  variantValues?: Maybe<Array<ProductVariantValue>>;
};

export type ProductVariantEntity = {
  __typename?: 'ProductVariantEntity';
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku: Scalars['String'];
};

export type ProductVariantEntityInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId: Scalars['Int'];
  sku: Scalars['String'];
};

export type ProductVariantFilterInput = {
  and?: InputMaybe<Array<ProductVariantFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  media?: InputMaybe<ListFilterInputTypeOfProductVariantMediumFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductVariantFilterInput>>;
  price?: InputMaybe<ComparableDoubleOperationFilterInput>;
  productId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productVariantId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  reviews?: InputMaybe<ListFilterInputTypeOfProductVariantReviewFilterInput>;
  sku?: InputMaybe<StringOperationFilterInput>;
  variantValues?: InputMaybe<ListFilterInputTypeOfProductVariantValueFilterInput>;
};

export type ProductVariantInput = {
  description: Scalars['String'];
  media?: InputMaybe<Array<ProductVariantMediumInput>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['Int'];
  productVariantId?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<Array<ProductVariantReviewInput>>;
  sku: Scalars['String'];
  variantValues?: InputMaybe<Array<ProductVariantValueInput>>;
};

export type ProductVariantMedium = {
  __typename?: 'ProductVariantMedium';
  description: Scalars['String'];
  mediaType: Scalars['String'];
  name: Scalars['String'];
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  productVariantMediaId: Scalars['Int'];
  quality: Scalars['String'];
  url: Scalars['String'];
};

export type ProductVariantMediumFilterInput = {
  and?: InputMaybe<Array<ProductVariantMediumFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  mediaType?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductVariantMediumFilterInput>>;
  productVariant?: InputMaybe<ProductVariantFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productVariantMediaId?: InputMaybe<ComparableInt32OperationFilterInput>;
  quality?: InputMaybe<StringOperationFilterInput>;
  url?: InputMaybe<StringOperationFilterInput>;
};

export type ProductVariantMediumInput = {
  description: Scalars['String'];
  mediaType: Scalars['String'];
  name: Scalars['String'];
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  productVariantMediaId: Scalars['Int'];
  quality: Scalars['String'];
  url: Scalars['String'];
};

export type ProductVariantReview = {
  __typename?: 'ProductVariantReview';
  comments?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  productVariantReviewId: Scalars['Int'];
  rating: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type ProductVariantReviewFilterInput = {
  and?: InputMaybe<Array<ProductVariantReviewFilterInput>>;
  comments?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<ProductVariantReviewFilterInput>>;
  productVariant?: InputMaybe<ProductVariantFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productVariantReviewId?: InputMaybe<ComparableInt32OperationFilterInput>;
  rating?: InputMaybe<ComparableInt32OperationFilterInput>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ProductVariantReviewInput = {
  comments?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  productVariantReviewId: Scalars['Int'];
  rating: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserInput>;
  userId: Scalars['String'];
};

export type ProductVariantValue = {
  __typename?: 'ProductVariantValue';
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  variant?: Maybe<Variant>;
  variantId: Scalars['Int'];
  variantValue?: Maybe<VariantValue>;
  variantValueId: Scalars['Int'];
};

export type ProductVariantValueFilterInput = {
  and?: InputMaybe<Array<ProductVariantValueFilterInput>>;
  or?: InputMaybe<Array<ProductVariantValueFilterInput>>;
  productVariant?: InputMaybe<ProductVariantFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  variant?: InputMaybe<VariantFilterInput>;
  variantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  variantValue?: InputMaybe<VariantValueFilterInput>;
  variantValueId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type ProductVariantValueInput = {
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  variant?: InputMaybe<VariantInput>;
  variantId: Scalars['Int'];
  variantValue?: InputMaybe<VariantValueInput>;
  variantValueId: Scalars['Int'];
};

/** A connection to a list of items. */
export type ProductsEntityConnection = {
  __typename?: 'ProductsEntityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEntityEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductEntity>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductsEntityEdge = {
  __typename?: 'ProductsEntityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductEntity;
};

export type Query = {
  __typename?: 'Query';
  countryCodes: Array<CountryCode>;
  homepageProducts: Array<KeyValuePairOfStringAndListOfProduct>;
  loggedInUser?: Maybe<User>;
  navOptions: Array<NavOption>;
  productById?: Maybe<Product>;
  productCategories: Array<ProductCategory>;
  productVariantById?: Maybe<ProductVariant>;
  productVariantsEntityById: Array<ProductVariantEntity>;
  productsEntity?: Maybe<ProductsEntityConnection>;
  searchProducts?: Maybe<SearchProductsConnection>;
  sortOptions: Array<Scalars['String']>;
  userById?: Maybe<FirebaseUser>;
  userEventById?: Maybe<UserEvent>;
  userEventByUserId: Array<UserEvent>;
  users?: Maybe<UsersConnection>;
  variantValues: Array<VariantValue>;
  variants: Array<Variant>;
};

export type QueryHomepageProductsArgs = {
  includeBestSellingProducts: Scalars['Boolean'];
  includeNewestProducts: Scalars['Boolean'];
};

export type QueryProductByIdArgs = {
  productId: Scalars['Int'];
};

export type QueryProductVariantByIdArgs = {
  productVariantId: Scalars['Int'];
};

export type QueryProductVariantsEntityByIdArgs = {
  productId: Scalars['Int'];
};

export type QueryProductsEntityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ProductEntitySortInput>>;
};

export type QuerySearchProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ProductSortInput>>;
  where?: InputMaybe<ProductFilterInput>;
};

export type QueryUserByIdArgs = {
  userId: Scalars['String'];
};

export type QueryUserEventByIdArgs = {
  userEventid: Scalars['Int'];
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryVariantValuesArgs = {
  variantId: Scalars['Int'];
};

/** A connection to a list of items. */
export type SearchProductsConnection = {
  __typename?: 'SearchProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SearchProductsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SearchProductsEdge = {
  __typename?: 'SearchProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  carts?: Maybe<Array<UserCart>>;
  events?: Maybe<Array<UserEvent>>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  reviews?: Maybe<Array<ProductVariantReview>>;
  userId: Scalars['String'];
};

export type UserCart = {
  __typename?: 'UserCart';
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku: Scalars['String'];
  userId: Scalars['String'];
  variant?: Maybe<ProductVariant>;
};

export type UserCartFilterInput = {
  and?: InputMaybe<Array<UserCartFilterInput>>;
  or?: InputMaybe<Array<UserCartFilterInput>>;
  price?: InputMaybe<ComparableDoubleOperationFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  quantity?: InputMaybe<ComparableDoubleOperationFilterInput>;
  sku?: InputMaybe<StringOperationFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  variant?: InputMaybe<ProductVariantFilterInput>;
};

export type UserCartInput = {
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku: Scalars['String'];
  userId: Scalars['String'];
  variant?: InputMaybe<ProductVariantInput>;
};

export type UserEvent = {
  __typename?: 'UserEvent';
  carts?: Maybe<Array<EventCartDetail>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  details: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userEventId: Scalars['Int'];
  userId: Scalars['String'];
};

export type UserEventFilterInput = {
  and?: InputMaybe<Array<UserEventFilterInput>>;
  carts?: InputMaybe<ListFilterInputTypeOfEventCartDetailFilterInput>;
  createdAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  date?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  details?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserEventFilterInput>>;
  updatedAt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userEventId?: InputMaybe<ComparableInt32OperationFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type UserEventInput = {
  carts?: InputMaybe<Array<EventCartDetailInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  details: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserInput>;
  userEventId: Scalars['Int'];
  userId: Scalars['String'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  carts?: InputMaybe<ListFilterInputTypeOfUserCartFilterInput>;
  events?: InputMaybe<ListFilterInputTypeOfUserEventFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  paymentProfiles?: InputMaybe<ListFilterInputTypeOfUserPaymentProfileFilterInput>;
  reviews?: InputMaybe<ListFilterInputTypeOfProductVariantReviewFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type UserInput = {
  carts?: InputMaybe<Array<UserCartInput>>;
  events?: InputMaybe<Array<UserEventInput>>;
  paymentProfiles?: InputMaybe<Array<UserPaymentProfileInput>>;
  reviews?: InputMaybe<Array<ProductVariantReviewInput>>;
  userId: Scalars['String'];
};

export type UserPaymentProfile = {
  __typename?: 'UserPaymentProfile';
  processorId: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
  userProfileId: Scalars['Int'];
};

export type UserPaymentProfileFilterInput = {
  and?: InputMaybe<Array<UserPaymentProfileFilterInput>>;
  or?: InputMaybe<Array<UserPaymentProfileFilterInput>>;
  processorId?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  userProfileId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type UserPaymentProfileInput = {
  processorId: Scalars['String'];
  user?: InputMaybe<UserInput>;
  userId: Scalars['String'];
  userProfileId: Scalars['Int'];
};

/** A connection to a list of items. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<UsersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<FirebaseUser>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FirebaseUser;
};

export type Variant = {
  __typename?: 'Variant';
  name: Scalars['String'];
  type: Scalars['String'];
  variantId?: Maybe<Scalars['Int']>;
  variantValues?: Maybe<Array<VariantValue>>;
};

export type VariantFilterInput = {
  and?: InputMaybe<Array<VariantFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<VariantFilterInput>>;
  type?: InputMaybe<StringOperationFilterInput>;
  variantId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  variantValues?: InputMaybe<ListFilterInputTypeOfVariantValueFilterInput>;
};

export type VariantInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  variantId?: InputMaybe<Scalars['Int']>;
  variantValues?: InputMaybe<Array<VariantValueInput>>;
};

export type VariantValue = {
  __typename?: 'VariantValue';
  productVariantValues?: Maybe<Array<ProductVariantValue>>;
  value: Scalars['String'];
  variantId: Scalars['Int'];
  variantValueId?: Maybe<Scalars['Int']>;
};

export type VariantValueFilterInput = {
  and?: InputMaybe<Array<VariantValueFilterInput>>;
  or?: InputMaybe<Array<VariantValueFilterInput>>;
  productVariantValues?: InputMaybe<ListFilterInputTypeOfProductVariantValueFilterInput>;
  value?: InputMaybe<StringOperationFilterInput>;
  variantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  variantValueId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
};

export type VariantValueInput = {
  productVariantValues?: InputMaybe<Array<ProductVariantValueInput>>;
  value: Scalars['String'];
  variantId: Scalars['Int'];
  variantValueId?: InputMaybe<Scalars['Int']>;
};
