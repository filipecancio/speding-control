import request from "superagent";

const base_url = "http://31.220.60.150:8001/";

async function retrieve_trail_content() {
  try {
    const res = await request.get(`${base_url}`);
    console.log(res.body);
    return res.body;
  } catch (err) {
    console.log(err.message);
  }
}

export default retrieve_trail_content;
