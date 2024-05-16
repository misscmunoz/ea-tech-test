import React, { useState } from "react";
import Link from "next/link";
import { Asset } from "../types";
import AssetForm from "./AssetForm";

interface AssetTreeProps {
  assets: Asset[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedAsset: Asset) => void;
}

const AssetTree: React.FC<AssetTreeProps> = ({ assets, onDelete, onUpdate }) => {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const handleUpdate = (updatedAsset: Asset) => {
    if (selectedAsset) {
      onUpdate(selectedAsset.id, updatedAsset); // Pass the ID of the selected asset
      setUpdateFormVisible(false); // Close the update form after submitting
    }
  };

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  const toggleUpdateForm = (asset: Asset) => {
    setUpdateFormVisible(!isUpdateFormVisible);
    setSelectedAsset(asset);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md mb-4">
      {assets.map((asset) => (
        <div key={asset.id} className="p-4 border border-gray-300 rounded-md mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">{asset.name}</h2>
              <p>Type: {asset.type}</p>
              {asset.description && <p className="mb-2">Description: {asset.description}</p>}
              <Link href={`/asset/${asset.id}`} passHref legacyBehavior>
                <a className="text-blue-500">View Details </a>
              </Link>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={() => toggleUpdateForm(asset)}>Update</button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" onClick={() => handleDelete(asset.id)}>Delete</button>
            </div>
          </div>
          {isUpdateFormVisible && selectedAsset && selectedAsset.id === asset.id && (
            <div className="mt-2">
              <AssetForm initialAsset={selectedAsset} onSubmit={(id: number, updatedAsset: Asset) => handleUpdate(updatedAsset)} onCancel={() => setUpdateFormVisible(false)} />
            </div>
          )}
          {asset.children && (
            <div className="ml-4">
              {/* Recursively render children */}
              <AssetTree assets={asset.children} onDelete={onDelete} onUpdate={onUpdate} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AssetTree;