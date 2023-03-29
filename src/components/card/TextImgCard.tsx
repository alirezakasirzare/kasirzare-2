import tw from 'tailwind-styled-components';

import { motion } from 'framer-motion';
import { FaEye, FaLink } from 'react-icons/fa';

const Box = motion(tw.div`
  bg-gray-100
  rounded-full
  py-2 px-5
  w-full
  text-sm
  flex justify-between items-center
  mx-1 mb-2
`);

const Image = tw.img`
  rounded-full
  w-16 h-16
`;

const Button = tw.button`
  bg-blue-500 text-white
  py-2 px-2 rounded-full
`;

const SecondButton = tw(Button)`
  bg-gray-50
  text-blue-500
`;

interface TextSmallCardProps {
  text: string;
  image: string;
  path: string;
  onSee: (item: string) => void;
}

function TextImgCard(props: TextSmallCardProps) {
  const { text, image, path, onSee } = props;

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box variants={item}>
      <div className="flex items-center gap-4">
        <Image src={image} />
        <span className="text-blue-500 text-base">{text}</span>
      </div>
      <div className="flex gap-2">
        <SecondButton onClick={() => onSee(text)}>
          <FaEye />
        </SecondButton>
        <Button $as="a" href={path} target="_blank">
          <FaLink />
        </Button>
      </div>
    </Box>
  );
}

export default TextImgCard;
