import tw from 'tailwind-styled-components';

import { motion } from 'framer-motion';

const Link = motion(tw.a`
  transition-colors
  bg-gray-100 hover:bg-gray-200
  rounded-full
  py-2 px-5
  w-full
  text-sm
  flex justify-between items-center gap-5
`);

const Image = tw.img`
  h-10 w-10
  rounded-full
`;

interface TextSmallCardProps {
  text: string;
  link: string;
  image: string;
}

function TextIconCard(props: TextSmallCardProps) {
  const { text, link, image } = props;

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Link variants={item} href={link}>
      <span className="text-blue-500 text-base" dir="ltr">
        {text}
      </span>
      <Image src={image} />
    </Link>
  );
}

export default TextIconCard;
