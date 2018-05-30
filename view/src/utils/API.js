import axios from "axios";

export default {
 
  getProjects: function(userId) {
    return axios.get("/api/project/user/" + userId);
  },

  getProject: function(id) {
    return axios.get("/api/project/" + id);
  },
  
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },

  updateProject: function(id, projectData) {
    return axios.put("/api/project/" + id);
  },

  saveProject: function(projectData) {
    return axios.post("/api/project", projectData);
  }
 
};
