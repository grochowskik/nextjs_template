'use client';

import { Button, Modal } from '@/components';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DashboardModal({ isOpen, onClose }: DashboardModalProps) {
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>Sukces</Modal.Header>
      <Modal.Body>
        Formularz został wysłany poprawnie. Twoje dane zostały zapisane.
      </Modal.Body>
      <Modal.Footer>
        <Button label="Zamknij" onClick={onClose} />
      </Modal.Footer>
    </Modal>
  );
}
