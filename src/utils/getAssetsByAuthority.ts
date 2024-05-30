
export const getAssetsByAuthority = async (
  page: number,
  limit: number
  ): Promise<any[]> => {

  const rpcDevnetHelius = "https://devnet.helius-rpc.com/?api-key=b2fbf3d2-b256-4bd7-8f59-4f5dd972499b";
  const rpcMainnetHelius = "https://mainnet.helius-rpc.com/?api-key=b2fbf3d2-b256-4bd7-8f59-4f5dd972499b";

  const collectionAddress = "frogQCpP8LpgfhhpusLvNoRw6sjmsX3Vij7MF8KtHn2";

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
          page: page , // Starts at 1
          limit: limit //can modify
        },
    }),
  });
  const { result } = await response.json();
  
  console.log("Assets by Authority: ",
  //  result?.items
   );
  return result?.items;
};
