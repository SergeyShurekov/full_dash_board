import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Filter, Page, Selection, Sort, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {

  const editing = { allowDeleting: true, allowEditing: true }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Страница' title='Клиенты' />
      <GridComponent dataSource={customersData} allowPaging allowSorting width='auto' editSettings={editing} toolbar={['Delete']} pageSettings={{ pageCount: 5 }}>
        <ColumnsDirective>
          {customersGrid.map((item, index) =>
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div >
  )
}

export default Employees