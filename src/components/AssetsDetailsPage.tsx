import React, { useEffect, useState } from "react";
import { useAssetContext } from '../context/AssetContext';
import { AssetsMockData } from "@/data/AssetData";
import { Asset, AssetAttribute } from "../types";

interface AssetDetailsPageProps {
  id: string;
}

const AssetDetailsPage: React.FC<AssetDetailsPageProps> = ({ id }) => {
  const { assets: contextAssets } = useAssetContext();
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    // Merge assets from context with assets from data file
    setAssets([...AssetsMockData, ...contextAssets]);
  }, [contextAssets]);

  // Define a function to recursively search for an asset by ID
  const findAssetById = (assets: Asset[], id: number): Asset | undefined => {
    for (const asset of assets) {
      if (asset.id === id) {
        return asset; // Found the asset at the current level
      }
      if (asset.children) {
        const foundInChild = findAssetById(asset.children, id); // Recursively search in children
        if (foundInChild) {
          return foundInChild; // Found the asset in children
        }
      }
    }
    return undefined; // Asset with the provided ID not found
  };

  // Find the asset with the matching ID recursively
  const asset: Asset | undefined = findAssetById(assets, parseInt(id));

  if (!asset) {
    return <div>Asset not found</div>;
  }

  const renderAttributes = (attributes: AssetAttribute[]) => {
    return (
      <ul className="mb-4">
        {attributes.map((attribute, index) => (
          <li key={index} className="mb-1">
            <span className="font-semibold">{attribute.key}:</span> {attribute.value.toString()}
          </li>
        ))}
      </ul>
    );
  };

  const renderChildren = (children: Asset[]) => {
    return (
      <ul>
        {children.map(child => (
          <li key={child.id} className="pl-4 border-l-2 border-gray-400">
            <AssetDetailsPage id={child.id.toString()} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h1 className="text-xl font-semibold mb-4">{asset.name} Details</h1>
      <p className="mb-2">ID: {asset.id}</p>
      <p className="mb-2">Type: {asset.type}</p>
      {asset.description && <p className="mb-4">Description: {asset.description}</p>}
      {asset.attributes && renderAttributes(asset.attributes)}
      {asset.children && renderChildren(asset.children)}
    </div>
  );
};

export default AssetDetailsPage;