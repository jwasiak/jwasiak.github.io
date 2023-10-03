import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class StartEng extends LitElement {
  static properties = {
    lang: {},
  };

  static styles = css`
    :host {
      font-size: var(--page-font-size, 1rem);
      display: block;
    }
    ul {
      list-style: square;
    }
    li {
      line-height: 1.8;
    }
  `;

  render() {
    return this.lang !== "eng"
      ? null
      : html`
          <div>
            <p>
              Hello, my name is Jarosław Wasiak. I’m a web developer based in
              Poland, working mainly remotely.
            </p>
            <p>
              I have expertise in managing database systems, and I rely on
              mature Open Source solutions to ensure high quality while keeping
              costs manageable.
              <br />
              My preferred technology stack includes React (Typescript) for the
              frontend and either NodeJS or PHP for the backend. I frequently
              use PostgreSQL for database management, but I am open to other
              options as well. My technical and economic background helps me
              communicate effectively with end-users, enabling me to better
              understand and address their needs.
            </p>
            <p>
              Recently I worked as a front-end developer for RST Software
              Masters (Wrocław, Poland) in the development of software for
              creating administration panels (AdminJS) for the back office.
            </p>
            <p>
              I have experience working at the Angelius Provita Medical Center
              in Katowice, Poland. My role there involved developing and
              co-authoring the concept for an IT support system for outpatient
              clinics called Orion, as well as creating a module to support
              clinics in vitro. The original application was written in PHP as a
              monolithic system, but additional modules were later added using
              VueJS as a single page application.
            </p>
            <p>The system covers the following areas:</p>
            <ul>
              <li>Keeping records of patients,</li>
              <li>Managing documentation related to medical procedures</li>
              <li>Registering visits to the clinic</li>
              <li>Organizing the work schedule of medical staff</li>
              <li>Managing the waiting room queue system</li>
              <li>
                Providing outpatient clinic services including registration,
                medical data and information about procedures
              </li>
              <li>
                In vitro laboratory services including material management and
                genetic procedures
              </li>
              <li>Generating medical records</li>
              <li>
                Diagnostic laboratory services including referrals and
                presenting results in HL7 CDA format
              </li>
              <li>
                Exchanging data with the Cobas laboratory diagnostic device
                Roche
              </li>
              <li>
                Integrating with the Diagnostics IT system for sending orders
                and receiving results
              </li>
              <li>Settling medical visits and calculating commissions</li>
              <li>
                Keeping records of receipts, invoices, protocols, VAT and CIT
                registers
              </li>
              <li>
                Handling fiscal printers, cash payments, payments by card,
                transfers, loans and prepayments
              </li>
              <li>Handling the debt collection process</li>
            </ul>

            <p>
              Prior to my career as a developer, I worked as a consultant and
              ERP systems analyst. I have experience implementing various
              financial systems such as PeopleSoft (Oracle), SAP Business One,
              and systems from Polish suppliers Comarch and Impuls BPSC.
              <br />
              The skills and knowledge I gained during these implementations
              continue to benefit me today as I am able to analyze customer
              needs and effectively communicate them in the language of the IT
              industry.
            </p>

            <p>
              If you need my skills and competencies, feel free to contact me.
              I’m also willing to tackle new challenges and provide support for
              legacy solutions.
            </p>
          </div>
        `;
  }
}

customElements.define("start-eng", StartEng);
