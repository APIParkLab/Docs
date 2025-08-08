import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface AdModalProps {
  title?: string;
  content?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonUrl?: string;
  showDelay?: number; // 延迟显示时间（毫秒）
  autoClose?: number; // 自动关闭时间（毫秒），0表示不自动关闭
  storageKey?: string; // localStorage键名，用于记住用户关闭状态
  showOnce?: boolean; // 是否只显示一次
}

const AdModal: React.FC<AdModalProps> = ({
  title = "🎉 特别优惠",
  content = "立即体验APIPark，开启您的API管理之旅！",
  imageUrl = "",
  buttonText = "立即体验",
  buttonUrl = "https://apipark.com/install",
  showDelay = 3000,
  autoClose = 0,
  storageKey = "apipark_ad_modal_closed",
  showOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 检查是否已经关闭过
    if (showOnce && localStorage.getItem(storageKey)) {
      return;
    }

    // 延迟显示弹窗
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, showDelay);

    // 自动关闭
    let autoCloseTimer: NodeJS.Timeout;
    if (autoClose > 0) {
      autoCloseTimer = setTimeout(() => {
        handleClose();
      }, showDelay + autoClose);
    }

    return () => {
      clearTimeout(showTimer);
      if (autoCloseTimer) {
        clearTimeout(autoCloseTimer);
      }
    };
  }, [showDelay, autoClose, storageKey, showOnce]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      if (showOnce) {
        localStorage.setItem(storageKey, 'true');
      }
    }, 300);
  };

  const handleButtonClick = () => {
    window.open(buttonUrl, '_blank');
    handleClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`${styles.overlay} ${isAnimating ? styles.show : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`${styles.modal} ${isAnimating ? styles.modalShow : ''}`}>
        <button 
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="关闭"
        >
          ×
        </button>
        
        <div className={styles.content}>
          {imageUrl && (
            <div className={styles.imageContainer}>
              <img src={imageUrl} alt="广告图片" className={styles.image} />
            </div>
          )}
          
          <div className={styles.textContent}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{content}</p>
            
            <button 
              className={styles.actionButton}
              onClick={handleButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdModal;