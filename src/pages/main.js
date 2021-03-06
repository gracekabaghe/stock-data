import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listAPIcall } from '../redux/home';
import Top from '../components/Top';
import Home from '../components/Home';

const Main = function mainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAPIcall());
  }, []);
  const result = useSelector((state) => state.countriesReducer);
  return (
    <>
      <Top />
      <div>
        <Home nasdaq={result} />
      </div>
    </>
  );
};

export default Main;
