import React from 'react';
import { SWRConfig } from 'swr';

const baseUrl = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

const api = {
  getProducts: '/products',
};

const ApiConfig = ({ children }: { children: React.ReactElement}) => (
  <SWRConfig
    value={{
      provider: () => new Map(),
      fetcher: (resource, init) => fetch(baseUrl + resource, init).then(res => res.json())
    }}
    children={children}
  />
);

export { ApiConfig, api };