import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  BackgroundGradients,
} from "@components";
import { enterAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { ViewContext } from "@contexts";
import { NftModal } from "@explorer-components";
import { NFT } from "@types";
import { RaffleModal } from "@raffles-components";
import { Raffles } from "@raffles-types";
import { UpgradeModal } from "@mint-components";

interface Props {
  children: ReactNode;
  fixed?: boolean;
  absolute?: boolean;
  assets?: boolean[];
  header?: boolean;
  footer?: boolean;
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    fixed = false,
    absolute = false,
    children,
    assets = [],
    header = true,
    footer = true,
  } = props;

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [nftModal, setNftModal] = useState<NFT | null>(null);
  const [raffleModal, setRaffleModal] = useState<Raffles | null>(null);
  const [upgradeModal, setUpgradeModal] = useState<boolean>(false);

  const value = {
    showView,
    setShowView,
    nftModal,
    setNftModal,
    raffleModal,
    setRaffleModal,
    upgradeModal,
    setUpgradeModal,
  };

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex flex-col min-h-screen justify-between items-center overflow-x-hidden ${
          fixed ? "fixed inset-0" : absolute ? "absolute inset-0" : "relative"
        }`}
      >
        <PageHead
          title="Cyber Frogs"
          description="Cyber Frogs NFT. Community, Utility, Innovation and Development services."
          url="https://cyberfrogs.io" // no backslash at the end
          twitter="CyberFrogsNFT"
        />

        {header && <Header />}
        <motion.main
          className="main-width flex flex-col flex-grow h-full w-full mt-10"
          {...enterAnimation}
        >
          {children}
        </motion.main>
        {footer && <Footer />}

        {/* used to display splash screen when loading large assets on page open */}
        <AnimatePresence mode="wait">
          {assets && <SplashScreen assets={assets} key="assets" />}
        </AnimatePresence>

        {/* modals - used here to display in root container and avoid nesting issues */}
        <AnimatePresence mode="wait">
          {nftModal && (
            <NftModal
              key="explorer-modal"
              show={nftModal !== null}
              close={() => setNftModal(null)}
            />
          )}
          {raffleModal && (
            <RaffleModal
              key="raffle-modal"
              show={raffleModal !== null}
              close={() => setRaffleModal(null)}
            />
          )}
          {upgradeModal && (
            <UpgradeModal
              key="upgrade-modal"
              show={upgradeModal !== null}
              close={() => setUpgradeModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
      <BackgroundGradients />
    </ViewContext.Provider>
  );
};
export default PageLayout;
