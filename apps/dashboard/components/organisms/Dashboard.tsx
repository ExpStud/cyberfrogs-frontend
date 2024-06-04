import { FC } from "react";
import Image from "next/image";
import { NFT } from "@types";
import { AuthData } from "@dashboard-types";
import { DataWrapper, UserNft, VariableLabel } from "@dashboard-components";

interface DashboardProps {
  userFrogs: NFT[];
  isLoading: boolean;
  connected: boolean;
}

const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  const { userFrogs, isLoading, connected } = props;

  //TODO: add data
  const kira = connected ? 420 : 0;
  const alpha = connected ? 0 : 0;
  const beta = connected ? 10 : 0;
  const thor = connected ? 0 : 0;
  const top1000 = connected ? 0 : 0;
  const og = connected ? 1 : 0;

  const estimateValue = connected ? 13.44 : 0;
  const paperhandValue = connected ? 9 : 0;

  const authData: AuthData | undefined = connected
    ? { discordId: "DarthDegen#69", role: "Whale" }
    : undefined;

  return (
    <div className="relative flex flex-col justify-between gap-3  bg-cf-green-950 md:bg-transparent md:bg-dashboardBg min-h-[700px] w-full md:w-full mt-5 md:mt-0 pl-5 pr-0 md:pl-10 xl:pr-10 py-6">
      <div>
        <Image
          src="/images/dashboard/dash-text.svg"
          width={118}
          height={9}
          alt="Text"
        />
        {/* data */}
        <div className="explorer-scroll flex justify-between w-full h-full mt-2 overflow-x-auto pr-5 xl:pr-0 pb-2 gap-8">
          <DataWrapper title="My Frogs">
            <p className="text-cf-gold text-3xl md:text-4xl">
              {userFrogs.length}
            </p>
            <p className="text-cf-white/50 uppercase mt-2 text-sm md:text-base">
              {kira} $KIRA
            </p>
          </DataWrapper>
          <DataWrapper title="Estimate Value">
            <p className="text-cf-gold text-3xl md:text-4xl">
              {estimateValue} SOL
            </p>
            <p className="text-cf-white/50 uppercase mt-2 text-sm md:text-base">
              Paperhand: {paperhandValue} $SOL
            </p>
          </DataWrapper>
          <DataWrapper title="Frog Types">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 w-1/2 uppercase pr-10">
                <VariableLabel label="Alpha" variable={alpha} />
                <VariableLabel label="Beta" variable={beta} />
                <VariableLabel label="Thor" variable={thor} />
              </div>
              <div className="flex flex-col gap-2 w-1/2 uppercase pr-10">
                <VariableLabel label="Top 1000" variable={top1000} />
                <VariableLabel label="OG" variable={og} />
              </div>
            </div>
          </DataWrapper>
          <DataWrapper title="Thor Authentication">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 w-full uppercase pr-10">
                <VariableLabel
                  label="Discord ID"
                  variable={authData?.discordId}
                  emptyMessage="Not Linked"
                />
                <VariableLabel
                  label="Role"
                  variable={authData?.role}
                  emptyMessage="Not Linked"
                />
                <VariableLabel
                  label="Bitcoin"
                  variable={authData?.bitcoin}
                  emptyMessage="Not Linked"
                />
              </div>
            </div>
          </DataWrapper>
          <div className="bg-manageBg flex flex-col justify-between w-[256px] min-w-[256px] h-[172px] min-h-[172px p-4">
            <p className="uppercase">Staked Frogs</p>
            <p className="text-sm text-cf-white/50 mb-3">
              Visit the legacy website to manage your staked frogs.
            </p>
            <Image
              src="/images/buttons/manage.svg"
              width={216}
              height={40}
              alt="Clear All"
              className="cursor-pointer button-transition min-w-[99px]"
              onClick={() =>
                window.open("https://legacy.cyberfrogs.io/staking", "_blank")
              }
            />
          </div>
        </div>
      </div>
      {/* user frogs */}
      <div className="flex gap-4 lg:gap-8 pr-2 explorer-scroll mt-6 overflow-x-auto pb-2">
        {userFrogs.map((nft: NFT, index) => (
          <UserNft metadata={nft} isLoadingCard={false} key={index} />
        ))}
        {/* loading card */}
        {userFrogs.length === 0 && isLoading && (
          <UserNft metadata={undefined} isLoadingCard={true} />
        )}
      </div>

      {/* left image */}
      <div className="absolute top-1 -left-[52px] hidden md:flex flex-col">
        <Image
          src="/images/explorer/grid-left.svg"
          width={61}
          height={586}
          alt="Dashboard Left"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Dashboard;
