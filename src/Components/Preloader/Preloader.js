import React from 'react';
import preloader from '../../dist/imgs/preloader.gif';
import './Preloader.css';

const Preloader = () => (
  <img src={preloader} className="preloader" alt="preloader" />
);

export default Preloader;
