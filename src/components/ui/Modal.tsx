import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  modalData: Record<string, any>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, modalData }) => {
  if (!isOpen) return null;

  const spreadModalData = {
    ...modalData.assetForm,
    ...modalData.dateTimeForm,
    ...modalData.internalNote,
  };

  const modalContent = (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">{title && <h2>{title}</h2>}</div>
        <div className="modal-data-container">
          {Object.entries(spreadModalData).map(([key, value]) => {
            return (
              <div key={key}>
                {key} : {value?.toString()}
              </div>
            );
          })}
        </div>
        {/* <button className="modal-close" onClick={onClose}>
          Close Modal
        </button> */}
        <Button className="modal-close" onClick={onClose}>
          Close Modal
        </Button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
