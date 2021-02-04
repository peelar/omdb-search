import axios from "../api/axios";

const fetcher = (phrase: string) =>
  axios.get("", { params: { s: phrase } }).then((res) => res.data);

export default fetcher;
