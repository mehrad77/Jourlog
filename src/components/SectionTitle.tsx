import React, { FC } from 'react';

interface ISectionTitle {
  uppercase?: 'uppercase' | 'normal';
  direction?: 'rtl' | 'ltr';
}

const SectionTitle: FC<ISectionTitle> = ({ children, uppercase, direction = 'ltr' }) => {
  return (
    <div style={{ direction }} className={`relative pt-4 mb-4 text-center text-5xl text-white lineBelow ${uppercase}`}>
      {children}
    </div>
  );
};

export { SectionTitle };
