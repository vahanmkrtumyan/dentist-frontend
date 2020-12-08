import React, { useState, useEffect } from 'react';
import AppContext from 'app/appContext';

function Client() {
  const { client } = React.useContext(AppContext);
  console.log(client);
  return <div>a</div>;
}

export default Client;
