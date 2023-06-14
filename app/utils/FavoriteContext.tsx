import React, { ReactNode, createContext, useState } from "react";

interface FavoriteContextProps {
  favoriteRecipeId: number;
  setFavoriteRecipeId: (id: number) => void;
}

export const FavoriteContext = createContext<FavoriteContextProps>({
  favoriteRecipeId: 0,
  setFavoriteRecipeId: () => {},
});

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
  const [favoriteRecipeId, setFavoriteRecipeId] = useState<number>(0);

  return (
    <FavoriteContext.Provider value={{ favoriteRecipeId, setFavoriteRecipeId }}>
      {children}
    </FavoriteContext.Provider>
  );
};
