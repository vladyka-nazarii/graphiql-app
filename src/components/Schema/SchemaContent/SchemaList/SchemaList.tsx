import { Dispatch, FC, SetStateAction } from 'react';
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
  setNavigation: Dispatch<SetStateAction<string[]>>;
}

export const SchemaList: FC<IProps> = ({ title, fields, setNavigation }) => {
  const handleClick = (newType: string) => {
    if (newType) {
      setNavigation((prev) => [...prev, newType]);
    }
  };

  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
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
