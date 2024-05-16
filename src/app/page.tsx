import React from "react";
import AssetMain from "@/components/AssetMain";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="mx-auto max-w-md p-4">Asset Dashboard</h1>
      <AssetMain />
    </div>
  );
};

export default Home;