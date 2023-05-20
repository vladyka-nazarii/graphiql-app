import { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { Box, Stack } from '@mui/material';

import { FieldsList } from './FiledsList/FieldsList';
import { IGraphQLType } from '../../documentTypes/documentTypes';
import { IField } from '../SchemaContent';

interface IProps {
  fields: IGraphQLType[];
  setField: Dispatch<SetStateAction<IField>>;
}

export const MainFields: FC<IProps> = ({ fields, setField }) => {
  return (
    <Box>
      <Stack spacing={2}>
        {fields.map((item) => (
          <FieldsList key={item.name} title={item.name} fields={item.fields} setField={setField} />
        ))}
      </Stack>
    </Box>
  );
};
