import Screen from './components/Screen';

import { MotionConfig } from 'framer-motion';
import SectionProvider from './context/section-context';

function App() {
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <SectionProvider>
        <Screen />
      </SectionProvider>
    </MotionConfig>
  );
}

export default App;
