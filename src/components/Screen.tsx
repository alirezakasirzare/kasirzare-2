import tw from 'tailwind-styled-components';
import Sidebar from './layout/Sidebar';
import SectionProvider from '../context/section-context';
import SectionSlider from './slider/SectionSlider';

import { MotionConfig } from 'framer-motion';

const Container = tw.div`
  flex flex-col-reverse md:flex-row
  w-full h-screen overflow-hidden
  bg-gradient-to-l from-white to-gray-50
`;

function Screen() {
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <SectionProvider>
        <Container>
          <Sidebar />
          <div className="w-full h-full pt-24 md:pt-0">
            <SectionSlider />
          </div>
        </Container>
      </SectionProvider>
    </MotionConfig>
  );
}

export default Screen;
