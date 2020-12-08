import React, { useState, useEffect } from 'react';
import { Breadcrumb, SimpleCard } from '../../../matx';
import PaginationTable from '../material-kit/tables/PaginationTable';
import { TableCell } from '@material-ui/core';
import AddClient from './AddClient';
import API from '../../services/api';

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.getClients().then((data) => setClients(data));
  }, []);

  function handleSearch(search) {
    API.getClients(search).then((data) => setClients(data));
  }

  const listData = clients.map((item) => {
    return {
      Անուն: (
        <TableCell className='px-0' align='left'>
          {item.name}
        </TableCell>
      ),
      Ծնված: (
        <TableCell className='px-0' align='left'>
          {item.dateOfBirth.slice(0, 10)}
        </TableCell>
      ),
      Հեռախոս: (
        <TableCell className='px-0' align='left'>
          {item.mobile}
        </TableCell>
      ),
      'Էլ հասցե': (
        <TableCell className='px-0' align='left'>
          {item.email}
        </TableCell>
      ),
      Պարտք: (
        <TableCell className='px-0' align='left'>
          {item.debt || 0}
        </TableCell>
      ),
    };
  });

  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Պացիենտներ', path: '/clients' },
            { name: 'Table' },
          ]}
        />
      </div>
      <SimpleCard title='Pagination Table'>
        <AddClient handleSearch={handleSearch} />
        <PaginationTable
          bodyData={listData}
          thead={['Անուն', 'Ծնված', 'Հեռախոս', 'Էլ հասցե', 'Պարտք']}
        />
      </SimpleCard>
    </div>
  );
}

export default React.memo(Clients);
