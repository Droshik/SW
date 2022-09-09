import React from 'react';
import './App.scss';
import { Header } from './common/Header';
import { PagePersonsList } from './pages/PersonsList';
import { PagePersonDetails } from './pages/PersonDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<PagePersonsList />} />
        <Route path={'/details'}>
          <Route path={':detailsId'} element={<PagePersonDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
