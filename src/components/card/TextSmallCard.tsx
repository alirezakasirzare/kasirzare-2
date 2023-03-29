import tw from 'tailwind-styled-components';

import { motion } from 'framer-motion';

const Box = motion(tw.div`
  bg-gray-100
  rounded-full
  py-2 px-5
  w-max
  text-sm
  inline-block
  mx-1 mb-2
`);

interface TextSmallCardProps {
  text: string;
  title?: string;
}

function TextSmallCard(props: TextSmallCardProps) {
  const { text, title } = props;

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box variants={item}>
      {title} {title && ':'} <span className="text-blue-500">{text}</span>
    </Box>
  );
}

export default TextSmallCard;
