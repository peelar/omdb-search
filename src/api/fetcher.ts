import axios from "../api/axios";

const fetcher = (phrase: string, page: string) =>
  axios.get("", { params: { s: phrase, page } }).then((res) => res.data);

export default fetcher;
