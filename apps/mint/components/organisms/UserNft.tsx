import { FC, useState } from "react";
import { NFT } from "@types";
import { motion } from "framer-motion";
import { UserNftBackSide, UserNftFrontSide } from "@mint-components";

interface Props {
  metadata: NFT | undefined;
  isLoadingCard?: boolean;
  handleSelected: (nft: NFT) => void;
  isSelected?: boolean;
}

const UserNft: FC<Props> = (props: Props) => {
  const {
    metadata,
    isLoadingCard = false,
    handleSelected,
    isSelected = false,
  } = props;

  const [didHover, setDidHover] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div className="relative">
      <motion.div
        className={`relative flex flex-col cursor-pointer max-w-[210px] bg-cf-green-900 ${
          isSelected ? "outline outline-cf-gold" : ""
        }`}
        onClick={() => metadata && handleSelected(metadata)}
        onMouseEnter={() => setDidHover(true)}
        onMouseLeave={() => setDidHover(false)}
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          transition: { duration: 0.4 },
        }}
      >
        <UserNftFrontSide
          metadata={metadata}
          isLoadingCard={isLoadingCard}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          didHover={didHover}
        />
        {isFlipped && (
          <UserNftBackSide isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        )}
      </motion.div>
    </div>
  );
};

export default UserNft;
