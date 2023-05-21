import { Dispatch, FC, SetStateAction } from 'react';
import { IGraphQLArgument, IGraphQLField, IGraphQLType } from '../../documentTypes/documentTypes';
import { Box, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material';
import { IField } from '../SchemaContent';

interface IProps {
  field?: IGraphQLField;
  type: IGraphQLType;
  setFields: Dispatch<SetStateAction<IField[]>>;
}

export const FieldDetails: FC<IProps> = ({ field, type, setFields }) => {
  const typeFields = type.fields || type.inputFields;
  const typeDescription = type.description;
  const typeKind = type.kind;

  const handleClick = (item: IGraphQLArgument) => {
    setFields((prev) => [
      ...prev,
      { name: item.name, type: item.type.name || item.type.ofType?.name },
    ]);
  };

  return (
    <Stack>
      {field && field.args && (
        <Box>
          <Typography variant="h5">Arguments</Typography>
          <List>
            {field.args.map((item) => (
              <ListItem disablePadding key={item.name}>
                <ListItemButton
                  sx={{ display: 'flex', columnGap: '5px' }}
                  onClick={() => handleClick(item)}
                >
                  <Typography>{item.name}:</Typography>
                  <Typography color={'red'}>
                    {item.type.name || `[${item.type.ofType?.name}]`}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {typeFields && (
        <Box>
          <Typography variant="h5">Type Details</Typography>
          <List>
            {typeFields.map((item) => (
              <ListItem disablePadding key={item.name}>
                <ListItemButton
                  sx={{ display: 'flex', columnGap: '5px' }}
                  onClick={() => handleClick(item)}
                >
                  <Typography>{item.name}:</Typography>
                  <Typography color={'red'}>
                    {item.type.name || `[${item.type.ofType?.name}]`}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
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
