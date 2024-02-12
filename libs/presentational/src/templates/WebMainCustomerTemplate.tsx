import Notification from '@presentational/atoms/Notification';
import React from 'react';

type accessPageTemplateParams = {
  children: React.ReactNode;
};

const WebMainCustomerTemplate = ({ children }: accessPageTemplateParams) => {
  return (
    <div className="w-screen relative">
      <Notification />
      {children}
    </div>
  );
};

export default WebMainCustomerTemplate;
