import tw from 'tailwind-styled-components';

const Box = tw.div`
  bg-gray-100
  rounded-full
  py-2 px-5
  w-full
  text-sm
  flex justify-center items-center gap-5
`;

interface TextSmallCardProps {
  text: string;
  Icon: any;
}

function TextIconCard(props: TextSmallCardProps) {
  const { text, Icon } = props;

  return (
    <Box>
      <span className="text-blue-500 text-base" dir="ltr">
        {text}
      </span>
      <Icon />
    </Box>
  );
}

export default TextIconCard;
