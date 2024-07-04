import { motion } from "framer-motion";
import { FC, ReactNode, HTMLAttributes, useState } from "react";
import { midExitAnimation } from "@constants";
import { useLockBodyScroll } from "@hooks";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
}
const Modal: FC<Props> = (props: Props) => {
  const { show, children, className, ...componentProps } = props;

  const [exitHover, setExitHover] = useState<boolean>(false);

  //disable body scroll when modal is open
  useLockBodyScroll(show);

  return (
    <div key="image-modal" className="fixed inset-0 w-full h-full z-50">
      {/* modal */}
      <motion.div
        initial={{
          opacity: 0,
          left: "50%",
          translateX: "-50%",
          top: "70%",
          translateY: "-50%",
        }}
        animate={{
          opacity: 1,
          left: "50%",
          translateX: "-50%",
          top: "50%",
          translateY: "-50%",
        }}
        exit={{
          opacity: 0,
          left: "50%",
          translateX: "-50%",
          top: "70%",
          translateY: "-50%",
        }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        //left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        className={`z-10 absolute 
        xl:aspect-[12/5] w-[100vw] md:w-[95vw] xl:w-[90vw] xl:max-w-[1520px] h-[100vh] md:h-[95vh] xl:h-auto
        bg-cf-green-900 xl:bg-transparent  xl:bg-modalBg 
         ${className ?? ""}`}
      >
        {/* <motion.img src="/images/backgrounds/modal.svg" alt="Background" /> */}
        <Image
          src="/images/icons/threedots.svg"
          width={82}
          height={33}
          alt="dots"
          className="absolute top-0 left-0 xl:-top-5 xl:-left-1.5"
        />
        {/* close icon */}
        <div
          className="cursor-pointer absolute top-3 right-4 xl:top-5 xl:right-2"
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
        <div className="mt-16 mx-12 mb-12">{children}</div>
      </motion.div>
      {/* background shade */}
      {show && (
        <motion.div
          className="z-0 fixed inset-0 bg-black bg-opacity-80 cursor-pointer"
          {...midExitAnimation}
          onClick={componentProps.onClick}
        />
      )}
    </div>
  );
};

export default Modal;
