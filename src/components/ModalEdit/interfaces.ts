export interface ModalEditProps {
  isVisible: boolean;
  initialTitle: string;
  onClose: () => void;
  onSave: (title: string) => void;
}
