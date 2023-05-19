import { Dispatch, FC, SetStateAction } from 'react';
import { Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface IProps {
  navigation: string[];
  setNavigation: Dispatch<SetStateAction<string[]>>;
}

export const SchemaBreadcrumbs: FC<IProps> = ({ navigation, setNavigation }) => {
  const handleNavigation = (typeName: string) => {
    const typeNameIndex = navigation.indexOf(typeName);
    const newNavigation = navigation.slice(0, typeNameIndex + 1);
    setNavigation(newNavigation);
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
      {navigation.map((item) => {
        const isCurrentRoute = navigation[navigation.length - 1] === item;
        return (
          <Link
            key={item}
            color="text.primary"
            underline={isCurrentRoute ? 'none' : 'hover'}
            sx={{
              cursor: isCurrentRoute ? 'default' : 'pointer',
              fontWeight: isCurrentRoute ? '900' : '',
            }}
            onClick={() => handleNavigation(item)}
          >
            {item}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
