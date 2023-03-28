import tw from 'tailwind-styled-components';
import alirezaImage from '../../assets/images/alirezakasirzare.jpg';

import { motion } from 'framer-motion';

const Box = motion(tw.header`
  fixed top-0 left-0 z-40
  w-full
  bg-gray-100 
  h-24
  pr-[150px]
  flex justify-center items-center gap-5
`);

const Image = tw.img`
  rounded-full
  w-16 h-16
  border-2 border-blue-500
`;

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
      <Image src={alirezaImage} />
    </Box>
  );
}

export default Header;
