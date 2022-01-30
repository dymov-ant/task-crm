import React, { FC } from "react";
import closeIcon from "./close.png";
import styles from "./panel.module.scss";

interface PanelProps {
  title: string;
  subTitle?: string;
  open: boolean;
  handleClose: () => void;
}

// eslint-disable-next-line react/function-component-definition
const Panel: FC<PanelProps> = ({
  title, subTitle, open, handleClose, children,
}) => {
  const handleClosePanel = () => {
    handleClose();
  };

  return (
    <div className={styles.panel} style={{ display: open ? "" : "none" }}>
      <div className={styles.panel__header}>
        <p className={styles.panel__title}>{title}</p>
        {
          subTitle && (
          <p className={styles.panel__subtitle}>
            {subTitle}
          </p>
          )
        }
        <button
          type="button"
          className={styles.panel__close}
          onClick={handleClosePanel}
        >
          <img src={closeIcon} alt="Закрыть" />
        </button>
      </div>
      <div className={styles.panel__body}>
        {children}
      </div>
    </div>
  );
};

export default Panel;
