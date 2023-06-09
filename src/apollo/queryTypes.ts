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
        inputFields {
          name
          type {
            name
          }
        }
      }
    }
  }
`;
