export interface ISchemaType {
  __schema: {
    types: IGraphQLType[];
  };
}

export interface IGraphQLType {
  name: string;
  description: string | null;
  kind: string;
  fields: IGraphQLField[];
}

export interface IGraphQLField {
  name: string;
  args?: IGraphQLArgument[];
  type: IGraphQLTypeRef;
}

export interface IGraphQLArgument {
  name: string;
  type: IGraphQLTypeRef;
}

export interface IGraphQLTypeRef {
  name: string;
  kind: string;
  ofType: IGraphQLTypeRef;
}
