"use client";
import React from 'react';
import './global.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A simple dashboard application." />
        <title>Dashboard</title>
        {/* You can also add a link to external fonts, like Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
      </head>
      <body className="root-body">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
