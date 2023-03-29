import CardContainer from '../card/CardContainer';
import TextImgCard from '../card/TextImgCard';
import alirezaImage from '../../assets/images/alirezakasirzare.jpg';
import abzaritImage from '../../assets/images/samples/abzarit.svg';
import saudadeImage from '../../assets/images/samples/saudade.svg';
import Modal from '../modal/Modal';

import { motion } from 'framer-motion';
import { useState } from 'react';

function Samples() {
  const title = `نمونه کار دارم ؟`;

  const items: {
    text: string;
    image: string;
    path: string;
    items: string[];
    more: string;
  }[] = [
    {
      text: 'ابزاریت',
      image: abzaritImage,
      path: 'http://google.com',
      more: 'salam',
      items: ['salam', 'salam'],
    },
    {
      text: 'سوداد',
      image: saudadeImage,
      path: 'https://saudade.iran.liara.run/',
      more: 'salam',
      items: ['salam', 'salam'],
    },
    {
      text: 'فوتبالیت',
      image: alirezaImage,
      path: 'http://google.com',
      more: 'salam',
      items: ['salam', 'salam'],
    },
    {
      text: 'دیجی آروین',
      image: alirezaImage,
      path: 'http://google.com',
      more: 'salam',
      items: ['salam', 'salam'],
    },
    {
      text: 'موزیکو',
      image: alirezaImage,
      path: 'http://google.com',
      more: 'salam',
      items: ['salam', 'salam'],
    },
  ];

  // modal
  const [active, setActive] = useState<false | number>(false);
  const handleCloseModal = () => {
    setActive(false);
  };

  const handleOpenModal = (witchItem: string) => {
    const findedItem = items.findIndex((item) => item.text === witchItem);
    setActive(findedItem);
  };

  // animation
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
    <>
      <CardContainer title={title}>
        <motion.div
          className="w-full h-full"
          variants={itemContainer}
          initial="hidden"
          whileInView="visible"
        >
          {items.map((item) => (
            <TextImgCard
              text={item.text}
              image={item.image}
              path={item.path}
              onSee={handleOpenModal}
            />
          ))}
        </motion.div>
      </CardContainer>

      <Modal
        show={active !== false}
        title={items[active || 0].text}
        more={items[active || 0].more}
        items={items[active || 0].items}
        onClose={handleCloseModal}
        path={items[active || 0].path}
        image={items[active || 0].image}
      />
    </>
  );
}

export default Samples;
