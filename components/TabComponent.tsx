import { useState } from "react"

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
      <style jsx>{`
        .tabs {
          display: flex;
        }

        .tab {
          cursor: pointer;
          padding: 10px 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-right: 5px;
        }

        .tab.active {
          background-color: #0070f3;
          color: white;
        }

        .tab-content {
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
}

export default TabComponent
