import { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { Box, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IField } from '../SchemaContent';

interface IProps {
  fields: IField[];
  setFields: Dispatch<SetStateAction<IField[]>>;
}

export const SchemaBreadcrumbs: FC<IProps> = ({ fields, setFields }) => {
  const navigation = useMemo(() => ['Schema', ...fields.map((item) => item.name)], [fields]);

  const handleNavigation = (typeName: string) => {
    const typeNameIndex = navigation.indexOf(typeName) - 1;
    setFields((prev) => prev.slice(0, typeNameIndex + 1));
  };

  return (
    <Box marginBottom={'10px'}>
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
    </Box>
  );
};
