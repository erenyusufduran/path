import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

/*
 *  HOW TO RE-INTEGRATE EVENTS?
 *  - Option #1
 *    - Accept dependencies as second constructor argument.
 *  - Option #2
 *    - Only accept dependencies into contstructor
 *     - Define a static class method to preconfigure
 *      - User and assign properties afterwards
 *  - Option #3
 *    - Only accept properties into constructor
 *      - Hard code dependencies as class properties
 */
const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes<UserProps>(attrs), new Eventing(), new ApiSync<UserProps>(rootUrl));
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json));
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
