import React from 'react';
import preloader from '../../dist/video/preloader.mp4';
import './Preloader.css';

const Preloader = () => (
  <div className='preloader'>
    <video autoPlay loop muted playsInline>
      <source src={preloader} type="video/mp4" />
    </video>
  </div>
);

export default Preloader;
