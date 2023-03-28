import Info from '../components/sections/Info';
import Profile from '../components/sections/Profile';
import Ability from '../components/sections/Ability';
import { ReactNode, createContext, useState } from 'react';

interface ContextType {
  items: { render: any; id: string }[];
  active: number;
  changeActive?: (item: number) => void;
}

const initValue: ContextType = {
  items: [
    {
      render: Profile,
      id: 'profile',
    },
    {
      render: Info,
      id: 'info',
    },
    {
      render: Ability,
      id: 'ability',
    },
  ],
  active: 0,
};

export const SectionContext = createContext<ContextType>(initValue);

interface SectionProviderProps {
  children: ReactNode;
}

function SectionProvider(props: SectionProviderProps) {
  const { children } = props;
  const [section, setSection] = useState(initValue);

  const handleChnageItem = (item: number) => {
    setSection((prevState) => ({
      ...prevState,
      active: item,
      changeActive: handleChnageItem,
    }));
  };

  return (
    <SectionContext.Provider
      value={{ ...section, changeActive: handleChnageItem }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export default SectionProvider;
