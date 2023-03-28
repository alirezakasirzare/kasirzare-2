import tw from 'tailwind-styled-components';
import { ReactNode } from 'react';

const Container = tw.div`
  flex items-center gap-20
  w-full h-full p-20
`;

const Item = tw.div`
  w-1/2
  text-center
  text-gray-500
`;

const Title = tw.div`
  font-bold
  text-2xl
  text-gray-600
`;

interface CardContainerProps {
  title: ReactNode;
  children: ReactNode;
}

function CardContainer(props: CardContainerProps) {
  const { title, children } = props;

  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>
      <Item>{children}</Item>
    </Container>
  );
}

export default CardContainer;
