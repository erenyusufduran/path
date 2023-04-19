import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

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

export class User {
  public events: Eventing = new Eventing(); // we dont need any interface
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
