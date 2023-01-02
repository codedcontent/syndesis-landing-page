const serverEnv = import.meta.env.MODE;
console.log(serverEnv);

const constants = {
  serverUrl:
    serverEnv === "development"
      ? import.meta.env.VITE_LOCAL_SERVER_URL
      : import.meta.env.VITE_LIVE_SERVER_URL,
};

export default constants;
