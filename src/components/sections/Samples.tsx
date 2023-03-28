import CardContainer from '../card/CardContainer';
import TextImgCard from '../card/TextImgCard';
import alirezaImage from '../../assets/images/alirezakasirzare.jpg';

function Samples() {
  const title = `نمونه کار دارم ؟`;

  const items: {
    text: string;
    image: string;
  }[] = [
    {
      text: 'ابزاریت',
      image: alirezaImage,
    },
    {
      text: 'سوداد',
      image: alirezaImage,
    },
    {
      text: 'فوتبالیت',
      image: alirezaImage,
    },
    {
      text: 'دیجی آروین',
      image: alirezaImage,
    },
    {
      text: 'موزیکو',
      image: alirezaImage,
    },
  ];

  return (
    <CardContainer title={title}>
      {items.map((item) => (
        <TextImgCard text={item.text} image={item.image} />
      ))}
    </CardContainer>
  );
}

export default Samples;
