require("dotenv").config();

const useEnvironment = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  return { API_URL };
};

export default useEnvironment;
