import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

const translations = {
  pl: {
    contact: "Kontakt",
    phone: "tel.",
  },
  eng: {
    contact: "Contact",
    phone: "mobile",
  },
};

export class ContactDetails extends LitElement {
  static properties = {
    lang: {},
  };

  static styles = css`
    :host {
      font-size: var(--page-font-size, 1rem);
      display: block;
      margin-bottom: 2rem;
    }
    h2 {
      padding: 0.5rem;
      font-weight: 400;
      text-transform: uppercase;
      border: 1px solid var(--border-color);
      font-size: var(--page-font-size, 1rem);
    }
    email-link,
    phone-link {
      font-size: 1.4rem;
      color: var(--primary-color);
      line-height: 1.8;
    }
  `;

  constructor() {
    super();
    this.lang = this.lang || "pl";
    this.translate = this.translate.bind(this);
  }

  translate(key) {
    if (!key) return null;
    return translations[this.lang][key]
      ? translations[this.lang][key]
      : key.replace("_", " ");
  }

  render() {
    const t = this.translate;
    return html`
      <h2>${t("contact")}</h2>
      <email-link>wasiak.it@icloud.com</email-link><br />
      <phone-link>+48 880 440 631</phone-link>
    `;
  }
}

customElements.define("contact-details", ContactDetails);
