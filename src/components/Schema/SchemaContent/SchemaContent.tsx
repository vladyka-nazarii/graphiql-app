import { FC, useState } from 'react';
import { Stack } from '@mui/material';

import { IQuery, SchemaList } from './SchemaList/SchemaList';

interface IProps {
  queries: IQuery[];
  mutations: IQuery[];
  subscriptions: IQuery[];
}

export const SchemaContent: FC<IProps> = ({ queries, mutations, subscriptions }) => {
  const [type, setType] = useState('');

  const handleClick = (currentType: string) => {
    setType(currentType);
  };

  return (
    <Stack spacing={2}>
      <SchemaList title="Queries" fields={queries} />
      <SchemaList title="Mutations" fields={mutations} />
      <SchemaList title="Subscriptions" fields={subscriptions} />
    </Stack>
  );
};
