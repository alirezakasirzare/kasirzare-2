import tw from 'tailwind-styled-components';
import CardContainer from '../card/CardContainer';
import profileImage from '../../assets/images/alirezakasirzare.jpg';

const Image = tw.img`
  w-full
  h-full
  border-8 border-blue-500 rounded-lg
`;

function Profile() {
  const title = `سلام من علیرضا کثیرزارع هستم.`;

  return (
    <CardContainer title={title}>
      <Image src={profileImage} />
    </CardContainer>
  );
}

export default Profile;
