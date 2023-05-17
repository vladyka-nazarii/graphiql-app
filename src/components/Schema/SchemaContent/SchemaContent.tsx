import { FC, useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';

import { IQuery, SchemaList } from './SchemaList/SchemaList';
import { TypeDetails } from './TypeDetails/TypeDetails';
import { SchemaBreadcrumbs } from './SchemaBreadcrumbs/SchemaBreadcrumbs';

interface IProps {
  queries: IQuery[];
  mutations: IQuery[];
  subscriptions: IQuery[];
}

export const SchemaContent: FC<IProps> = ({ queries, mutations, subscriptions }) => {
  const [type, setType] = useState('');
  const [navigation, setNavigation] = useState(['Schema']);

  useEffect(() => {
    if (navigation.length > 1) {
      setType(navigation[navigation.length - 1]);
    } else {
      setType('');
    }
  }, [navigation]);

  return (
    <Box>
      <Box marginBottom={'10px'}>
        <SchemaBreadcrumbs navigation={navigation} setNavigation={setNavigation} />
      </Box>
      {type ? (
        <TypeDetails type={type} setNavigation={setNavigation} />
      ) : (
        <>
          <Stack spacing={2}>
            <SchemaList title="Queries" fields={queries} setNavigation={setNavigation} />
            <SchemaList title="Mutations" fields={mutations} setNavigation={setNavigation} />
            <SchemaList
              title="Subscriptions"
              fields={subscriptions}
              setNavigation={setNavigation}
            />
          </Stack>
        </>
      )}
    </Box>
  );
};
