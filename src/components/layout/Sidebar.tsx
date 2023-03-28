import tw from 'tailwind-styled-components';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Aside = tw.aside`
  bg-blue-500
  shadow-sm
  h-full w-[150px] p-4
  flex flex-col justify-between items-center
`;

const Button = tw.button`
  transition-all
  bg-white/30 hover:bg-white/40
  text-white
  text-lg
  p-3
  rounded-full
`;

const Text = tw.div`
  text-sm
  text-white/80
`;

function Sidebar() {
  return (
    <Aside>
      <Button>
        <FaAngleUp />
      </Button>
      <Text>7 / 1</Text>
      <Button>
        <FaAngleDown />
      </Button>
    </Aside>
  );
}

export default Sidebar;
