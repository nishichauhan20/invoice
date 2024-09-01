import React from "react";
import { StyledHome } from "./homeStyle";
import TableData from "./TableData";
import sign from "./assets/sign.png";
const Home = () => {
  return (
    <StyledHome>
      <div>
        <h1 className="head1">GOVIND ENGINEERING</h1>
        <p className="para1">
          DEAL IN: ALL KIND OF ROLLING MILL, REFACTORY MATERIAL,
        </p>
        <hr style={{ margin: "0px", border: "1px solid" }} />
        <p className="para1">
          PLOT NO. 50 JEEVAN ,SOHNA ROAD FARIDABAD HARYANA
        </p>
      </div>
      <div className="left-slider">
        <textarea type="text" placeholder="COMPANY NAME" />
        <textarea type="text" placeholder="COMPANY ADDRESS" />
        <textarea type="text" placeholder="CITY, ZIP-CODE" />
        <textarea type="text" placeholder="STATE" />
      </div>
      <div className="greeting">
        <textarea type="text" placeholder="GREETING" />
      </div>
      <div className="subject">
        <span className="sub">
          Subject:{" "}
          <textarea type="text" placeholder="write your subject here..." />
        </span>
      </div>
      <div style={{ padding: "4px" }}>
        <p className="text-size">
          With reference to the discussion with you on the above job we are
          having <br /> Pleasure to submit the quotation as under:-{" "}
        </p>
        <div>
          <TableData />
        </div>
      </div>
      <div className="terms">
        <p className="bold">TERMS & CONDITION</p>

        <ol className="list">
          <li>
            TAX <span> : </span> EXTRA ( AS APPLICABLE ) 18%
          </li>
          <li>
            FREIGHT<span> : </span> TO PAY (EXTRA)
          </li>
          <li>
            PAYMENT<span> : </span> 80% ADVANCE AND 20% AGAINST PERFORMANCE
            INVOICE.
          </li>
          <li>
            WARRANTY<span> : </span>1 YEAR
          </li>
          <li>DELIVERY IN 5 DAYS</li>
        </ol>
      </div>

      <div className="sign">
        <p className="bold">FROM GOVIND ENGINEERING</p>
        <img src={sign} />
        <p>GOVIND CHOUHAN</p>
        <p>(PROP)</p>
        <p>9873951727</p>
      </div>
      <br />
      {/* <hr />
      <div className="footer">
        <div className="foot1">
          <h4>REGISTERED OFFICE : </h4>
          <p>PLOT NO.50</p>
          <p>Jeevan Nagar</p>
          <p>Sohna Road</p>
          <p>Faridabad</p>
          <p>Haryana</p>
        </div>
        <div className="foot1">
          <h4>CONTACT US : </h4>
          <p>GOVIND CHOUHAN : 9873951727</p>
          <a href="#">govindengineering@yahoo.com</a>
        </div>
        <div className="foot1">
          <h4>Govind Engineering</h4>
        </div>
      </div> */}
    </StyledHome>
  );
};

export default Home;
