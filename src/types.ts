export enum AssetType {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
  }
  
  export interface AssetAttribute {
    key: string;
    value: string | number | readonly string[] | undefined;
  }
  
  export interface Asset {
    id: number;
    name: string;
    type: AssetType;
    description?: string;
    attributes?: AssetAttribute[];
    children?: Asset[];
  }
  
