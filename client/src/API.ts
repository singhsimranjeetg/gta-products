/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ProcessOrderInput = {
  id: string,
  cart?: Array< CartItem | null > | null,
  total: number,
  token: string,
  address?: string | null,
};

export type CartItem = {
  id: string,
  title?: string | null,
  image?: string | null,
  price?: number | null,
  amount?: number | null,
};

export enum OrderStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}


export type CreateProductInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  image?: string | null,
  price?: number | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title: string,
  description?: string | null,
  image?: string | null,
  price?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  price?: number | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  user: string,
  date?: string | null,
  total?: number | null,
};

export type ModelOrderConditionInput = {
  user?: ModelStringInput | null,
  date?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  user: string,
  date?: string | null,
  total?: number | null,
  createdAt: string,
  updatedAt: string,
  customer?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  user?: string | null,
  date?: string | null,
  total?: number | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  date?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ProcessOrderMutationVariables = {
  input: ProcessOrderInput,
};

export type ProcessOrderMutation = {
  processOrder?: OrderStatus | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date?: string | null,
    total?: number | null,
    createdAt: string,
    updatedAt: string,
    customer?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date?: string | null,
    total?: number | null,
    createdAt: string,
    updatedAt: string,
    customer?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date?: string | null,
    total?: number | null,
    createdAt: string,
    updatedAt: string,
    customer?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date?: string | null,
    total?: number | null,
    createdAt: string,
    updatedAt: string,
    customer?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      user: string,
      date?: string | null,
      total?: number | null,
      createdAt: string,
      updatedAt: string,
      customer?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image?: string | null,
    price?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image?: string | null,
      price?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};
