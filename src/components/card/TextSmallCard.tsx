import tw from 'tailwind-styled-components';

const Box = tw.div`
  bg-gray-100
  rounded-full
  py-2 px-5
  w-max
  text-sm
  inline-block
  mx-1 mb-2
`;

interface TextSmallCardProps {
  text: string;
  title?: string;
}

function TextSmallCard(props: TextSmallCardProps) {
  const { text, title } = props;

  return (
    <Box>
      {title} {title && ':'} <span className="text-blue-500">{text}</span>
    </Box>
  );
}

export default TextSmallCard;
