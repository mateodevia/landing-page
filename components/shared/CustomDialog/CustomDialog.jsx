import * as React from "react";
import Dialog from "@mui/material/Dialog";
import styles from "./CustomDialog.module.css";
import { styled } from "@mui/material/styles";

const Custom = styled(Dialog)`
  .MuiDialog-container {
    background-color: rgb(245, 245, 245, 0.9);
  }
  .MuiDialog-paper {
    width: min(66.67vw, 1100px);
    max-width: calc(100vw - 48px);
    border-radius: 20px;
    padding: 30px;
    background-color: #ebebeb;
    box-shadow: 6px 6px 8px #d0d0d0, -6px -6px 8px #ffffff;
    
    @media only screen and (max-width: 400px) {
      padding: 20px;
      margin: 10px;
    }
  }
`;

function CustomDialog({ title, sub_title, children, onClose, open }) {
  return (
    <Custom
      onClose={onClose}
      open={open}
      onBackdropClick={onClose}
      maxWidth={false}
    >
      <div className='flexbox'>
        <img
          src='/icons/close.svg'
          alt='close icon'
          className={styles.close_icon}
          onClick={onClose}
        />
      </div>
      <h1 className={styles.dialog_title}>{title}</h1>
      <h2 className={styles.dialog_sub_title}>{sub_title}</h2>
      {children}
    </Custom>
  );
}

export default CustomDialog;
