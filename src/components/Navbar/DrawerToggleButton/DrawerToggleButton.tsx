import React from 'react';

import './DrawerToggleButton.css';

type Props = {
  click: () => void;
}

export const DrawerToggleButton: React.FC<Props> = ({ click }) => (
  <button className="toggleButton" onClick={click}>
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </button>
);
