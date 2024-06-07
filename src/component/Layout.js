// src/components/Layout.js
"use client"
import { Providers } from '@/pages/redux/providers';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
     <Providers>
      {children}
</Providers>
    </div>
  );
}

export default Layout;
