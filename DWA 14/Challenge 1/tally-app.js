// import {html, css, LitElement} from 'lit';
import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class TallyApp extends LitElement {
  static styles = css`

    :host {
      box-sizing: border-box;
      display: block;
      border: 2px solid black;
      background-color: #31c48d;
      height: 100vh;
    }

    h1 {
      text-align: center;
      margin-top: 100px;
    }

    p {
      text-align: center;
    }

    .count {
      text-align: center;
    }

    .state-message {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      padding: 10px;
      display: none;
    }

    .state-message.show {
      display: block;
    }

    .footer {
      text-align: center;
      margin-top: 200px;
    }
    .count {
    font-size: 10vh;
}
  `;

  constructor() {
    super();
    this.count = 0;
    this.minCount = -15; // Minimum count
    this.maxCount = 15; // Maximum count
    this.state = "Normal"; // Initial state
    this.resetButtonDisabled = true; // Initially, disable the "Reset" button
  }

  render() {
    let stateMessage = "";
    let stateMessageStyle = "";
    let stateMessageClass = "";

    if (this.state === "Minimum Reached") {
      stateMessage = "Minimum count reached!";
      stateMessageStyle = "background-color: yellow;";
      stateMessageClass = "show";
    } else if (this.state === "Maximum Reached") {
      stateMessage = "Maximum count reached!";
      stateMessageStyle = "background-color: red;";
      stateMessageClass = "show";
    } else if (this.state === "Reset") {
      stateMessage = "Count has been reset!";
      stateMessageStyle = "background-color: green;";
      stateMessageClass = "show";
    }

    return html`
      <h1>Tally App</h1>
      <p class="count">${this.count}</p>
      <p>State: ${this.state}</p>
      <div
        class="state-message ${stateMessageClass}"
        style="${stateMessageStyle}"
      >
        ${stateMessage}
      </div>

      <div class="count">
        <button
          @click="${this.increment}"
          ?disabled="${this.state === "Maximum Reached"}"
        >
          Increment
        </button>
        <button
          @click="${this.decrement}"
          ?disabled="${this.state === "Minimum Reached"}"
        >
          Decrement
        </button>
        <button @click="${this.reset}" ?disabled="${this.resetButtonDisabled}">
          Reset
        </button>
      </div>

      <footer class="footer">
        Inspired by
        <a class="footer_link" href="https://tallycount.app/"> Tally count </a>.
        Note that this is merely a student practice project for learning
        JavaScript.
      </footer>
    `;
  }

  increment() {
    if (this.count < this.maxCount) {
      this.count++;
      this.state = this.count === this.maxCount ? "Maximum Reached" : "Normal";
      this.enableResetButton();
      this.requestUpdate();
    } else {
      this.state = "Maximum Reached";
    }
  }

  decrement() {
    if (this.count > this.minCount) {
      this.count--;
      this.state = this.count === this.minCount ? "Minimum Reached" : "Normal";
      this.enableResetButton();
      this.requestUpdate();
    } else {
      this.state = "Minimum Reached";
    }
  }

  reset() {
    this.count = 0;
    this.state = "Reset";
    this.requestUpdate();
    this.disableResetButton();
  }

  enableResetButton() {
    this.resetButtonDisabled = false;
  }

  disableResetButton() {
    this.resetButtonDisabled = true;
  }
}

customElements.define("tally-app", TallyApp);
