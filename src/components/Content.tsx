import React, { FC } from 'react';
interface IContent {
  direction?: 'rtl' | 'ltr';
}

// const StyledDiv = styled.div`
//   form {
//     p {
//       label,
//       input {
//         display: block;
//       }
//       input {
//         min-width: 275px;
//       }
//       textarea {
//         resize: vertical;
//         min-height: 150px;
//         width: 100%;
//       }
//     }
//   }
// `;

export const Content: FC<IContent> = ({ children, direction = 'ltr' }) => {
  return (
    <div className="bg-backWhite-pure py-8 px-6 md:px-12 lg:px-32 -mt-16 shadow-custom rounded-xl z-50" style={{ direction }}>
      {children}
    </div>
  );
};
