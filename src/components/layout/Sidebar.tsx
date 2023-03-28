import tw from 'tailwind-styled-components';

const Aside = tw.aside`
  bg-blue-500
  shadow-sm
  h-full w-[150px] p-4
  flex flex-col justify-between items-center
`;

function Sidebar() {
  return (
    <Aside>
      <div>top</div>
      <div>top</div>
      <div>top</div>
    </Aside>
  );
}

export default Sidebar;
