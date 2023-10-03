import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class NotificationComponent extends LitElement {
  static properties = {
    type: {},
    time: { type: Number },
    visible: { type: Boolean },
  };

  static styles = css`
    :host {
      font-size: var(--notification-font-size, 1rem);
      display: block;
      z-index: 150;
    }
    div {
      min-height: 20px;
      min-width: 200px;
      border-radius: 4px;
      position: relative;
      padding: 1.5rem 3rem 1.5rem 1.5rem;
      border: 1px solid var(--border-color);
    }
    div.info {
      background-color: #3e8ed0;
      color: #fff;
    }
    div.success {
      border: 1px solid #48c78e;
      color: #48c78e;
    }
    div.warning {
      background-color: #ffe08a;
      color: rgba(0, 0, 0, 0.7);
    }
    div.error {
      color: #f14668;
      border: 1px solid #f14668;
    }
    div > delete-button {
      right: 0.5rem;
      position: absolute;
      top: 0.5rem;
    }
  `;

  constructor() {
    super();
    this.type = this.type || "info";
    this.time = this.time || 0;
  }

  closeWidget() {
    const event = new CustomEvent("close-notification", {
      bubbles: true,
      composed: true,
      detail: {
        isNotification: false,
      },
    });
    this.dispatchEvent(event);
  }

  render() {
    if (this.visible && this.time) {
      setTimeout(() => {
        this.closeWidget();
      }, this.time);
    }
    return this.visible
      ? html`
          <div class=${this.type}>
            <delete-button @click=${this.closeWidget}></delete-button>
            <slot> </slot>
          </div>
        `
      : null;
  }
}

customElements.define("notification-component", NotificationComponent);
