import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b343bdd47f3c439ebcc4344845358789",
  },
});
