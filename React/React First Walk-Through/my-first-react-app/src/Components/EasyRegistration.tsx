import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faCodeBranch,
  faUsers,
  faInfoCircle,
  faIdCard,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./ProgressBar";
import { ProgressBar as BootstrapProgressBar } from "react-bootstrap";

const tabs = [
  { id: "tab1", name: "Name and Address", icon: faMapPin },
  { id: "tab2", name: "Business Branches", icon: faCodeBranch },
  { id: "tab3", name: "Business Owners", icon: faUsers },
  { id: "tab4", name: "Other Information", icon: faInfoCircle },
  { id: "tab5", name: "Filing Information", icon: faIdCard },
];

const EasyRegistrationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const completionPercentages = {
    tab1: 90,
    tab2: 75,
    tab3: 60,
    tab4: 40,
    tab5: 100,
  };

  return (
    <div className="my-5">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {completionPercentages[
                tab.id as keyof typeof completionPercentages
              ] < 100 && (
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="text-danger me-1"
                />
              )}
              <FontAwesomeIcon icon={tab.icon} className="me-1" />
              {tab.name}
              <BootstrapProgressBar
                now={
                  completionPercentages[
                    tab.id as keyof typeof completionPercentages
                  ]
                }
                label={`${
                  completionPercentages[
                    tab.id as keyof typeof completionPercentages
                  ]
                }%`}
                variant="info"
                animated
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content border p-3">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${
              activeTab === tab.id ? "show active" : ""
            }`}
          >
            <h3>{tab.name}</h3>
            <ProgressBar
              name={tab.name}
              value={
                completionPercentages[
                  tab.id as keyof typeof completionPercentages
                ]
              }
            />
            <p>Content for {tab.name} goes here.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyRegistrationTabs;

// .replace(/\s/g, "")
