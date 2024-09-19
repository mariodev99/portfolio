import { getProjects } from '@/firebase/services/projects';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ProjectDataType } from '@/types';


type PortfolioContextType = {
    projectsFromContext: ProjectDataType[]
    setProjectsFromContext: React.Dispatch<React.SetStateAction<ProjectDataType[]>>
};

type UserProviderProps = {
    children: ReactNode;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolioContext debe ser utilizado dentro de un PortfolioContext');
  }
  return context;
};

export const PortfolioProvider: React.FC<UserProviderProps> = ({ children }) => {

    const [projectsFromContext, setProjectsFromContext] = useState<ProjectDataType[]>([]);

      useEffect( () => {
        
        const fetchData = async () => {
          try {
            const result = await getProjects();
            setProjectsFromContext(result)
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };
        fetchData();
      }, [])
    
  return (
    <PortfolioContext.Provider value={{ projectsFromContext, setProjectsFromContext }}>
      {children}
    </PortfolioContext.Provider>
  );
};