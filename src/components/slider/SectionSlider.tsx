import Header from '../layout/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, Fragment } from 'react';
import { SectionContext } from '../../context/section-context';

function SectionSlider() {
  const { active, items } = useContext(SectionContext);

  return (
    <>
      <AnimatePresence>{active !== 0 && <Header />}</AnimatePresence>
      <AnimatePresence initial={false}>
        {items
          .filter((item, i) => i === active)
          .map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              className="w-full h-full"
            >
              <item.render />
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  );
}

export default SectionSlider;
