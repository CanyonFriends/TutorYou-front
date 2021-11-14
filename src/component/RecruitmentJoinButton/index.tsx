import React, { useState } from 'react';
import * as Style from './styled';

interface RecruitmentEditButtonProps {
  onClick: () => Promise<void>;
}

function RecruitmentJoinButton({ onClick }: RecruitmentEditButtonProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onCustomClick = () => {
    onClick();
    handleClose();
  };

  return (
    <>
      <Style.TextTooltip title="그룹 참가">
        <Style.Container onClick={handleOpen} color="primary">
          <Style.Icon />
        </Style.Container>
      </Style.TextTooltip>
      <Style.MUIModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Style.MUIBox>
          <Style.Text id="modal-modal-title" variant="h4">
            그룹에 참가하시겠습니까?
          </Style.Text>
          <Style.ButtonContainer>
            <Style.MUIButton onClick={onCustomClick} variant="contained" color="primary">참가</Style.MUIButton>
            <Style.MUIButton onClick={handleClose} variant="contained" color="inherit">취소</Style.MUIButton>
          </Style.ButtonContainer>
        </Style.MUIBox>
      </Style.MUIModal>
    </>
  );
}

export default RecruitmentJoinButton;
