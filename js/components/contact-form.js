import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

const formspreeAction = "https://formspree.io/f/mgebggab";

const translations = {
  pl: {
    name: "Imię i nazwisko",
    email: "E-mail",
    message: "Wiadomość",
    submit: "Wyślij",
    enter_your_name: "Wprowadź imię i nazwisko",
    wrong_email: "Błędny adres email",
    enter_message: "Wprowadź treść wiadomości",
    message_was_sent: "Wiadomość została wysłana.",
    problem_with_sending: "Wystąpił problem z wysłaniem wiadomości.",
  },
  eng: {
    name: "Name",
    email: "E-mail",
    message: "Message",
    submit: "Send",
    enter_your_name: "Enter your name",
    wrong_email: "Wrong e-mail address",
    enter_message: "Enter message",
    message_was_sent: "Message was sent.",
    problem_with_sending: "There was a problem sending the message.",
  },
};

export const validateEmail = (email) => {
  const expression =
    /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  return expression.test(String(email).toLowerCase());
};

export class ContactForm extends LitElement {
  static properties = {
    isNotification: { state: true },
    nameErrorKey: { state: true },
    emailErrorKey: { state: true },
    messageErrorKey: { state: true },
    lang: {},
  };

  static styles = css`
    :host {
      font-size: var(--form-font-size, 1rem);
      display: block;
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    }

    form {
      /* padding: 2rem; */
      /* border-radius: 6px;
      box-shadow: var(--shadow-level-1); */
    }
    notification-component {
      width: 100%;
      margin: 2rem 0 2rem 0;
    }
    label,
    .error {
      font-size: 1rem;
      padding: 0.5rem;
    }
    label {
      margin-top: 2rem;
    }
    label,
    input,
    textarea {
      display: block;
      background-color: inherit;
      width: calc(100% - 2rem);
    }

    input,
    textarea,
    button {
      font-size: inherit;
      font-family: inherit;
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      box-shadow: none;
      background-color: var(--primary-bg);
    }
    svg {
      margin-left: 1rem;
      margin-bottom: -0.2rem;
      height: var(--form-font-size, 1rem);
    }
    button {
      display: block;
      width: 15rem;
      margin: 0 auto 2rem;
      text-transform: uppercase;
      color: var(--primary-color);
    }
    button:hover {
      cursor: pointer;
      border-color: #b5b5b5;
      color: var(--border-hover);
    }
    input:focus,
    textarea:focus,
    button:focus {
      outline: none;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    }
    span.error {
      display: block;
      color: red;
      margin-bottom: 2rem;
    }
  `;
  form;
  name;
  email;
  message;
  notificationMessage;
  notificationType;
  notificationTime;

  constructor() {
    super();
    this.isNotification = false;
    this.nameErrorKey = null;
    this.emailErrorKey = null;
    this.messageErrorKey = null;
    this.addEventListener("close-notification", (ev) => {
      this.isNotification = ev.detail.isNotification;
    });
    this.lang = this.lang || "pl";
    this.nameInputCallback = this.nameInputCallback.bind(this);
    this.emailInputCallback = this.emailInputCallback.bind(this);
    this.messageInputCallback = this.messageInputCallback.bind(this);
    this.translate = this.translate.bind(this);
  }

  translate(key) {
    if (!key) return null;
    return translations[this.lang][key]
      ? translations[this.lang][key]
      : key.replace("_", " ");
  }

  formatNotificationMessage(data) {
    if (!Array.isArray(data)) {
      return data;
    }
    return data.map((el) => html`${el}<br />`);
  }

  async validateAndSubmit(ev) {
    ev.preventDefault();
    let errors = 0;
    const data = new FormData(this.form);
    const protection = data.get("protection");
    if (!this.name.value.length) {
      errors++;
      this.nameErrorKey = "enter_your_name";
    }
    if (!validateEmail(this.email.value)) {
      errors++;
      this.emailErrorKey = "wrong_email";
    }
    if (!this.message.value.length) {
      errors++;
      this.messageErrorKey = "enter_message";
    }
    if (protection.length) {
      errors++;
    }
    if (errors) return;

    const response = await fetch(this.form.action, {
      method: this.form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.status === 200) {
      this.notificationType = "success";
      this.notificationMessage = this.translate("message_was_sent");
      this.isNotification = true;
      this.notificationTime = 2000;
      this.form.reset();
    } else {
      // const responseData = await response.json();
      // this.notificationMessage = responseData.error;
      this.notificationType = "error";
      this.notificationMessage = this.translate("problem_with_sending");
      this.isNotification = true;
    }
  }

  nameInputCallback() {
    const isValid = Boolean(this.name.value.length);
    if (isValid) {
      this.nameErrorKey = null;
    }
  }
  emailInputCallback() {
    const isValid =
      this.email.value.length === 0 || validateEmail(this.email.value);
    if (isValid) {
      this.emailErrorKey = null;
    }
  }
  messageInputCallback() {
    const isValid = Boolean(this.message.value.length);
    if (isValid) {
      this.messageErrorKey = null;
    }
  }
  updated() {
    this.form = this.shadowRoot.querySelector("form");
    this.name = this.shadowRoot.querySelector("input[name='name']");
    this.email = this.shadowRoot.querySelector("input[name='email']");
    this.message = this.shadowRoot.querySelector("textarea");

    this.name.addEventListener("input", this.nameInputCallback);
    this.email.addEventListener("input", this.emailInputCallback);
    this.message.addEventListener("input", this.messageInputCallback);
  }

  render() {
    const t = this.translate;
    return html`
      <notification-component
        .visible=${this.isNotification}
        type=${this.notificationType}
        time=${this.notificationTime}
        >${this.notificationMessage}
      </notification-component>
      
      <form method="post" @submit=${
        this.validateAndSubmit
      } autocomplete="off" action=${formspreeAction} >
        
        <label for "name"> ${t("name")} </label>
        <input id="name" name="name" type="text"  />
        <span class="error">${t(this.nameErrorKey)}</span>
  
        <label for "email"> ${t("email")} </label>
        <input id="email" name="email" type="text"  />
        <span class="error">${t(this.emailErrorKey)}</span>
  
        <label for "message"> ${t("message")}</label>
        <textarea id="message" name="message" rows="5" ></textarea>
        <span class="error">${t(this.messageErrorKey)}</span>
  
        <input name="protection" type="text" style="display: none" />
        
        <button type="submit">
          ${t("submit")}
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
          <path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"/> 
        </svg>
        </button>
      </form>
    `;
  }
}

customElements.define("contact-form", ContactForm);
