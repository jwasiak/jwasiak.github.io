import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

const menu = {
  pl: [
    {
      href: "#",
      text: "J. Wasiak",
    },
  ],
  en: [
    {
      href: "#",
      text: "J. Wasiak",
    },
  ],
};

export class PageComponent extends LitElement {
  static properties = {
    lang: { state: true },
    // isNotification: { state: false },
  };
  // notificationMessage;

  static styles = css`
    :host {
      font-size: var(--page-font-size, 1rem);
      display: block;
      color: var(--primary-color);
      background-color: var(--primary-bg);
      min-height: 100vh;
      margin: 0 auto;
      padding-top: 60px;
      max-width: 960px;
      padding: 60px 2rem 0 2rem;
    }
    /* notification-component {
      position: absolute;
      top: 10px;
      right: 10px;
      max-width: 500px;
    } */
  `;

  constructor() {
    super();
    this.lang = "en";
    // this.isModal = false;
    // this.isNotification = false;
    this.addEventListener("change-language", (ev) => {
      this.lang = ev.detail.lang;
    });
    // this.addEventListener("close-notification", (ev) => {
    //   this.isNotification = ev.detail.isNotification;
    // });
  }

  render() {
    return html`
      <fixed-topbar
        lang=${this.lang}
        menu=${JSON.stringify(menu)}
        home="index.html"
      ></fixed-topbar>
      <start-pl lang=${this.lang}></start-pl>
      <start-en lang=${this.lang}></start-en>
      <contact-form name="#contact" lang=${this.lang}></contact-form>
    `;
  }
}

customElements.define("page-component", PageComponent);
