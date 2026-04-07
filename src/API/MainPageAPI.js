import AxiosClient from "../Service/AxiosClient";

const MainPageAPI = {
  getProjects: () => {
    return AxiosClient.get("/project");
  },
};

export default MainPageAPI;