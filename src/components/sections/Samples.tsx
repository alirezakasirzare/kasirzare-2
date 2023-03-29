import CardContainer from '../card/CardContainer';
import TextImgCard from '../card/TextImgCard';
import alirezaImage from '../../assets/images/alirezakasirzare.jpg';

import { motion } from 'framer-motion';

function Samples() {
  const title = `نمونه کار دارم ؟`;

  const items: {
    text: string;
    image: string;
  }[] = [
    {
      text: 'ابزاریت',
      image: alirezaImage,
    },
    {
      text: 'سوداد',
      image: alirezaImage,
    },
    {
      text: 'فوتبالیت',
      image: alirezaImage,
    },
    {
      text: 'دیجی آروین',
      image: alirezaImage,
    },
    {
      text: 'موزیکو',
      image: alirezaImage,
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
          <TextImgCard text={item.text} image={item.image} />
        ))}
      </motion.div>
    </CardContainer>
  );
}

export default Samples;
