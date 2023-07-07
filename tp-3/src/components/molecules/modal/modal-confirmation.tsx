import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Style from "@/app/page.module.css";
import { useTranslations } from "next-intl";

interface ModalConfirmationProp {
  isOpen?: boolean,
  description?: string,
  onClose: () => void,
  onConfirm: () => void,
  btnConfirmText?: string,
  btnCancelText?: string    
}

export default function ModalConfirmation(props: ModalConfirmationProp) {
  const t = useTranslations();
  const [open, setOpen] = useState(props.isOpen || false);
  const [text, setText] = useState(t('modalConfirmation.description'));
  const [btnConfirmationLabel, setBtnConfirmationLabel] = useState(t('modalConfirmation.btnConfirm'));
  const [btnCancelLabel, setBtnCancelLabel] = useState(t('modalConfirmation.btnCancel'));

  useEffect(() => {
    if (props.description) {
      setText(props.description);
    }
    if (typeof props.isOpen !== 'undefined') {
      setOpen(props.isOpen);
    }
    if (props.btnConfirmText) {
      setBtnConfirmationLabel(props.btnConfirmText);
    }
    if (props.btnCancelText) {
      setBtnCancelLabel(props.btnCancelText);
    }
  }, [props]);

  const handleConfirm = () => props.onConfirm();

  const handleClose = () => {
    props.onClose();
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={Style.modal_confirmation}>
        <Box className={Style.modal_content}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {text}
          </Typography>
        </Box>
        <Box className={Style.modal_footer}>
          <Button className={Style.modal_btn_confirm} onClick={handleConfirm}>
            {btnConfirmationLabel}
          </Button>
          <Button className={Style.modal_btn_cancel} onClick={handleClose}>
            {btnCancelLabel}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
