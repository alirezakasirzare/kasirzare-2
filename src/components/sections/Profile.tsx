import tw from 'tailwind-styled-components';
import CardContainer from '../card/CardContainer';
import profileImage from '../../assets/images/alirezakasirzare.jpg';

const Image = tw.img`
  w-full h-full
  border-[12px] border-blue-500 rounded-3xl
`;

function Profile() {
  const title = (
    <p>
      سلام من
      <span className="text-blue-500"> علیرضا کثیرزارع </span>
      هستم.
    </p>
  );

  return (
    <CardContainer title={title}>
      <Image src={profileImage} />
    </CardContainer>
  );
}

export default Profile;
