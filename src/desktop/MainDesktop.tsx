import React from 'react';

export default function MainDesktop() {
  return (
    <div className="main">
      <div className="main__sidebar">
        <div className="main__navigation">
          <div className="main__buttons"></div>
          <div className="main__bottom"></div>
        </div>
        <div className="main__guide"></div>
      </div>
      <div className="main__content"></div>
    </div>
  );
}
