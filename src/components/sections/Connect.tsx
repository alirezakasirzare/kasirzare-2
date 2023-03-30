import tw from 'tailwind-styled-components';
import githubImage from '../../assets/images/contact/github.png';
import phoneImage from '../../assets/images/contact/phone.png';
import telegramImage from '../../assets/images/contact/telegram.png';
import yahooImage from '../../assets/images/contact/yahoo.png';

import { motion } from 'framer-motion';
import CardContainer from '../card/CardContainer';
import TextIconCard from '../card/TextIconCard';

const TextContainer = motion(tw.div`
  grid grid-cols-1 md:grid-cols-2 gap-2
`);

function Connect() {
  const title = 'اطلاعات تماس چی ؟';

  const items: {
    text: string;
    link: string;
    image: string;
  }[] = [
    {
      text: '09393586633',
      link: '09393586633',
      image: phoneImage,
    },
    {
      text: 'alirezakasir@yahoo.com',
      link: 'mailto=alirezakasir@yahoo.com',
      image: yahooImage,
    },
    {
      text: '@alireza_kasir',
      link: 'http://t.me/alireza_kasir',
      image: telegramImage,
    },
    {
      text: '@alirezakasirzare',
      link: 'https://github.com/alirezakasirzare',
      image: githubImage,
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
          <TextIconCard
            key={item.text}
            text={item.text}
            link={item.link}
            image={item.image}
          />
        ))}
      </TextContainer>
    </CardContainer>
  );
}

export default Connect;
