import React, { useState, useEffect } from 'react';
import { Asset, AssetType, AssetAttribute } from '../types';
import { useAssetContext } from '../context/AssetContext';

interface AssetFormProps {
  initialAsset?: Asset; // Optional initial asset for update
  onSubmit?: (id: number, updatedAsset: Asset) => void; // Optional onSubmit for updating
  onCancel?: () => void; // Optional onCancel for updating
}

const AssetForm: React.FC<AssetFormProps> = ({ initialAsset, onSubmit, onCancel }) => {
  const { addAsset } = useAssetContext();
  const [name, setName] = useState('');
  const [type, setType] = useState<AssetType>(AssetType.A); // Set default type
  const [description, setDescription] = useState<string | undefined>('');
  const [attributes, setAttributes] = useState<AssetAttribute[]>([]);

  useEffect(() => {
    // Populate form fields with initial asset data if provided
    if (initialAsset) {
      setName(initialAsset.name);
      setType(initialAsset.type);
      setDescription(initialAsset.description);
      setAttributes(initialAsset.attributes || []);
    }
  }, [initialAsset]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as AssetType);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAttributeChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedAttributes = [...attributes];
    updatedAttributes[index] = { ...updatedAttributes[index], [name]: value };
    setAttributes(updatedAttributes);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Create a new asset object with the form data
    const newAsset: Asset = {
      id: initialAsset ? initialAsset.id : Math.floor(Math.random() * 1000), // Generate a random ID if not updating
      name,
      type,
      description,
      attributes,
    };

    // Call addAsset or updateAsset function from context based on whether an initial asset is provided
    if (onSubmit) {
      if (initialAsset) {
        onSubmit(initialAsset.id, newAsset); // Update existing asset
      }
    } else {
      addAsset(newAsset); // Add new asset
    }

    // Reset form fields
    setName('');
    setType(AssetType.A); // Reset type to default
    setDescription('');
    setAttributes([]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
        <select id="type" value={type} onChange={handleTypeChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          {Object.values(AssetType).map(assetType => (
            <option key={assetType} value={assetType}>{assetType}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <input type="text" id="description" value={description} onChange={handleDescriptionChange} placeholder="Description" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Attributes</label>
        {attributes.map((attribute, index) => (
          <div key={index} className="flex mb-2">
            <input type="text" name="key" value={attribute.key} onChange={(e) => handleAttributeChange(index, e)} placeholder="Key" className="mr-2 focus:ring-blue-500 focus:border-blue-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md" />
            <input type="text" name="value" value={attribute.value} onChange={(e) => handleAttributeChange(index, e)} placeholder="Value" className="focus:ring-blue-500 focus:border-blue-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        ))}
        <button type="button" onClick={() => setAttributes([...attributes, { key: '', value: '' }])} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">Add Attribute</button>
      </div>

      <div className="flex">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
          {initialAsset ? 'Update Asset' : 'Add Asset'}
        </button>
        {initialAsset && onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default AssetForm;
