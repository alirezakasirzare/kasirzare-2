import Header from '../layout/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, Fragment } from 'react';
import { SectionContext } from '../../context/section-context';

interface SectionSliderProps {
  direction: number;
}
function SectionSlider(props: SectionSliderProps) {
  const { direction } = props;

  const { active, items } = useContext(SectionContext);

  return (
    <>
      <AnimatePresence>{active !== 0 && <Header />}</AnimatePresence>
      <div className="w-full h-full relative">
        <AnimatePresence>
          {items
            .filter((item, i) => i === active)
            .map((item) => (
              <motion.div
                key={item.id}
                initial={{ y: `${100 * direction}%` }}
                animate={{ y: '0%' }}
                exit={{ y: `${-100 * direction}%` }}
                className="w-full h-full absolute top-0 left-0"
              >
                <item.render />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default SectionSlider;
