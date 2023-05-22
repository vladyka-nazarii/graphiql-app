import { Dispatch, FC, SetStateAction } from 'react';
import { Box, Stack } from '@mui/material';

import { IGraphQLType } from '../../documentTypes/documentTypes';
import { IField } from '../SchemaContent';
import { FieldList } from '../FieldList/FieldList';

interface IProps {
  fields: IGraphQLType[];
  setFields: Dispatch<SetStateAction<IField[]>>;
}

export const MainFields: FC<IProps> = ({ fields, setFields }) => {
  return (
    <Box>
      <Stack spacing={2}>
        {fields.map((item) => (
          <FieldList key={item.name} title={item.name} data={item.fields} setFields={setFields} />
        ))}
      </Stack>
    </Box>
  );
};
