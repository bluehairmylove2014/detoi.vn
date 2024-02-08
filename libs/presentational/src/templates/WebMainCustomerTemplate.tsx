import Notification from '@presentational/atoms/Notification';
import React from 'react';

type accessPageTemplateParams = {
  children: React.ReactNode;
};

const WebMainCustomerTemplate = ({ children }: accessPageTemplateParams) => {
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden relative scrollbar-hide">
      <Notification />

      {children}
    </div>
  );
};

export default WebMainCustomerTemplate;
