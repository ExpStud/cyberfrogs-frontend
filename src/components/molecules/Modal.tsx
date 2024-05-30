import { motion } from "framer-motion";
import { FC, ReactNode, HTMLAttributes } from "react";
import { midClickAnimation, scaleExitAnimation } from "@constants";
import Image from "next/image";
import { useLockBodyScroll } from "@hooks";
interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
}
const Modal: FC<Props> = (props: Props) => {
  const { show, children, className, ...componentProps } = props;

  //disable body scroll when modal is open
  useLockBodyScroll(show);

  return (
    <motion.div
      key="image-modal"
      className="fixed inset-0 backdrop-blur-sm z-50 w-screen h-screen "
      onClick={componentProps.onClick}
      {...scaleExitAnimation}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`md:bg-opacity-90 absolute left-1/2 top-1 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 overflow-clip
         rounded-3xl border-[3px] border-cf-white-2 w-[98%] h-[85%] md:h-[90%] lg:h-[60vh] lg:w-[100vh] xl:w-[120vh] 3xl:h-[50vh] 3xl:w-[70vh] ${className}`}
      >
        <motion.div
          className="fixed top-1 md:top-5 right-1 md:right-6 cursor-pointer"
          onClick={componentProps.onClick}
          {...midClickAnimation}
        >
          <Image
            src="/images/icons/close.png"
            height={40}
            width={40}
            alt="close"
            priority
          />
        </motion.div>
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
