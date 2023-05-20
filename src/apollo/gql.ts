import { gql } from '@apollo/client';

export const GET_TYPES = gql`
  query Schema {
    __schema {
      types {
        name
        description
        kind
        ofType {
          name
        }
        fields {
          name
          args {
            name
            type {
              name
              ofType {
                name
              }
            }
          }
          type {
            name
            kind
            ofType {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_SCHEMA = gql`
  query Schema {
    __schema {
      queryType {
        fields {
          name
          type {
            name
            ofType {
              name
            }
            fields {
              name
            }
          }
          args {
            name
          }
        }
      }
      mutationType {
        fields {
          name
          type {
            name
            ofType {
              name
            }
            fields {
              name
            }
          }

          args {
            name
          }
        }
      }
      subscriptionType {
        fields {
          name
          type {
            name
            ofType {
              name
            }
            fields {
              name
            }
          }
          args {
            name
          }
        }
      }
    }
  }
`;
