import axios from "axios";

const base_url = "http://31.220.60.150:8001";

async function retrieve_trail_content(path) {
  var response;
  axios.get(`${base_url}/${path}`).then((response = res => res));
  return response ? await response.data : {};
}

export default retrieve_trail_content;
