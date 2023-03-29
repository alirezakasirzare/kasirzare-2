import tw from 'tailwind-styled-components';
import CardContainer from '../card/CardContainer';
import TextSmallCard from '../card/TextSmallCard';

import { motion } from 'framer-motion';

const TextContainer = motion(tw.div`
  flex justify-start flex-wrap
`);

function Ability() {
  const title = 'چیا بلدم ؟';

  const items: string[] = [
    'html',
    'css',
    'sass',
    'javascript',
    'typescript',
    'jquery',
    'bootstrap',
    'tailwindcss',
    'react js',
    'next js',
    'styled-components',
    'react-query',
    'redux-tollkit',
    'framer-motion',
    'git',
  ];

  const itemContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <CardContainer title={title}>
      <TextContainer
        dir="ltr"
        variants={itemContainer}
        initial="hidden"
        whileInView="visible"
      >
        {items.map((item) => (
          <TextSmallCard text={item} key={item} />
        ))}
      </TextContainer>
    </CardContainer>
  );
}

export default Ability;
