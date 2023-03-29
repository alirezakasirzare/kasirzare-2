import tw from 'tailwind-styled-components';
import CardContainer from '../card/CardContainer';
import profileImage from '../../assets/images/alirezakasirzare.jpg';

import { motion } from 'framer-motion';

const Image = motion(tw.img`
  w-full h-full
  border-[8px] border-blue-500 rounded-3xl
`);

function Profile() {
  const title = (
    <p>
      سلام من
      <span className="text-blue-500"> علیرضا کثیرزارع </span>
      هستم.
    </p>
  );

  return (
    <CardContainer title={title} titleSecond>
      <Image
        src={profileImage}
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      />
    </CardContainer>
  );
}

export default Profile;
