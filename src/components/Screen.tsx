import tw from 'tailwind-styled-components';
import Sidebar from './layout/Sidebar';
import SectionSlider from './slider/SectionSlider';

import { useState } from 'react';

const Container = tw.div`
  flex flex-col-reverse md:flex-row
  w-full h-screen overflow-hidden
  bg-gray-50
`;

function Screen() {
  const [direction, setDirection] = useState(1);

  return (
    <Container>
      <Sidebar setDirection={setDirection} />
      <div className="w-full h-full pt-24 md:pt-0">
        <SectionSlider direction={direction} />
      </div>
    </Container>
  );
}

export default Screen;
