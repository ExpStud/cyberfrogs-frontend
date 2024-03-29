import { Dispatch, SetStateAction, FC, useContext } from "react";
import { Modal } from "@components";
import { ViewContext } from "@constants";

interface Props {
  imageId: number;
  setImageId: Dispatch<SetStateAction<number>>;
}

const ImageModal: FC<Props> = (props: Props) => {
  const { imageId, setImageId } = props;
  const { ImageModalId } = useContext(ViewContext);

  return (
    <Modal
      show={ImageModalId !== -1}
      onClick={() => {
        setImageId(-1);
      }}
    >
      <div className=""></div>
    </Modal>
  );
};

export default ImageModal;
