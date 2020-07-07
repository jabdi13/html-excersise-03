import React from 'react';
import '../css/components/BlockContent.css';
import '../css/components/Button.css';

const BlockContent = ({ children }) => {
  return (
    <div className="Block-Content">
      {children}
    </div>
  );
};

export default BlockContent;