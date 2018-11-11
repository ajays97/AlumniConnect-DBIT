import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//Importing icons
import icon_alumni_db from "../assets/icon-alumni-database.png";
import icon_reunion from "../assets/icon-reunion.png";
import icon_student_wings from "../assets/icon-student-wings.png";
import icon_trophy from "../assets/icon-trophy.png";
import icon_email from "../assets/icon-email.png";
import icon_network from "../assets/icon-network.png";

class Grids extends Component {
  render() {
    return (
      <div className="container-fluid grid_container">
        <Row>
          <Col>
            <div>
              <div>
                <img src={icon_alumni_db} alt="icon" />
              </div>
              <h4>Build &amp; Maintain an Updated Alumni Database</h4>
              <p>
                With a robust Database Management System, you will never have to
                worry about the alumni database. Build, Manage, Sort and use
                your database effectively with the help of AlumniConnect.
              </p>
            </div>
          </Col>
          <Col className="ml-5 mr-5">
            <div>
              <div>
                <img src={icon_reunion} alt="icon" />
              </div>
              <h4>Plan &amp; Organize Successful Reunions / Alumni Meets</h4>
              <p>
                Alumni events/reunions play a very important role in bringing
                alumni together and keeping them engaged. Plan, Publicize and
                Organize your alumni meets effectively with our full-fledged
                Events module.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <img src={icon_student_wings} alt="icon" />
              </div>
              <h4>Involve Alumni in Student Development and Activities</h4>
              <p>
                Alumni participation can go a long way in making students
                industry ready. AlumniConnect eases identification of industry
                specific experts and involving them in student development
                activities.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div>
              <div>
                <img src={icon_trophy} alt="icon" />
              </div>
              <h4>Identify &amp; Showcase Alumni Achievers</h4>
              <p>
                High-achieving alumni are the pride of every institution.
                AlumniConnect helps institutions identify and showcase their
                distinguished alumni and connect them back to their alma-maters.
              </p>
            </div>
          </Col>
          <Col className="ml-5 mr-5">
            <div>
              <div>
                <img src={icon_email} alt="icon" />
              </div>
              <h4>Instant &amp; Targeted Communication</h4>
              <p>
                Keeping alumni constantly engaged needs targeted communication
                from the institutions. With AlumniConnect, sorting alumni based
                on various criteria and instant &amp; targeted communication is
                a breeze.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <img src={icon_network} alt="icon" />
              </div>
              <h4>Leverage the Alumni Network</h4>
              <p>
                Alumni Networks are extremely powerful communities waiting to be
                leveraged in an effective manner. AlumniConnect helps alumni
                share Job &amp; Business Opportunities, knowledge and other
                resources instantly.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Grids;
