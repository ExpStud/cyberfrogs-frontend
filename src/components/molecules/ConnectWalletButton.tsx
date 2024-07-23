import { NavigationItem, DropdownItem, Dropdown } from "@components";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { truncatePubKey } from "@utils";
import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLockBodyScroll, useOutsideAlerter } from "@hooks";

const ConnectWalletButton: FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const { setVisible, visible } = useWalletModal();
  const { publicKey, connecting } = useWallet();

  useLockBodyScroll(visible);

  //close dropdown on outside click
  const ref = useRef(null);
  useOutsideAlerter(ref, () => setShowDropdown(false));

  const handleClick = () => {
    if (publicKey) setShowDropdown(!showDropdown);
    else setVisible(true);
  };

  return (
    <div className="relative z-10" ref={ref}>
      <NavigationItem
        item={{
          name: publicKey
            ? truncatePubKey(publicKey)
            : visible || connecting
            ? "Connecting..."
            : "Connect",
        }}
        callback={handleClick}
        arrow={visible}
      />
      <AnimatePresence>
        {showDropdown && <WalletDropdown setShowDropdown={setShowDropdown} />}
      </AnimatePresence>
    </div>
  );
};

const WalletDropdown: FC<{
  setShowDropdown: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowDropdown }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const { onDisconnect } = useWalletMultiButton({
    onSelectWallet() {
      setVisible(true);
    },
  });

  return (
    <Dropdown>
      <DropdownItem
        key={0}
        onClick={async () => {
          await navigator.clipboard.writeText(
            publicKey ? publicKey.toBase58() : ""
          );
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? "copied!" : "copy address"}
      </DropdownItem>
      <DropdownItem key={1} onClick={() => setVisible(true)}>
        change wallet
      </DropdownItem>
      <DropdownItem
        key={2}
        onClick={() => {
          if (onDisconnect) {
            onDisconnect();
            setShowDropdown(false);
          }
        }}
      >
        disconnect
      </DropdownItem>
    </Dropdown>
  );
};

export default ConnectWalletButton;
