import tw from 'tailwind-styled-components';

import { FaGithub, FaMailBulk, FaPhone, FaTelegram } from 'react-icons/fa';
import CardContainer from '../card/CardContainer';
import TextIconCard from '../card/TextIconCard';

const TextContainer = tw.div`
  grid grid-cols-2 gap-2
`;

function Connect() {
  const title = 'راه ارتباطی دارم ؟';

  const items: {
    text: string;
    Icon: any;
  }[] = [
    {
      text: '0939 358 6633',
      Icon: FaPhone,
    },
    {
      text: 'alirezakasir@yahoo.com',
      Icon: FaMailBulk,
    },
    {
      text: '@alireza_kasir',
      Icon: FaTelegram,
    },
    {
      text: '@alirezakasirzare',
      Icon: FaGithub,
    },
  ];

  return (
    <CardContainer title={title}>
      <TextContainer>
        {items.map((item) => (
          <TextIconCard key={item.text} text={item.text} Icon={item.Icon} />
        ))}
      </TextContainer>
    </CardContainer>
  );
}

export default Connect;
