'use client'

import React, { useState, useEffect } from 'react';
import { AssetsMockData } from "../data/AssetData";
import AssetTree from '../components/AssetTree';
import AssetFilter from "../components/AssetFilter";
import { useAssetContext } from '../context/AssetContext';
import { Asset } from '@/types';
import AssetForm from './AssetForm';

// Define a recursive filtering function
const filterAssetsByType = (assets: Asset[], targetType: string): Asset[] => {
  return assets.reduce((filtered, asset) => {
    if (asset.type === targetType || (asset.children && asset.children.some(child => child.type === targetType))) {
      filtered.push(asset);
    }
    if (asset.children) {
      filtered.push(...filterAssetsByType(asset.children, targetType));
    }
    return filtered;
  }, [] as Asset[]);
};

const AssetMain: React.FC = () => {
  const { assets } = useAssetContext();
  const mergedAssets = [...AssetsMockData, ...assets]
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>(mergedAssets);

  useEffect(() => {
    const mergedAssets = [...AssetsMockData, ...assets]
    setFilteredAssets(mergedAssets);
  }, [assets]);

  const handleFilter = (type: string, isMonitored: boolean) => {
    let filteredAssetsCopy = [...mergedAssets];

    // Filter by type
    if (type) {
      filteredAssetsCopy = filterAssetsByType(filteredAssetsCopy, type);
    }

    // Filter by isMonitored
    // Filter by isMonitored
    if (isMonitored) {
      filteredAssetsCopy = filteredAssetsCopy.filter(asset => {
        const isMonitoredAttribute = asset.attributes?.find(attr => attr.key === 'isMonitored');
        // Check if the attribute exists and if its value is true
        return isMonitoredAttribute && isMonitoredAttribute.value === true;
      });
    }

    setFilteredAssets(filteredAssetsCopy);
  };

  const updateAssetRecursive = (assets: Asset[], id: number, updatedAsset?: Asset): Asset[] => {
    return assets.map(asset => {
      if (asset.id === id) {
        return updatedAsset || asset;
      }
      if (asset.children) {
        return {
          ...asset,
          children: updateAssetRecursive(asset.children, id, updatedAsset)
        };
      }
      return asset;
    });
  };

  const handleUpdate = (id: number, updatedAsset: Asset) => {
    setFilteredAssets(prevAssets => updateAssetRecursive(prevAssets, id, updatedAsset));
  };

  const handleDelete = (id: number) => {
    setFilteredAssets(prevAssets => {
      const updatedAssets: Asset[] = prevAssets.filter(asset => {
        if (asset.id === id) {
          // If the current asset matches the ID, remove it
          return false;
        }
        if (asset.children) {
          // Recursively delete from children if they exist
          asset.children = deleteAssetFromChildren(asset.children, id);
        }
        return true;
      });
      return updatedAssets;
    });
  };

  const deleteAssetFromChildren = (children: Asset[], id: number): Asset[] => {
    return children.filter(child => {
      if (child.id === id) {
        // If the child matches the ID, remove it
        return false;
      }
      if (child.children) {
        // Recursively delete from children if they exist
        child.children = deleteAssetFromChildren(child.children, id);
      }
      return true;
    });
  };
  return (
    <div>
      <AssetForm />
      <AssetFilter onFilter={handleFilter} />
      <AssetTree assets={filteredAssets} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default AssetMain;