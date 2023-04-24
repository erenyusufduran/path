import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#set-age": this.onSetAgeClick,
      "click:#set-name": this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    } else {
      throw new Error("There is no input element");
    }
  };

  // normal func issue, do it with arrow funcs.
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get("name")}</div>
        <div>User Age: ${this.model.get("age")}</div>
        <input />
        <button id="set-name">Change Name</button>
        <button id="set-age">Set Random Age</button>
      </div>
    `;
  }
}
