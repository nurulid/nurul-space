import React from 'react';
import { UiDesignInfo } from './components/uiDesignInfo';

export const UiBox = ({ui, uiInfo}) => {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col">
      {ui}
      <UiDesignInfo data={uiInfo} />
    </div>
  );
};
