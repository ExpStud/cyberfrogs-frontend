import { FC, useCallback, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ViewContext } from "@contexts";
import debounce from "lodash.debounce";
import { useLockBodyScroll } from "src/hooks";
import { BackgroundGradients, Logo } from "@components";
import { useRouter } from "next/router";

interface Props {
  assets?: boolean[];
}

const SplashScreen: FC<Props> = ({ assets = [] }: Props) => {
  const { setShowView } = useContext(ViewContext);
  const router = useRouter();

  const isMint = router.pathname === "/mint";
  const showLogo = false; //isMint;
  const showBlur = false; //isMint;

  //splash screen animation
  const [showAnimation, setShowAnimation] = useState<boolean>(true); // shows/hides SplashScreen animation
  const animationDelay = 750;
  const animationTransition = 500;

  const debouncer = debounce(
    (value) => setShowAnimation(value),
    animationDelay
  );

  //checks if all assets are loaded
  const checkLoadStatus = useCallback(() => {
    const didLoad = assets.every((value) => value === true);
    debouncer(!didLoad);
  }, [assets, debouncer]);

  useEffect(() => {
    checkLoadStatus();
  }, [checkLoadStatus]);

  useEffect(() => {
    return () => {
      debouncer.cancel();
    };
  }, [debouncer]);

  useEffect(() => {
    setShowView(!showAnimation);
  }, [setShowView, showAnimation]);

  //stop page scroll (when modal or menu open)
  useLockBodyScroll(showAnimation);
  //mix-blend-color-dodge bg-splash-gradient
  return (
    <AnimatePresence mode="wait">
      {showAnimation && (
        <motion.div
          className={`bg-cf-green-900 flex justify-center 	 ${
            showAnimation ? "fixed z-50 inset-0" : "hidden -z-50"
          }
          ${!isMint ? "opacity-50" : ""}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: animationTransition / 1000,
            ease: "easeInOut",
          }}
        >
          {showLogo && (
            <Logo className="page-spacing pt-1 md:pt-3 lg:pt-6 w-screen" />
          )}
          <BackgroundGradients blur={showBlur} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
