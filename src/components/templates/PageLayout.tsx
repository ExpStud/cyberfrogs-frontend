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
  header?: boolean;
  footer?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    header = true,
    footer = true,
    fixed = false,
    absolute = false,
    children,
    assets = [],
  } = props;

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
        {/* header */}
        {header && <Header />}

        {/* body */}
        <motion.main
          className={`page-spacing flex flex-col h-full w-full mt-10`}
          {...enterAnimation}
        >
          {children}
        </motion.main>

        {/* footer */}
        {footer && <Footer />}

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
      <Image
        src="/images/backgrounds/texture.png"
        fill
        alt="Texture"
        priority
        className="-z-10 object-cover"
      />
      <div className="-z-[5] absolute top-0 inset-x-0 w-screen h-[36.9vh]">
        <Image
          src="/images/backgrounds/grid.png"
          fill
          alt="Texture"
          priority
          className="object-cover"
        />
      </div>
      <div className="-z-[15] light-top absolute left-1/2 -translate-x-1/2 -top-[55svh] overflow-clip w-screen h-[75svh]" />
      <div className="-z-[10] gradient-top absolute left-1/2 -translate-x-1/2 top-0 w-screen h-[200px] sm:h-[40svh]" />
    </ViewContext.Provider>
  );
};
export default PageLayout;
