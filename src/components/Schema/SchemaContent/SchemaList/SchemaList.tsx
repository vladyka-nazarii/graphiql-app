import { FC, useState } from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';

export interface IQuery {
  name: string;
  args: IArg[];
  type: {
    name: string;
    ofType: null | {
      name: string;
    };
    fields: null | IField[];
  };
}

interface IArg {
  name: string;
}

interface IField {
  name: string;
}

interface IProps {
  title: string;
  fields: IQuery[];
}

export const SchemaList: FC<IProps> = ({ title, fields }) => {
  const [type, setType] = useState('');

  const handleClick = (currentType: string) => {
    setType(currentType);
  };

  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <List>
        {fields.map((item) => (
          <ListItem
            disablePadding
            key={item.name}
            onClick={() => handleClick(item.type.ofType?.name || item.type.name)}
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
