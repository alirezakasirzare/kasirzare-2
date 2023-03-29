import tw from 'tailwind-styled-components';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const Box = motion(
  tw.div`
    fixed top-0 left-0 z-50
    w-full h-full
    bg-black/10
    backdrop-blur
  `
);

interface BackdropProps {
  children: ReactNode;
}

function Backdrop(props: BackdropProps) {
  const { children } = props;

  return createPortal(
    <Box
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </Box>,
    document.getElementById('modal') as HTMLElement
  );
}

export default Backdrop;
