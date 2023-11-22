import Modal from 'react-modal';
import { DivOverlay, DivModal, ModalImage } from './Modal.styled';

Modal.setAppElement('#root');

export const ModalWindow = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
          <DivOverlay>
        <DivModal>
          <ModalImage src={imageUrl} alt="" />
        </DivModal>
      </DivOverlay>
    </Modal>
  );
};