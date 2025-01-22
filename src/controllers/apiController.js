const User = require("../models/User");
const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/fileService");

const getUserApi = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });

  return res.status(200).json({
    EC: 0,
    data: user,
  });
}; /////////// create logic

const putUpdateUserAPI = async (req, res) => {
  let { name, email, city, userId } = req.body;

  let user = await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );

  return res.status(200).json({
    EC: 0,
    data: user,
  });
}; /////////////// update logic

const deleteUserAPI = async (req, res) => {
  const id = req.body.userId;

  let results = await User.deleteOne({ _id: id });

  return res.status(200).json({
    EC: 0,
    data: results,
  });
}; /////////// delete action

const postUploadSingleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No file uploaded");
  }


  try {
    let result = await uploadSingleFile(req.files.image);
    console.log("result", result);
    return res.status(200).send("File uploaded successfully");
  } catch (error) {
    console.error("File upload error:", error);
    return res.status(500).send("Error uploading file");
  }
}; // upload 1 file

const postUploadMutilFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("no files were uploaded");
  }

  if (Array.isArray(req.files.image)) {
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    return await postUploadSingleFile(req, res);
  }
};



module.exports = {
  getUserApi,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFile,
  postUploadMutilFile,
};
