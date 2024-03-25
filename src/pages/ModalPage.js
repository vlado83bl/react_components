import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <Button onClick={handleClose} primary className='mt-8'>I accept!</Button>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        This is very important agreement to accept
      </p>
    </Modal>

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
