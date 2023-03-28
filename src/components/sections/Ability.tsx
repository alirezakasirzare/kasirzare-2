import tw from 'tailwind-styled-components';
import CardContainer from '../card/CardContainer';
import TextSmallCard from '../card/TextSmallCard';

const TextContainer = tw.div`
  flex justify-start flex-wrap
`;

function Ability() {
  const title = 'چیا بلدم ؟';

  const items: string[] = [
    'html',
    'css',
    'sass',
    'javascript',
    'typescript',
    'jquery',
    'bootstrap',
    'tailwindcss',
    'react js',
    'next js',
    'styled-components',
    'react-query',
    'redux-tollkit',
  ];

  return (
    <CardContainer title={title}>
      <TextContainer dir="ltr">
        {items.map((item) => (
          <TextSmallCard text={item} key={item} />
        ))}
      </TextContainer>
    </CardContainer>
  );
}

export default Ability;
