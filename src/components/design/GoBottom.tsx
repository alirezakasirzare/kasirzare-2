import tw from 'tailwind-styled-components';

import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Box = motion(tw.div`
  flex justify-center items-center
  absolute left-1/2 bottom-4
  w-10 h-10
  rounded-full
  bg-gray-100 text-blue-500
`);

function GoBottom() {
  return (
    <Box
      initial={{ y: '100%', opacity: 0, x: '-50%' }}
      animate={{ y: '0%', opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
    >
      <FaArrowDown className="animate-bounce" />
    </Box>
  );
}

export default GoBottom;
