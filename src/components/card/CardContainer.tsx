import tw from 'tailwind-styled-components';

import { ReactNode } from 'react';

const Container = tw.div`
  flex flex-col md:flex-row items-center gap-5 md:gap-20
  w-full h-full p-5 md:p-20 relative
  overflow-auto
`;

const Item = tw.div<{ $titleSecond?: boolean }>`
  w-full md:w-1/2
  text-center
  text-gray-500
  ${({ $titleSecond }) => $titleSecond && 'order-10 md:order-none'}
`;

const Title = tw.div`
  font-bold
  text-2xl
  text-gray-600
`;

interface CardContainerProps {
  title: ReactNode;
  children: ReactNode;
  titleSecond?: boolean;
}

function CardContainer(props: CardContainerProps) {
  const { title, children, titleSecond } = props;

  return (
    <Container className="w-full h-full">
      <Item $titleSecond={!!titleSecond}>
        <Title>{title}</Title>
      </Item>
      <Item>{children}</Item>
    </Container>
  );
}

export default CardContainer;
