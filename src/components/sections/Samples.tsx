import CardContainer from '../card/CardContainer';
import TextImgCard from '../card/TextImgCard';
import alirezaImage from '../../assets/images/alirezakasirzare.jpg';
import abzaritImage from '../../assets/images/samples/abzarit.svg';
import saudadeImage from '../../assets/images/samples/saudade.svg';

import { motion } from 'framer-motion';

function Samples() {
  const title = `نمونه کار دارم ؟`;

  const items: {
    text: string;
    image: string;
    path: string;
  }[] = [
    {
      text: 'ابزاریت',
      image: abzaritImage,
      path: 'http://google.com',
    },
    {
      text: 'سوداد',
      image: saudadeImage,
      path: 'http://google.com',
    },
    {
      text: 'فوتبالیت',
      image: alirezaImage,
      path: 'http://google.com',
    },
    {
      text: 'دیجی آروین',
      image: alirezaImage,
      path: 'http://google.com',
    },
    {
      text: 'موزیکو',
      image: alirezaImage,
      path: 'http://google.com',
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
      <motion.div
        className="w-full h-full"
        variants={itemContainer}
        initial="hidden"
        whileInView="visible"
      >
        {items.map((item) => (
          <TextImgCard text={item.text} image={item.image} path={item.path} />
        ))}
      </motion.div>
    </CardContainer>
  );
}

export default Samples;
