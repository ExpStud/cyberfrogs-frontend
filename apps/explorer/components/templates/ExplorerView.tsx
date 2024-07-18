import {
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
  useState,
  use,
  useCallback,
} from "react";
import Image from "next/image";
import { Heading } from "@components";
import { Explorer, ListingData, TextToggle } from "@explorer-components";
import { getAssetsByAuthority, handleAssetLoad } from "@utils";
import { NftDataType } from "@explorer-types";
import { NFT } from "src/types";
import debounce from "lodash.debounce";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const ExplorerView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [overviewToggle, setOverviewToggle] = useState<boolean>(true);
  const [listingData, setListingData] = useState<NftDataType | null>(null);
  const [nftData, setNftData] = useState<NFT[]>([]);
  const [page, setPage] = useState<number>(1); //used to paginate and lazy load
  const [loading, setLoading] = useState<boolean>(false);

  const paginateDebouncer = debounce(() => setPage((prev) => prev + 1), 1500);
  const loadDebounce = debounce(() => setLoading(false), 1500);

  const paginateData = () => {
    if (loading) return;
    paginateDebouncer();
  };

  //fetch nft metadata
  const fetchNftMetadata = useCallback(async () => {
    setLoading(true);
    try {
      const frogs: NFT[] = await getAssetsByAuthority(page, 12);
      if (!frogs) return;

      setNftData((prev) => (page === 1 ? frogs : [...prev, ...frogs]));
    } catch (error) {
      console.error(error);
    } finally {
      loadDebounce();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    fetchNftMetadata();
  }, [fetchNftMetadata]);

  useEffect(() => {
    //TODO: fetch listing data
    const NftData: NftDataType = {
      floorPrice: 7.52,
      listingCount: 292,
      supply: 757,
      owners: 2400,
    };

    setListingData(NftData);
  }, []);

  return (
    <div className="w-full flex flex-col items-center xl:items-start justify-start px-3 md:px-12 2xl:px-0 my-10 ">
      {/* heading & image */}
      <div className="w-full flex flex-col lg:flex-row justify-between px-3 md:px-0 2xl:ml-4">
        <Heading />
        <Image
          src="/images/pages/explorer/intro.png"
          width={994}
          height={218}
          alt="Explorer"
          className="hidden lg:block lg:-mt-8"
          onLoad={() => handleAssetLoad(0, setAssets)}
        />
      </div>

      {/* toggle & data */}
      <div className="z-[2] w-full flex flex-col lg:flex-row justify-between mt-10 lg:-mt-10  2xl:ml-0">
        <TextToggle
          overviewToggle={overviewToggle}
          setOverviewToggle={setOverviewToggle}
        />
        <ListingData data={listingData} />
      </div>

      {/* explorer */}
      <Explorer
        data={nftData}
        paginateData={paginateData}
        loadingData={loading}
      />
    </div>
  );
};
export default ExplorerView;
