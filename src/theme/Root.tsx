import React from 'react';
import AdModal from '../components/AdModal';
import { getActiveAdConfig } from '../config/adConfig';

// 根组件包装器，用于在整个网站中集成全局组件
export default function Root({children}: {children: React.ReactNode}): JSX.Element {
  const adConfig = getActiveAdConfig();

  return (
    <>
      {children}
      {adConfig && (
        <AdModal
          title={adConfig.title}
          content={adConfig.content}
          imageUrl={adConfig.imageUrl}
          buttonText={adConfig.buttonText}
          buttonUrl={adConfig.buttonUrl}
          showDelay={adConfig.showDelay}
          autoClose={adConfig.autoClose}
          showOnce={adConfig.showOnce}
          storageKey={adConfig.storageKey}
        />
      )}
    </>
  );
}