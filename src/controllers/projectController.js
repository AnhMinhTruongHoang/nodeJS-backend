const {
  createProject,
  getProject,
  deleteProject,
} = require("../services/productService");

module.exports = {
  postCreateProject: async (req, res) => {
    let result = await createProject(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  /////////////// get all
  getAllProject: async (req, res) => {
    let result = await getProject(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  /////////////////////// delete project

  deleteAProject: async (req, res) => {
    let result = await deleteProject(req.body.id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  ///////////////// update project

  updateAProject: async (req, res) => {
    let result = await deleteProject(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
