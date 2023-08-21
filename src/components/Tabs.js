import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div>
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 px-4 ${activeTab === tab.key ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) => (activeTab === tab.key ? tab.content : null))}
      </div>
    </div>
  );
};

export default Tabs;
