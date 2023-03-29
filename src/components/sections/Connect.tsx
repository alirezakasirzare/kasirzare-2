import tw from 'tailwind-styled-components';

import { motion } from 'framer-motion';
import CardContainer from '../card/CardContainer';
import TextIconCard from '../card/TextIconCard';

const TextContainer = motion(tw.div`
  grid grid-cols-1 md:grid-cols-2 gap-2
`);

function Connect() {
  const title = 'راه ارتباطی دارم ؟';

  const items: {
    text: string;
    link: string;
  }[] = [
    {
      text: '0939 358 6633',
      link: '09393586633',
    },
    {
      text: 'alirezakasir@yahoo.com',
      link: 'mailto://alirezakasir@yahoo.com',
    },
    {
      text: '@alireza_kasir',
      link: 'http://t.me/alireza_kasir',
    },
    {
      text: '@alirezakasirzare',
      link: 'http://github.com/alirezakasirzare',
    },
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
        variants={itemContainer}
        initial="hidden"
        whileInView="visible"
        dir="ltr"
      >
        {items.map((item) => (
          <TextIconCard key={item.text} text={item.text} link={item.link} />
        ))}
      </TextContainer>
    </CardContainer>
  );
}

export default Connect;
