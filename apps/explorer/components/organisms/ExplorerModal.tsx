import { FC } from "react";
import { Modal } from "@components";

interface Props {
  show: boolean;
  close: () => void;
}

const ExplorerModal: FC<Props> = (props: Props) => {
  const { show, close } = props;

  return (
    <Modal show={show} onClick={() => close()}>
      <div className="h-full">Add content</div>
    </Modal>
  );
};

export default ExplorerModal;
