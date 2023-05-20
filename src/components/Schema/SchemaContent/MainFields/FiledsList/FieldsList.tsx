import { Dispatch, FC, SetStateAction } from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { IGraphQLField } from '../../../documentTypes/documentTypes';
import { IField } from '../../SchemaContent';

interface IProps {
  title: string;
  fields: IGraphQLField[];
  setField: Dispatch<SetStateAction<IField>>;
}

export const FieldsList: FC<IProps> = ({ title, fields, setField }) => {
  const handleClick = (fieldName: string, fieldType: string) => {
    setField({ name: fieldName, type: fieldType });
  };

  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      <List>
        {fields.map((item) => (
          <ListItem
            disablePadding
            key={item.name}
            onClick={() => handleClick(item.name, item.type.name || item.type.ofType.name)}
          >
            <ListItemButton sx={{ display: 'flex', columnGap: '5px' }}>
              <Typography>{item.name}:</Typography>
              <Typography color={'red'}>
                {item.type.name || `[${item.type.ofType?.name}]`}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
