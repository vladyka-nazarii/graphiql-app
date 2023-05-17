import { gql } from '@apollo/client';

export const GET_TYPES = gql`
  query Types {
    __schema {
      types {
        name
        fields {
          name
          type {
            name
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
