import { FC, ReactNode, useState } from "react";
import {
  PageHead,
  Header,
  Footer,
  SplashScreen,
  ImageModal,
} from "@components";
import { enterAnimation } from "@constants";
import { AnimatePresence, motion } from "framer-motion";
import { ViewContext } from "@contexts";
import Image from "next/image";
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const value = {
    showView,
    setShowView,
    showModal,
    setShowModal,
  };

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex flex-col min-h-[100svh] h-full justify-between items-center overflow-x-hidden ${
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
          className="main-width flex flex-col h-full w-full mt-10"
          {...enterAnimation}
        >
          {children}
        </motion.main>
        <Footer />

        {/* modals */}
        <AnimatePresence mode="wait">
          {assets && <SplashScreen assets={assets} key="assets" />}
          {showModal && (
            <ImageModal
              key="image-modal"
              show={showModal}
              close={() => setShowModal(false)}
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
