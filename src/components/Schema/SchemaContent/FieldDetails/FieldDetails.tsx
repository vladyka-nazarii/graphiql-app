import { Dispatch, FC, SetStateAction } from 'react';
import { IGraphQLField, IGraphQLType } from '../../documentTypes/documentTypes';
import { Box, Stack, Typography } from '@mui/material';
import { IField } from '../SchemaContent';
import { FieldList } from '../FieldList/FieldList';

interface IProps {
  type: IGraphQLType;
  setFields: Dispatch<SetStateAction<IField[]>>;
  field?: IGraphQLField;
}

export const FieldDetails: FC<IProps> = ({ field, type, setFields }) => {
  const typeFields = type.fields || type.inputFields;
  const fieldArgs = field && field.args;
  const typeDescription = type.description;
  const typeKind = type.kind;

  return (
    <Stack>
      {fieldArgs && <FieldList data={fieldArgs} setFields={setFields} title="Arguments" />}
      {typeFields && <FieldList data={typeFields} setFields={setFields} title="Type Details" />}
      {(typeDescription || typeKind) && (
        <Box>
          <Typography variant="h5" mb={'10px'}>
            Description
          </Typography>
          <Typography variant="body1" mb={'10px'}>
            {typeDescription}
          </Typography>
          <Stack direction={'row'} spacing={1}>
            <Typography variant="body1">{typeKind.toLocaleLowerCase()}</Typography>
            <Typography variant="body1" color={'red'}>
              {type.name}
            </Typography>
          </Stack>
        </Box>
      )}
    </Stack>
  );
};
