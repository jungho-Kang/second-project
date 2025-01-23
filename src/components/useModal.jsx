import React, { useCallback, useState } from "react";
import Modal from "../components/Modal";
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
