import { FC, ReactNode, useState } from "react";
import { PageHead, Header, Footer, SplashScreen } from "@components";
import { enterAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { ViewContext } from "@contexts";
import Image from "next/image";
import { ExplorerModal } from "@explorer-components";
import { NFT } from "@types";

interface Props {
  children: ReactNode;
  fixed?: boolean;
  absolute?: boolean;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const { fixed = false, absolute = false, children, assets = [] } = props;

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);
  const [showExplorerModal, setShowExplorerModal] = useState<NFT | null>(null);

  const value = {
    showView,
    setShowView,
    showExplorerModal,
    setShowExplorerModal,
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

        <Header />
        <motion.main
          className="main-width flex flex-col flex-grow h-full w-full mt-10"
          {...enterAnimation}
        >
          {children}
        </motion.main>
        <Footer />

        {/* used to display splash screen when loading large assets on page open */}
        <AnimatePresence mode="wait">
          {assets && <SplashScreen assets={assets} key="assets" />}
        </AnimatePresence>

        {/* modals - used here to display in root container and avoid nesting issues */}
        <AnimatePresence mode="wait">
          {showExplorerModal && (
            <ExplorerModal
              key="explorer-modal"
              show={showExplorerModal !== null}
              close={() => setShowExplorerModal(null)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* backgrounds */}
      <div className="-z-[20] fixed top-0 h-screen w-screen">
        <Image
          src="/images/backgrounds/texture.png"
          fill
          alt="Texture"
          priority
          className="object-cover "
        />
      </div>
      <div className="-z-[15] light-top fixed left-1/2 -translate-x-1/2 -top-[55svh] w-[100vw] h-[75svh] overflow-hidden" />
      <div className="-z-[10] gradient-top fixed left-1/2 -translate-x-1/2 top-0 w-[100vw] h-[200px] sm:h-[40svh]  overflow-hidden" />
      <div className="-z-[5] fixed top-0 inset-x-0 w-[100vw] h-[36.9vh] overflow-x-hidden">
        <Image
          src="/images/backgrounds/grid.png"
          fill
          alt="Texture"
          priority
          className="object-cover"
        />
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;
