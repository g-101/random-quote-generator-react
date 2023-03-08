import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
// import classes from './Root.module.css';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
