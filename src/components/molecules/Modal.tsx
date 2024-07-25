import { motion } from "framer-motion";
import { FC, ReactNode, HTMLAttributes, useState } from "react";
import { midExitAnimation, slideUp } from "@constants";
import { useLockBodyScroll, useWindowSize } from "@hooks";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
  upgradeModal?: boolean;
}
const Modal: FC<Props> = (props: Props) => {
  const {
    show,
    children,
    upgradeModal = false,
    className,
    ...componentProps
  } = props;

  const [exitHover, setExitHover] = useState<boolean>(false);
  const [winWidth] = useWindowSize();
  //disable body scroll when modal is open
  useLockBodyScroll(show);

  const modalAnimation = {
    initial: {
      opacity: 0,
      scale: 0.75,
      left: "50%",
      translateX: "-50%",
      top: "50%",
      translateY: "-50%",
    },
    animate: {
      opacity: 1,
      scale: 1,
      left: "50%",
      translateX: "-50%",
      top: "50%",
      translateY: "-50%",
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      left: "50%",
      translateX: "-50%",
      top: "50%",
      translateY: "-50%",
    },
    transition: { duration: 0.3 },
  };

  const getAnimationProps = (
    winWidth: number,
    modalAnimation: any,
    slideUp: any,
    show: boolean
  ) => {
    return winWidth >= 1024 ? { ...modalAnimation } : { ...slideUp(show) };
  };

  return (
    <div key="image-modal" className="fixed inset-0 w-full h-full z-50 ">
      {/* modal */}
      {upgradeModal && (
        <motion.div
          {...modalAnimation}
          className="absolute z-20  w-full md:w-[480px] h-full md:h-[600px] bg-[#0D3426] border border-[#75FF72]/20"
        >
          {/* close icon */}
          <div
            className="cursor-pointer absolute top-5 right-5"
            onClick={componentProps.onClick}
            onMouseEnter={() => setExitHover(true)}
            onMouseLeave={() => setExitHover(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 10 10"
              fill="none"
              className="icon-opacity-60"
            >
              <path
                d="M8.33097 9.92898L0 1.61222L1.60511 0L9.92898 8.33097L8.33097 9.92898ZM1.60511 9.92898L0 8.33097L8.33097 0L9.92898 1.61222L1.60511 9.92898Z"
                fill="#FFFEF3"
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <div className="p-10">{children}</div>
        </motion.div>
      )}
      {!upgradeModal && winWidth && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          {...getAnimationProps(winWidth, modalAnimation, slideUp, show)}
          className={`z-20 absolute bottom-0 lg:bottom-auto lg:aspect-[12/5] w-[100vw] lg:w-[90vw] lg:max-w-[1520px] h-[calc(90dvh)] lg:h-[95vh]  raffle-scroll  
          bg-cf-green-900 lg:bg-transparent lg:bg-modalBg lg:max-h-[622px] ${
            className ?? ""
          }`}
        >
          <Image
            src="/images/icons/threedots.svg"
            width={82}
            height={33}
            alt="dots"
            className="absolute top-0 left-0 lg:-top-5 lg:-left-1.5"
          />
          {/* close icon */}
          <div
            className="cursor-pointer absolute top-3 right-4 lg:top-5 lg:right-2"
            onClick={componentProps.onClick}
            onMouseEnter={() => setExitHover(true)}
            onMouseLeave={() => setExitHover(false)}
          >
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5L10 0H40V27L37.5 29.5L35 32H0V5H5Z"
                fill="#081F17"
                className={`transition-100 ${
                  exitHover ? "opacity-90" : "opacity-60"
                }`}
              />
              <rect x="35" y="2" width="3" height="3" fill="#124835" />
              <rect x="35" y="7" width="3" height="3" fill="#124835" />
              <path
                d="M17.0568 20.8295L15.9318 19.6989L23.0341 12.625L24.1648 13.75L17.0568 20.8295ZM23.0341 20.8295L15.9261 13.75L17.0568 12.625L24.1591 19.6989L23.0341 20.8295Z"
                fill="#FFFEF3"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          {/* content */}
          <div className="mt-14 mx-12 mb-12">{children}</div>
        </motion.div>
      )}
      {/* background shade */}
      {show && (
        <motion.div
          className="z-0 fixed inset-0 bg-[rgba(8,31,23,0.90)] backdrop-blur-[10px] cursor-pointer"
          {...midExitAnimation}
          onClick={componentProps.onClick}
        />
      )}
    </div>
  );
};

export default Modal;
