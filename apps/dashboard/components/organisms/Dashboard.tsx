import { FC } from "react";
import Image from "next/image";
import { NFT } from "@types";
import { AuthData } from "@dashboard-types";

interface DashboardProps {
  userFrogs: NFT[];
  authData: AuthData;
  loading: boolean;
}

const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  const { userFrogs, authData, loading } = props;

  //TODO: add kira
  const kira = 420;
  const alpha = 0;
  const beta = 0;
  const thor = 0;
  const top1000 = 0;
  const og = 1;

  return (
    <div className="relative flex flex-col gap-3  bg-cf-green-950 md:bg-transparent md:bg-dashboardBg min-h-[700px] w-full md:w-[1550px] mt-5 md:mt-0 px-5 md:px-10 py-6">
      <Image
        src="/images/dashboard/dash-text.svg"
        width={118}
        height={9}
        alt="Text"
      />
      {/* data */}
      <div className="flex justify-between w-full mt-2 overflow-x-auto explorer-scroll">
        <DataWrapper title="My Frogs">
          <p className="text-cf-gold text-4xl">{userFrogs.length}</p>
          <p className="text-cf-white/50 uppercase mt-2">{kira} $KIRA</p>
        </DataWrapper>
        <DataWrapper title="Esitmate Value">
          <p className="text-cf-gold text-4xl">{13.44} SOL</p>
          <p className="text-cf-white/50 uppercase mt-2">Paperhand: {9} $SOL</p>
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
              <VariableLabel label="Discord ID" variable={authData.discordId} />
              <VariableLabel label="Role" variable={authData.role} />
              <VariableLabel
                label="Bitcoin"
                variable={authData.bitcoin}
                emptyMessage="Not Linked"
              />
            </div>
          </div>
        </DataWrapper>
        <div className="bg-manageBg flex flex-col justify-between w-[256px] h-[172px] p-4">
          <p className="uppercase">Staked Frogs</p>
          <p className="text-sm text-cf-white/50 mb-3">
            Visit the legacy website to manage your staked frogs.
          </p>
          <Image
            src="/images/buttons/manage.svg"
            width={216}
            height={40}
            alt="Clear All"
            className="cursor-pointer button-transition min-w-[99px] hidden md:flex"
            onClick={() =>
              window.open("https://legacy.cyberfrogs.io/staking", "_blank")
            }
          />
        </div>
      </div>
      {/* user frogs */}
      <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8 pr-2 explorer-scroll mt-32">
        {userFrogs.map((nft: NFT, index) => (
          <div key={index}>{nft.content.metadata.name}</div>
        ))}
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

interface VariableLabelProps {
  label: string;
  variable: number | string | undefined;
  emptyMessage?: string;
}
const VariableLabel: FC<VariableLabelProps> = (props: VariableLabelProps) => {
  const { label, variable, emptyMessage } = props;
  return (
    <div className="flex w-full justify-between">
      <p className={variable ? "text-cf-white" : "text-cf-white/50"}>{label}</p>
      <p className={variable ? "text-cf-gold" : "text-cf-white/50"}>
        {variable ?? emptyMessage ?? "N/A"}
      </p>
    </div>
  );
};

interface DataProps {
  title: string;
  children: React.ReactNode;
}
const DataWrapper: FC<DataProps> = (props: DataProps) => {
  const { title, children } = props;
  return (
    <div className="relative w-[256px] h-[172px] flex flex-col py-4">
      <Image
        src="/images/dashboard/divider.svg"
        width={256}
        height={1}
        alt="Divider"
        className="absolute -top-[1px] left-0"
      />
      <p className="uppercase mb-6">{title}</p>
      {children}
    </div>
  );
};

export default Dashboard;
