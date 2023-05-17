import { FC, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import styles from './TypeDetails.module.scss';

interface IProps {
  type: string;
}

export const TypeDetails: FC<IProps> = ({ type }) => {
  const { loading, error, data } = useQuery(gql`
  query Type {
    __type(name: "${type}"){
      name
      fields{
        name
      }
    }
  }
  `);

  return <div>{JSON.stringify(data)}</div>;
};
