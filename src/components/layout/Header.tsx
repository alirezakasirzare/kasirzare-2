import tw from 'tailwind-styled-components';
import alirezaImage from '../../assets/images/alirezakasirzare.jpg';

import { motion } from 'framer-motion';

const Box = motion(tw.header`
  fixed top-0 left-0 z-40
  w-full
  bg-gradient-to-b from-gray-100 to-gray-50
  h-24
  md:pr-[150px]
  flex justify-center items-center gap-5
`);

const Image = motion(tw.img`
  rounded-full
  w-16 h-16
  border-2
`);

const Text = tw.h1`
  font-bold
  text-blue-500
`;

function Header() {
  return (
    <Box
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
    >
      <Text>علیرضا کثیرزارع</Text>
      <Image
        src={alirezaImage}
        initial={{ borderColor: '#f3f4f6' }}
        animate={{ borderColor: '#3b82f6' }}
        transition={{ repeat: Infinity, duration: 3, repeatType: 'reverse' }}
      />
    </Box>
  );
}

export default Header;
