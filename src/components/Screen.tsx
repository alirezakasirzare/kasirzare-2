import tw from 'tailwind-styled-components';
import Sidebar from './layout/Sidebar';
import CardContainer from './card/CardContainer';

const Container = tw.aside`
  flex
  h-screen
  bg-gradient-to-l from-white to-gray-50
`;

function Screen() {
  return (
    <Container>
      <Sidebar />
      <CardContainer title="salam">salam</CardContainer>
    </Container>
  );
}

export default Screen;
