import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

import "./web-link.js";
import "./email-link.js";
import "./phone-link.js";

export class CvHeader extends LitElement {
  static styles = css`
    :host {
      font-size: var(--page-font-size, 1rem);
      display: block;
      margin-bottom: 2rem;
    }
    h1 {
      font-weight: 700;
      font-size: 2rem;
      margin-top: 0;
    }
    web-link,
    email-link,
    phone-link {
      font-size: 1.4rem;
      color: var(--primary-color);
      line-height: 1.8;
    }
  `;

  render() {
    return html` <h1>Jarosław Wasiak - curriculum vitae</h1>
      <web-link>https://it.wasiak.biz</web-link><br />
      <email-link>wasiak.it@icloud.com</email-link><br />
      <phone-link>+48 880 440 631</phone-link>`;
  }
}

customElements.define("cv-header", CvHeader);
