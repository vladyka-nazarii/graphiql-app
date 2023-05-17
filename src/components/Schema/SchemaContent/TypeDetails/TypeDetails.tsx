import { Dispatch, FC, SetStateAction } from 'react';
import { gql, useQuery } from '@apollo/client';
import { CircularProgress, List, ListItem, ListItemButton, Typography } from '@mui/material';

interface IProps {
  type: string;
  setNavigation: Dispatch<SetStateAction<string[]>>;
}

interface ITypeField {
  name: string;
  type: {
    name: string;
    ofType: null | {
      name: string;
    };
  };
}
interface IResp {
  __type: {
    name: string;
    fields: ITypeField[];
    description: string;
  };
}

export const TypeDetails: FC<IProps> = ({ type, setNavigation }) => {
  const { loading, data } = useQuery<IResp>(gql`
  query Type {
    __type(name: "${type}"){
      name
      description
      fields{
        name
        type{
          name
          ofType{
            name
          }
        }
      }
    }
  }
  `);

  const handleNavigation = (newType: string) => {
    setNavigation((prev) => [...prev, newType]);
  };

  const createDetails = (data: IResp) => {
    const fields = data?.__type.fields;
    const details = data?.__type.description;
    if (fields?.length) {
      return (
        <>
          <Typography variant="h5">{type}</Typography>
          <List>
            {fields.map((item) => (
              <ListItem disablePadding key={item.name}>
                <ListItemButton
                  sx={{ display: 'flex', columnGap: '5px' }}
                  onClick={() => handleNavigation(item.type.ofType?.name || item.type.name)}
                >
                  <Typography>{item.name}:</Typography>
                  <Typography color={'red'}>
                    {item.type.name || `[${item.type.ofType?.name}]`}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      );
    }
    return <div>{details}</div>;
  };

  return (data && createDetails(data)) || (loading && <CircularProgress />) || <div>Error</div>;
};
