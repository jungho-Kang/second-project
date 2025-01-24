import React, { useCallback, useState } from "react";
import Modal from "../components/Modal";
<<<<<<< HEAD

=======
>>>>>>> 0c551d9011acde111c6a1db876557c097c78580a
const useModal = ({ useBlur = true, title } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);
  return {
    Modal: isOpen
      ? ({ children }) => (
          <Modal onClose={useBlur ? close : null} title={title}>
            {children}
          </Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
};
export default useModal;
