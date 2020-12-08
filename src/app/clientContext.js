import React from 'react';

export const ClientContext = React.createContext();

export const ClientProvider = (props) => {
  const [client, setClient] = React.useState({ name: 'test' });

  return (
    <ClientContext.Provider
      value={{
        client,
        setClient,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};
