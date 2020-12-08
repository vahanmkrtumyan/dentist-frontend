import React, { useState, useEffect } from 'react';
import { ClientContext } from 'app/clientContext';

const Client = () => {
  const { client, setClient } = React.useContext(ClientContext);

  console.log(client);
  return <div>a</div>;
};

export default Client;
