import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class EmailLink extends LitElement {
  static properties = {
    mail: { state: true },
  };

  static styles = css`
    :host {
      display: inline;
      font-size: var(--page-font-size, 1rem);
    }
    a {
      color: var(--primary-color);
      text-decoration: none;
    }
    svg {
      fill: var(--primary-color);
      height: 1.6rem;
      margin-bottom: -0.2rem;
    }
  `;

  updated() {
    const slot = this.shadowRoot.querySelector("slot");
    this.mail = slot.assignedNodes()[0].textContent;
  }

  render() {
    return html`
      <a href="mailto: ${this.mail}">
        <svg
          xmlns="https://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"
          />
        </svg>
        <slot></slot>
      </a>
    `;
  }
}

customElements.define("email-link", EmailLink);
