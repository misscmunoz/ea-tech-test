'use client'

import React, { useState } from "react";
import { AssetType } from "@/types";

interface AssetFilterProps {
  onFilter: (type: string, isMonitored: boolean) => void;
}

const AssetFilter: React.FC<AssetFilterProps> = ({ onFilter }) => {
  const [type, setType] = useState<string>("");
  const [isMonitored, setIsMonitored] = useState<boolean>(false);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    setType(selectedType);
    onFilter(selectedType, isMonitored);
  };

  const handleIsMonitoredChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsMonitored(checked);
    onFilter(type, checked);
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <span> Filter: </span>
      <label htmlFor="type">Type:</label>
      <select id="type" value={type} onChange={handleTypeChange}>
        <option value="">All</option>
        <option value={AssetType.A}>Type A</option>
        <option value={AssetType.B}>Type B</option>
        <option value={AssetType.C}>Type C</option>
        <option value={AssetType.D}>Type D</option>
        <option value={AssetType.E}>Type E</option>
      </select>

      <label htmlFor="isMonitored">Is Monitored:</label>
      <input
        type="checkbox"
        id="isMonitored"
        checked={isMonitored}
        onChange={handleIsMonitoredChange}
      />
    </div>
  );
};

export default AssetFilter;