import { FC, useMemo, useState } from 'react';
import { Box, TextField } from '@mui/material';

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
  const [search, setSearch] = useState<string>('');

  const field = useMemo(() => fields[fields.length - 1], [fields]);

  const fieldSections = useMemo(
    () =>
      types.filter(
        (item) => item.name === 'Query' || item.name === 'Mutation' || item.name === 'Subscription',
      ),
    [types],
  );

  const filteredFieldSections = useMemo(() => {
    const pattern = new RegExp(search, 'ig');
    const filteredFields = fieldSections.map((item) => {
      return {
        ...item,
        fields: item.fields.filter((field) => field.name.match(pattern)),
      };
    });
    return filteredFields;
  }, [search, fieldSections]);

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
      {currentType ? (
        <>
          <SchemaBreadcrumbs fields={fields} setFields={setFields} />
          <FieldDetails field={currentField} type={currentType} setFields={setFields} />
        </>
      ) : (
        <>
          <TextField
            id="outlined-basic"
            label="Search field"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth={true}
            sx={{ margin: '10px 0' }}
          />
          <MainFields fields={filteredFieldSections} setFields={setFields} />
        </>
      )}
    </Box>
  );
};
