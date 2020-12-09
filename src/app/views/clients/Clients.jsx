import React, { useState, useEffect } from 'react';
import { Breadcrumb, SimpleCard } from '../../../matx';
import PaginationTable from '../material-kit/tables/PaginationTable';
import { TableCell } from '@material-ui/core';
import AddClient from './AddClient';
import API from '../../services/api';
import { ClientContext } from './../../clientContext';
import { useHistory } from 'react-router-dom';

function Clients() {
  const { setClient } = React.useContext(ClientContext);
  const [clients, setClients] = useState([]);

  let history = useHistory();

  useEffect(() => {
    API.getClients().then((data) => setClients(data));
  }, []);

  function handleSearch(search) {
    API.getClients(search).then((data) => setClients(data));
  }

  function handleAdd(newClient) {
    setClients([newClient, ...clients]);
  }

  function handleClick(index) {
    setClient(clients[index]);
    history.push('/client');
  }

  const listData = clients.map((item) => {
    return {
      Անուն: <TableCell style={{ cursor: 'pointer' }}> {item.name}</TableCell>,
      Ծնված: (
        <TableCell className='px-0' align='left' style={{ cursor: 'pointer' }}>
          {item.dateOfBirth.slice(0, 10)}
        </TableCell>
      ),
      Հեռախոս: (
        <TableCell className='px-0' align='left' style={{ cursor: 'pointer' }}>
          {item.mobile}
        </TableCell>
      ),
      'Էլ հասցե': (
        <TableCell className='px-0' align='left' style={{ cursor: 'pointer' }}>
          {item.email}
        </TableCell>
      ),
      Պարտք: (
        <TableCell className='px-0' align='left' style={{ cursor: 'pointer' }}>
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
        <AddClient handleSearch={handleSearch} handleAdd={handleAdd} />
        <PaginationTable
          handleClick={handleClick}
          bodyData={listData}
          thead={['Անուն', 'Ծնված', 'Հեռախոս', 'Էլ հասցե', 'Պարտք']}
        />
      </SimpleCard>
    </div>
  );
}

export default React.memo(Clients);
