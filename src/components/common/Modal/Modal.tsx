'use client';

import React, {
  useEffect,
  useCallback,
  type ReactNode,
  useContext,
  createContext,
} from 'react';
import { createPortal } from 'react-dom';
import { modalStyles } from './Modal.styles';
import { cn } from '@/utils';
import { X } from 'lucide-react';

const { overlay, backdrop, container, header, body, footer } = modalStyles;

interface ModalContextValue {
  onClose?: () => void;
}

const ModalContext = createContext<ModalContextValue>({});

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

const useEscapeKey = (callback: () => void, isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        callback();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [callback, isActive]);
};

interface BaseModalProps {
  children: ReactNode;
  show?: boolean;
  onClose?: () => void;
  size?: keyof typeof container.sizes;
  role?: string;
}

interface ModalHeaderProps {
  children: ReactNode;
}

interface ModalBodyProps {
  children: ReactNode;
}

interface ModalFooterProps {
  children: ReactNode;
  align?: keyof typeof footer.alignment;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
  const { onClose } = useModalContext();
  return (
    <div className={header.base}>
      <div className={header.title}>{children}</div>
      <X
        onClick={onClose}
        height={24}
        width={24}
        className={header.closeIcon}
      />
    </div>
  );
};

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return <div className={body}>{children}</div>;
};

const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  align = 'right',
}) => {
  return (
    <div className={cn([footer.base, footer.alignment[align]])}>{children}</div>
  );
};

const Modal: React.FC<BaseModalProps> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
} = ({ children, show, onClose, size = 'lg', role = 'dialog' }) => {
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEscapeKey(handleClose, Boolean(show));

  if (!show) {
    return null;
  }

  const modalContent = (
    <div className={overlay}>
      <div className={backdrop} />
      <div
        className={cn([
          container.base,
          container.sizes[size],
          container.maxHeight,
        ])}
        role={role}
        aria-modal="true"
        tabIndex={-1}
      >
        <ModalContext.Provider value={{ onClose: handleClose }}>
          {children}
        </ModalContext.Provider>
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
