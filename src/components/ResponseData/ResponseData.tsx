import { useQuery } from '@apollo/client';
import CodeMirror from '@uiw/react-codemirror';

import { GET_SCHEMA } from '../../apollo/schema';

export const ResponseData = () => {
  const { loading, error, data } = useQuery(GET_SCHEMA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <CodeMirror
        value={JSON.stringify(data, null, '\t')}
        height="calc(100vh - 64px - 64px)"
        width="50vw"
        editable={false}
        theme="light"
      />
    </div>
  );
};
