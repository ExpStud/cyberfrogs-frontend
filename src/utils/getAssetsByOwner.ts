import { rpcMainnetHelius } from "@constants";

export const getAssetsByOwner = async (ownerAddress: string) => {

  const response = await fetch(rpcMainnetHelius, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress,
        page: 1, // Starts at 1
        limit: 1000,
      },
    }),
  });
  const { result } = await response.json();
  // console.log("Assets by Owner: ", result?.items);

  return result?.items;
};
