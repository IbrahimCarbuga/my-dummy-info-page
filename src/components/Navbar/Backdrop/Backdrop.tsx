import React from 'react';
import './Backdrop.css';

type Props = {
  click: () => void;
}

export const Backdrop: React.FC<Props> = ({ click }) => {
  return <div className="backdrop" onClick={click}></div>;
};

