import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";
/*
 * Option #1
 * Sync gets function arguments
 *
 * Option #2
 * Sync expect arguments that satisfy interfaces 'Serialize' and 'Deserialize'
 *
 *  Serialize - Convert data from an object
 * into some saveable format (json)
 *  Deserialize - Put data on an object
 * using previously saved data (json)
 *
 * Option #3
 * Sync is generic class to customize the type of 'data'
 * coming into save.
 */

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
