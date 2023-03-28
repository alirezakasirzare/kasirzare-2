import tw from 'tailwind-styled-components';
import Sidebar from './layout/Sidebar';
import Profile from './sections/Profile';

const Container = tw.aside`
  flex
  h-screen
  bg-gradient-to-l from-white to-gray-50
`;

function Screen() {
  return (
    <Container>
      <Sidebar />
      <Profile />
    </Container>
  );
}

export default Screen;
