import React from 'react';

import { BootstrapTableful } from 'react-bootstrap-table2';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
<BootstrapTableful
  keyField="id"
  data={ products }
  columns={ columns }
  bordered={ false }
/>
`;

export default () => (
  <div>
    <BootstrapTableful
      keyField="id"
      data={ products }
      columns={ columns }
      bordered={ false }
    />
    <Code>{ sourceCode }</Code>
  </div>
);