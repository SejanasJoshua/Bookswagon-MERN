import React, { useEffect } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { Account, Password, PersonalSettings, Addresses } from "../components";
import "./Settings.css";

const Settings = () => {
  useEffect(() => {
    document.title = "BooksWagon : Settings";
  }, []);
  return (
    <div className="settingsOuterContainer">
      <div className="settingsContainer">
        <h2>Settings</h2>
        <div className="settingsTab">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">My Account</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">My Addresses</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Change Password</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Personal Settings</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="settingTabTitle">
                      <h3>My Account</h3>
                    </div>
                    <Account />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="settingTabTitle">
                      <h3>My Addresses</h3>
                    </div>
                    <Addresses />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="settingTabTitle">
                      <h3>Change Password</h3>
                    </div>
                    <Password />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <div className="settingTabTitle">
                      <h3>Personal Settings</h3>
                    </div>
                    <PersonalSettings />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default Settings;
