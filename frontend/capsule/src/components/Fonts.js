import React from 'react';

const Fonts = () => (
  <style jsx="true" global="true">{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

    body {
      font-family: 'Inter', sans-serif;
    }

    .font-saiyan {
      font-family: 'Orbitron', sans-serif;
    }
  `}</style>
);

export default Fonts;
