import CardContainer from '../card/CardContainer';
import TextImgCard from '../card/TextImgCard';
import abzaritImage from '../../assets/images/samples/abzarit.svg';
import saudadeImage from '../../assets/images/samples/saudade.svg';
import digiarvinImage from '../../assets/images/samples/digi-arvin.svg';
import footballitImage from '../../assets/images/samples/footballit.svg';
import musicoImage from '../../assets/images/samples/musico.svg';
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
      path: 'https://abzarit.kasirzare.ir',
      more: 'ابزاریت یک جعبه ابزار آنلاین در بستر وب است.',
      items: ['vanilla js', 'bootstrap'],
    },
    {
      text: 'سوداد',
      image: saudadeImage,
      path: 'https://saudade.kasirzare.ir',
      more: 'سوداد یه سایت باحال و جالبه، یه دسکتاپ اینترنتی !',
      items: ['react', 'typescript', 'tailwindcss'],
    },
    {
      text: 'فوتبالیت',
      image: footballitImage,
      path: 'https://footballit.kasirzare.ir',
      more: 'فوتبالی هستی؟ بدو بیا',
      items: ['react', 'tailwindcss'],
    },
    {
      text: 'دیجی آروین',
      image: digiarvinImage,
      path: 'https://digi-arvin.kasirzare.ir',
      more: 'دیجی آروین یک فروشگاه آنلاین است',
      items: ['jquery', 'bootstrap'],
    },
    {
      text: 'موزیکو',
      image: musicoImage,
      path: 'https://musico.kasirzare.ir',
      more: 'با موزیکو میتونی آهنگ گوش بدی',
      items: ['next', 'tailwindcss'],
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
