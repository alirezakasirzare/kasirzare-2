import Backdrop from './Backdrop';
import tw from 'tailwind-styled-components';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const Box = motion(
  tw.div`
    fixed top-1/2 left-1/2
    w-[calc(100%-20px)] h-[calc(100%-20px)] md:w-4/5 md:h-4/5 
    bg-gradient-to-r from-gray-100 to-gray-50
    rounded-3xl overflow-auto
    flex flex-col md:flex-row
  `
);

const Content = tw.div`
  w-full
  md:max-w-[400px]
  p-6
  flex flex-col justify-between gap-3
  bg-blue-500 text-white
`;

const Image = tw.img`
  w-full h-auto
  mb-2
  rounded-lg
`;

const Title = tw.header`
  text-center
  font-bold 
  text-xl
  mb-3
`;

const More = tw.div`
  bg-white/20
  rounded-3xl
  text-justify
  p-4
  mb-2
`;

const Item = tw.div`
  bg-white/20
  rounded-full
  py-2 px-5
  w-max
  text-sm
  inline-block
`;

const Button = tw.button`
  transition-all
  bg-white/20 hover:bg-white/30
  rounded-full
  py-2 px-5
  w-full
  text-sm
`;

interface ModalProps {
  show: boolean;
  title: string;
  more: string;
  items: string[];
  onClose: () => void;
  path: string;
  image: string;
}

function Modal(props: ModalProps) {
  const { show, title, more, items, onClose, path, image } = props;

  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {show && (
        <Backdrop>
          <Box
            initial={{ x: '-50%', y: '-55%' }}
            exit={{ y: '-55%' }}
            animate={{ y: '-50%' }}
          >
            <Content>
              <div>
                <Image src={image} />
                <Title>{title}</Title>
                <More>{more}</More>
                <div dir="ltr" className="flex gap-2 flex-wrap">
                  {items.map((item) => (
                    <Item key={item}>{item}</Item>
                  ))}
                </div>
              </div>
              <Button onClick={onClose}>بستن</Button>
            </Content>
            <div className="flex justify-center items-center w-full h-screen md:h-full p-3 md:p-6">
              {loading && <FaSpinner className="animate-spin text-blue-500" />}
              <iframe
                src={path}
                title={title}
                className={`w-full h-[calc(100vh-20vh)] md:h-full rounded-lg ${
                  loading && 'hidden'
                }`}
                onLoad={() => setLoading(false)}
              ></iframe>
            </div>
          </Box>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default Modal;
