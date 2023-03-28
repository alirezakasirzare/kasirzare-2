import tw from 'tailwind-styled-components';

const Box = tw.div`
  bg-gray-100
  rounded-full
  py-2 px-5
  w-full
  text-sm
  flex justify-between items-center
  mx-1 mb-2
`;

const Image = tw.img`
  rounded-full
  w-16 h-16
  border-2 border-blue-500
`;

const Button = tw.button`
  bg-blue-500 text-white
  py-1.5 px-4 rounded-full
`;

const SecondButton = tw(Button)`
  bg-gray-50
  text-blue-500
`;

interface TextSmallCardProps {
  text: string;
  image: string;
}

function TextImgCard(props: TextSmallCardProps) {
  const { text, image } = props;

  return (
    <Box>
      <div className="flex items-center gap-4">
        <Image src={image} />
        <span className="text-blue-500 text-base">{text}</span>
      </div>
      <div className="flex gap-2">
        <SecondButton>پیش نمایش</SecondButton>
        <Button>بازدید</Button>
      </div>
    </Box>
  );
}

export default TextImgCard;
