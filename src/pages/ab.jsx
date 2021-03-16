import { useEffect, useRef, useState } from 'react';

const ab = ({ countries }) => {
  return (
    <div>
      <h1>Done</h1>
    </div>
  );
};

export default ab;

// export const getStaticProps = async () => {
//   const res = await fetch('https://restcountries.eu/rest/v2/all');
//   const countries = await res.json();
//   return {
//     props: {
//       countries,
//     },
//   };
// };
