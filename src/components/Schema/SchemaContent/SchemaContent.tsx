import { FC, useMemo, useState } from 'react';
import { Box } from '@mui/material';

import { SchemaBreadcrumbs } from './SchemaBreadcrumbs/SchemaBreadcrumbs';
import { IGraphQLType } from '../documentTypes/documentTypes';
import { MainFields } from './MainFields/MainFields';
import { FieldDetails } from './FieldDetails/FieldDetails';

export interface IField {
  name: string;
  type: string | null;
}
interface IProps {
  types: IGraphQLType[];
}

export const SchemaContent: FC<IProps> = ({ types }) => {
  const [fields, setFields] = useState<IField[]>([]);

  const field = useMemo(() => fields[fields.length - 1], [fields]);

  const fieldSections = useMemo(
    () =>
      types.filter(
        (item) => item.name === 'Query' || item.name === 'Mutation' || item.name === 'Subscription',
      ),
    [types],
  );

  const currentField = useMemo(() => {
    if (field) {
      const fields = fieldSections.map((item) => item.fields).flat();
      const fieldName = fields.find((item) => item.name === field.name);
      return fieldName;
    }
  }, [fieldSections, field]);

  const currentType = useMemo(() => {
    if (field && field.type) {
      const fieldType = types.find((item) => item.name === field.type);
      return fieldType;
    }
  }, [field, types]);

  return (
    <Box>
      <SchemaBreadcrumbs fields={fields} setFields={setFields} />
      {(currentType && (
        <FieldDetails field={currentField} type={currentType} setFields={setFields} />
      )) || <MainFields fields={fieldSections} setFields={setFields} />}
    </Box>
  );
};
