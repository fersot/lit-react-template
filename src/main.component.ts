import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import { TailwindElement } from "./shared/tailwind.element";

import style from "./main.component.scss?inline";

@customElement("my-element")
export class TestComponent extends TailwindElement(style) {
  @property({ type: String })
  name?: string = "World";

  @state() private reactRoot: ReactDOM.Root | null = null;

  protected render() {
    return html`
      <div id="react-root"></div>
    `;
  }

  firstUpdated() {
    const container = this.shadowRoot?.querySelector('#react-root');
    if (container) {
      this.reactRoot = ReactDOM.createRoot(container);
      this.renderReactComponent();
    }
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('message')) {
      this.renderReactComponent();
    }
  }

  renderReactComponent() {
    this.reactRoot?.render(React.createElement(App, { message: this.name }));
  }
}
