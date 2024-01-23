import Notification from '@presentational/atoms/Notification';
import React from 'react';

type accessPageTemplateParams = {
  children: React.ReactNode;
};

const WebMainCustomerTemplate = ({ children }: accessPageTemplateParams) => {
  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden relative scrollbar-hide">
      <Notification />

      {children}
    </div>
  );
};

export default WebMainCustomerTemplate;
