import { Company } from "./models/Company";
import { User } from "./models/User";
import { CustomMap } from "./models/CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("#map");

customMap.addMarker(user);
customMap.addMarker(company);
