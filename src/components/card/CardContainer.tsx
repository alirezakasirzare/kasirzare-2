import tw from 'tailwind-styled-components';
import { ReactNode } from 'react';

const Container = tw.aside`
  flex items-center gap-20
  w-full h-full p-20
`;

const Item = tw.div`
  w-1/2
`;

interface CardContainerProps {
  title: string;
  children: ReactNode;
}

function CardContainer(props: CardContainerProps) {
  const { title, children } = props;

  return (
    <Container>
      <Item>{title}</Item>
      <Item>{children}</Item>
    </Container>
  );
}

export default CardContainer;
