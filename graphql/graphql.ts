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
  geonameId: Scalars['Int'];
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

export type FirebaseUser = {
  __typename?: 'FirebaseUser';
  carts?: Maybe<Array<UserCart>>;
  claims?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  occasions?: Maybe<Array<UserOccasion>>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  phoneNumber?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type KeyValuePairOfStringAndListOfProduct = {
  __typename?: 'KeyValuePairOfStringAndListOfProduct';
  key: Scalars['String'];
  value: Array<Product>;
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

export type ListFilterInputTypeOfProductVariantValueFilterInput = {
  all?: InputMaybe<ProductVariantValueFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ProductVariantValueFilterInput>;
  some?: InputMaybe<ProductVariantValueFilterInput>;
};

export type ListFilterInputTypeOfVariantValueFilterInput = {
  all?: InputMaybe<VariantValueFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<VariantValueFilterInput>;
  some?: InputMaybe<VariantValueFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createProductCategory: ProductCategory;
  createProductVariant: ProductVariant;
  createUser: User;
  createVariant: Variant;
  createVariantValue: VariantValue;
  deleteProduct: Scalars['Boolean'];
  deleteProductVariant: Scalars['Boolean'];
  deleteProductVariantMedia: Scalars['Boolean'];
  deleteProductVariantValue: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  grantAdminUser: Scalars['Boolean'];
  productVariantAddMedia?: Maybe<ProductVariant>;
  productVariantAddValue: ProductVariant;
  revokeAdminUser: Scalars['Boolean'];
  updateProduct: Product;
  updateProductVariant: ProductVariant;
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

export type OcassionCartDetail = {
  __typename?: 'OcassionCartDetail';
  label: Scalars['String'];
  occasionCartId: Scalars['Int'];
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku: Scalars['String'];
  variant?: Maybe<ProductVariant>;
};

export type OccasionCart = {
  __typename?: 'OccasionCart';
  cartDetails?: Maybe<Array<OcassionCartDetail>>;
  description: Scalars['String'];
  dropOffStage: Scalars['String'];
  occasionCartId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  userOccasionId: Scalars['Int'];
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
  sku: Scalars['String'];
  variantValues?: InputMaybe<Array<ProductVariantValueInput>>;
};

export type ProductVariantMedium = {
  __typename?: 'ProductVariantMedium';
  description?: Maybe<Scalars['String']>;
  mediaType: Scalars['String'];
  name: Scalars['String'];
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['Int'];
  productVariantMediaId?: Maybe<Scalars['Int']>;
  quality: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ProductVariantMediumFilterInput = {
  and?: InputMaybe<Array<ProductVariantMediumFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  mediaType?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductVariantMediumFilterInput>>;
  productVariant?: InputMaybe<ProductVariantFilterInput>;
  productVariantId?: InputMaybe<ComparableInt32OperationFilterInput>;
  productVariantMediaId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  quality?: InputMaybe<StringOperationFilterInput>;
  url?: InputMaybe<StringOperationFilterInput>;
};

export type ProductVariantMediumInput = {
  description?: InputMaybe<Scalars['String']>;
  mediaType: Scalars['String'];
  name: Scalars['String'];
  productVariant?: InputMaybe<ProductVariantInput>;
  productVariantId: Scalars['Int'];
  productVariantMediaId?: InputMaybe<Scalars['Int']>;
  quality: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
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
  id: Scalars['Int'];
  occasions?: Maybe<Array<UserOccasion>>;
  paymentProfiles?: Maybe<Array<UserPaymentProfile>>;
  userId: Scalars['String'];
};

export type UserCart = {
  __typename?: 'UserCart';
  price: Scalars['Float'];
  productVariantId: Scalars['Int'];
  quantity: Scalars['Float'];
  sku: Scalars['String'];
  userId: Scalars['Int'];
  variant?: Maybe<ProductVariant>;
};

export type UserOccasion = {
  __typename?: 'UserOccasion';
  carts?: Maybe<Array<OccasionCart>>;
  date?: Maybe<Scalars['DateTime']>;
  details: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['Int'];
  userOccasionId?: Maybe<Scalars['Int']>;
};

export type UserPaymentProfile = {
  __typename?: 'UserPaymentProfile';
  processorId: Scalars['String'];
  userId: Scalars['Int'];
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
