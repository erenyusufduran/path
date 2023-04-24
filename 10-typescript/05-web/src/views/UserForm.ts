import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#set-age": this.onSetAgeClick,
      "click:#set-name": this.onSetNameClick,
      "click:#save-model": this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

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
        <input placeholder="${this.model.get("name")}"/>
        <button id="set-name">Change Name</button>
        <button id="set-age">Set Random Age</button>
        <button id="save-model">Save User</button>
      </div>
    `;
  }
}
