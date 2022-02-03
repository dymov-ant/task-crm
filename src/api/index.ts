import axios from "axios";

export const api = axios.create({
  baseURL: `http://intravision-task.test01.intravision.ru/api/${process.env.REACT_APP_TENANTGUID}`,
});
