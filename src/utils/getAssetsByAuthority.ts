import { collectionAddress, rpcMainnetHelius } from "@constants";

export const getAssetsByAuthority = async (
  page: number,
  limit: number
): Promise<any[]> => {
  const response = await fetch(rpcMainnetHelius, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByAuthority',
        params: {
          authorityAddress: collectionAddress,
          page: page,  
          limit: limit  
        },
    }),
  });
  const { result } = await response.json();
  
  // console.log("Assets by Authority: ", result?.items);
  return result?.items;
};
