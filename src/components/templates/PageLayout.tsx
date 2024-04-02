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
  footer?: boolean;
  fixed?: boolean; //prevents scroll
  absolute?: boolean; //allows scroll
  headerType?: string;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = false,
    absolute = false,
    headerType = "absolute",
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
        className={`flex flex-col min-h-[100svh] h-full justify-between overflow-none ${
          fixed ? "fixed inset-0" : absolute ? "absolute inset-0" : "relative"
        }`}
      >
        <PageHead
          title="Name"
          description="Description"
          url="https://addurl.xyz" // no backslash at the end
          twitter="twitterhandle"
        />
        {/* header */}
        {/* <Header type={headerType} /> */}

        {/* body */}
        <motion.main
          className={`flex flex-col h-full w-full overflow-x-clip `}
          {...enterAnimation}
        >
          {children}
        </motion.main>

        {/* footer */}
        {footer && <Footer />}

        {/* load screen */}
        {assets && <SplashScreen assets={assets} />}

        {/* modals */}
        <AnimatePresence mode="wait">
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
        className="-z-10 object-cover"
      />
      <div className="-z-[5] relative w-screen h-[36.9vh]">
        <Image
          src="/images/backgrounds/grid.png"
          fill
          alt="Texture"
          className="object-cover"
          priority
        />
      </div>
      {/* <div className="-z-[15] light-top absolute left-1/2 -translate-x-1/2 top-[15svh] w-[80vw] h-[15svh]" /> */}
      <div className="-z-[15] light-top absolute left-1/2 -translate-x-1/2 -top-[55svh] overflow-clip w-screen h-[75svh]" />
      <div className="-z-[10] gradient-top absolute left-1/2 -translate-x-1/2 top-0 w-screen h-[350px]" />
    </ViewContext.Provider>
  );
};
export default PageLayout;
