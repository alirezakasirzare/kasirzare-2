import tw from 'tailwind-styled-components';
import CardContainer from '../card/CardContainer';
import TextSmallCard from '../card/TextSmallCard';

import { motion } from 'framer-motion';

const TextContainer = motion(tw.div`
  flex justify-start flex-wrap
`);

function Info() {
  const title = `من کی هستم ؟`;

  const items: { title: string; text: string }[] = [
    { title: 'محل سکونت', text: 'خوزستان' },
    { title: 'وضعیت تحصیل', text: 'در حال تحصیل' },
    { title: 'مقطع تحصیل', text: 'کاردانی کامپیوتر' },
    { title: 'وضعیت خدمت', text: 'معافیت تحصیلی' },
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
      <p className="text-blue-500 mb-2">علیرضا هستم پسری کنجکاو و تلاشگر.</p>
      <p className="mb-5">
        همیشه دوست داشتم چیزی رو خلق کنم و بهش جان بدم، وقتی با برنامه نویسی
        آشنا شدم تونستم به این خواسته برسم.
        <br />
        کم کم فهمیدم برنامه نویسی همون چیزیه که باید بقیه عمرمو صرفش کنم، من هر
        روز با عشق چیزهای جدید یاد میگیرم و قصد دارم به بالاترین سطح در این حوضه
        برسم.
      </p>

      <TextContainer
        variants={itemContainer}
        initial="hidden"
        whileInView="visible"
      >
        {items.map((item) => (
          <TextSmallCard title={item.title} text={item.text} key={item.text} />
        ))}
      </TextContainer>
    </CardContainer>
  );
}

export default Info;
