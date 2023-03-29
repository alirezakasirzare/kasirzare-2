import tw from 'tailwind-styled-components';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { SectionContext } from '../../context/section-context';
import { useContext } from 'react';

const Aside = tw.aside`
  bg-blue-500
  shadow-sm
  h-[100px] md:h-full w-full md:w-[150px] p-4
  flex flex-row-reverse md:flex-col justify-between items-center
  relative z-50
`;

const Button = tw.button<{ $active: boolean }>`
  transition-all
  bg-white/30 hover:bg-white/40
  text-white
  text-lg
  p-3
  rounded-full
  ${({ $active }) => !$active && 'invisible'}
`;

const Text = tw.div`
  text-sm
  text-white/80
`;

interface SidebarProps {
  setDirection: (direction: number) => void;
}

function Sidebar(props: SidebarProps) {
  const { setDirection } = props;

  // sections
  const sectionValue = useContext(SectionContext);

  const hasNextItem = sectionValue.items.length !== sectionValue.active + 1;

  const nextItem = () => {
    if (sectionValue.changeActive && hasNextItem) {
      setDirection(1);
      setTimeout(() => {
        sectionValue?.changeActive?.(sectionValue.active + 1);
      }, 10);
    }
  };

  const hasPrevItem = sectionValue.active > 0;

  const prevItem = () => {
    if (sectionValue.changeActive && hasPrevItem) {
      setDirection(-1);

      setTimeout(() => {
        sectionValue?.changeActive?.(sectionValue.active - 1);
      }, 10);
    }
  };

  return (
    <Aside>
      <Button onClick={prevItem} $active={hasPrevItem}>
        <FaAngleUp />
      </Button>
      <Text>
        {sectionValue.items.length} / {sectionValue.active + 1}
      </Text>
      <Button onClick={nextItem} $active={hasNextItem}>
        <FaAngleDown />
      </Button>
    </Aside>
  );
}

export default Sidebar;
