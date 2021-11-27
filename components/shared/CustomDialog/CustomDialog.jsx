import * as React from "react";
import Dialog from "@mui/material/Dialog";
import styles from "./CustomDialog.module.css";
import { styled } from "@mui/material/styles";

const Custom = styled(Dialog)`
  .MuiDialog-container {
    background-color: rgb(245, 245, 245, 0.9);
  }
  .MuiDialog-paper {
    border-radius: 20px;
    padding: 30px;
    background-color: #ebebeb;
    box-shadow: 6px 6px 8px #d0d0d0, -6px -6px 8px #ffffff;
  }
`;

function CustomDialog(props) {
  return (
    <Custom
      {...props}
      onClose={props.onClose}
      open={props.open}
      onBackdropClick={props.onClose}
    >
      <div className='flexbox'>
        <img
          src='/icons/close.svg'
          alt='close icon'
          className={styles.close_icon}
          onClick={props.onClose}
        />
      </div>
      <h1 className={styles.dialog_title}>{props.title}</h1>
      <h2 className={styles.dialog_sub_title}>{props.sub_title}</h2>
      {props.children}
    </Custom>
  );
}

export default CustomDialog;
