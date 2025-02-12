import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import NameandAddress from "./EZRegistrationComponents/NameandAddress";
import BusinessOwners from "./EZRegistrationComponents/BusinessOwners";
import OtherInformation from "./EZRegistrationComponents/OtherInformation";
import FilingInformation from "./EZRegistrationComponents/FilingInformation";

const tabData = [
  { id: "tab1", name: "Name and Address", progress: 0, error: false },
  { id: "tab2", name: "Business Branches", progress: 0, error: false },
  { id: "tab3", name: "Business Owners", progress: 0, error: false },
  { id: "tab4", name: "Other Information", progress: 0, error: false },
  { id: "tab5", name: "Filing Information", progress: 0, error: false },
];

// Define the type for tab state
type TabState = {
  id: string;
  name: string;
  progress: number;
  error: boolean;
  errorMessage?: string;
};

const RegistrationForm = () => {
  const [tabs, setTabs] = useState<TabState[]>(tabData);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  // Function to update progress or errors dynamically
  const updateTabState = (tabId: string, newState: Partial<TabState>) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => (tab.id === tabId ? { ...tab, ...newState } : tab))
    );
  };

  return (
    <div>
      {/* Progress Bars */}
      <div className="nav nav-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`nav-link col mb-3 ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
            style={{ cursor: "pointer" }}
          >
            <span>{tab.name}</span>
            <ProgressBar now={tab.progress} label={`${tab.progress}%`} />
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "tab1" && (
          <NameandAddress
            updateProgress={(_id: string, p: number) =>
              updateTabState("tab1", { progress: p })
            }
          />
        )}
        {activeTab === "tab3" && (
          <BusinessOwners
            updateProgress={(_id: string, p: number) =>
              updateTabState("tab3", { progress: p })
            }
          />
        )}
        {activeTab === "tab4" && (
          <OtherInformation
            updateProgress={(_id: string, p: number) =>
              updateTabState("tab4", { progress: p })
            }
          />
        )}
        {activeTab === "tab5" && (
          <FilingInformation
            updateProgress={(_id: string, p: number) =>
              updateTabState("tab5", { progress: p })
            }
          />
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
