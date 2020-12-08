import React, { useState, useEffect } from 'react';
import AppContext from 'app/appContext';

const Client = () => {
  const { client } = React.useContext(AppContext);
  console.log(client);
  return <div>a</div>;
};

export default Client;
