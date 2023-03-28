import tw from 'tailwind-styled-components';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { SectionContext } from '../../context/section-context';
import { useContext } from 'react';

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
  const sectionValue = useContext(SectionContext);

  const nextItem = () => {
    if (sectionValue.changeActive) {
      sectionValue.changeActive(sectionValue.active + 1);
    }
  };
  const hasNextItem = sectionValue.items.length !== sectionValue.active + 1;

  const prevItem = () => {
    if (sectionValue.changeActive) {
      sectionValue.changeActive(sectionValue.active - 1);
    }
  };
  const hasPrevItem = sectionValue.active > 0;

  return (
    <Aside>
      {hasPrevItem ? (
        <Button>
          <FaAngleUp onClick={prevItem} />
        </Button>
      ) : (
        <span></span>
      )}
      <Text>
        {sectionValue.items.length} / {sectionValue.active + 1}
      </Text>
      {hasNextItem ? (
        <Button onClick={nextItem}>
          <FaAngleDown />
        </Button>
      ) : (
        <span></span>
      )}
    </Aside>
  );
}

export default Sidebar;
