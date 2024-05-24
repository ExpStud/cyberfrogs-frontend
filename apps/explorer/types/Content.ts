export type NftDataType = {
  floorPrice: number;
  listingCount: number;
  supply: number;
  owners: number;
};

export type ExplorerFilter = {
  name: string;
  switch?: boolean;
  dropdown?: string[];
};