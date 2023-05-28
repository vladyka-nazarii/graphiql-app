import { Dispatch, FC, SetStateAction } from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';

import { IGraphQLArgument, IGraphQLField } from '../../documentTypes/documentTypes';
import { IField } from '../SchemaContent';

interface IProps {
  data: IGraphQLField[];
  setFields: Dispatch<SetStateAction<IField[]>>;
  title: string;
}

export const FieldList: FC<IProps> = ({ data, setFields, title }) => {
  const handleClick = (item: IGraphQLArgument) => {
    setFields((prev) => [
      ...prev,
      { name: item.name, type: item.type.name || item.type.ofType?.name },
    ]);
  };

  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      <List>
        {data.map((item) => {
          const fieldName = item.name;
          const typeName =
            item.type.name || (item.type.ofType?.name && `[${item.type.ofType?.name}]`);
          if (fieldName && typeName) {
            return (
              <ListItem disablePadding key={item.name}>
                <ListItemButton
                  sx={{ display: 'flex', columnGap: '5px' }}
                  onClick={() => handleClick(item)}
                >
                  <Typography>{fieldName}:</Typography>
                  <Typography color={'primary'}>{typeName}</Typography>
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
    </Box>
  );
};
