'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Asset } from '../types';

interface AssetContextType {
  assets: Asset[];
  addAsset: (newAsset: Asset) => void;
  updateAsset: (id: number, updatedAsset: Asset) => void;
  deleteAsset: (id: number) => void;
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export const useAssetContext = (): AssetContextType => {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAssetContext must be used within an AssetProvider');
  }
  return context;
};

interface AssetProviderProps {
  children: ReactNode;
}

export const AssetProvider: React.FC<AssetProviderProps> = ({ children }) => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const addAsset = (newAsset: Asset) => {
    setAssets(prevAssets => [...prevAssets, newAsset]);
  };

  const updateAsset = (id: number, updatedAsset: Asset) => {
    setAssets(prevAssets =>
      prevAssets.map(asset => (asset.id === id ? updatedAsset : asset))
    );
  };

  const deleteAsset = (id: number) => {
    setAssets(prevAssets => prevAssets.filter(asset => asset.id !== id));
  };

  const contextValue: AssetContextType = {
    assets,
    addAsset,
    updateAsset,
    deleteAsset
  };

  return <AssetContext.Provider value={contextValue}>{children}</AssetContext.Provider>;
};
