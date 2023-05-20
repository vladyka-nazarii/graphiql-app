import { FC, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';

import { SchemaBreadcrumbs } from './SchemaBreadcrumbs/SchemaBreadcrumbs';
import { IGraphQLType } from '../documentTypes/documentTypes';
import { MainFields } from './MainFields/MainFields';
import { FieldDetails } from './FieldDetails/FieldDetails';

export interface IField {
  name: string | null;
  type: string | null;
}
interface IProps {
  types: IGraphQLType[];
}

export const SchemaContent: FC<IProps> = ({ types }) => {
  const [field, setField] = useState<IField>({ name: null, type: null });
  const [navigation, setNavigation] = useState(['Schema']);

  useEffect(() => {
    if (field.name) {
      const name = field.name;
      setNavigation((prev) => [...prev, name]);
    }
  }, [field]);

  useEffect(() => {
    if (navigation.length === 1) {
      setField({ name: null, type: null });
    }
  }, [navigation]);

  const fieldSections = useMemo(
    () =>
      types.filter(
        (item) => item.name === 'Query' || item.name === 'Mutation' || item.name === 'Subscription',
      ),
    [types],
  );

  const currentField = useMemo(() => {
    const fields = fieldSections.map((item) => item.fields).flat();
    const fieldName = fields.find((item) => item.name === field.name);
    return fieldName;
  }, [fieldSections, field.name]);

  const currentType = useMemo(() => {
    const fieldType = types.find((item) => item.name === field.type);
    return fieldType;
  }, [field.type, types]);

  return (
    <Box>
      <SchemaBreadcrumbs navigation={navigation} setNavigation={setNavigation} />
      {(currentType && (
        <FieldDetails field={currentField} type={currentType} setField={setField} />
      )) || <MainFields fields={fieldSections} setField={setField} />}
    </Box>
  );
};
