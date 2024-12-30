const path = require("path");
const fs = require("fs");

const uploadSingleFile = async (fileObject) => {
  try {
    // Define upload directory
    let uploadPath = path.resolve(__dirname, "../public/images/upload");

    // Ensure the upload directory exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    // Extract file extension and base name
    let exName = path.extname(fileObject.name);
    let baseName = path.basename(fileObject.name, exName);

    // Create unique file name
    let finalName = `${baseName}-${Date.now()}${exName}`;
    let finalPath = path.join(uploadPath, finalName);

    // Move the file to the target directory
    await fileObject.mv(finalPath);

    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    console.error("File upload error:", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

const uploadMultipleFiles = async (filesArr) => {
  try {
    // Define upload directory
    let uploadPath = path.resolve(__dirname, "../public/images/upload");

    // Ensure the upload directory exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    let resultArr = [];
    let countSuccess = 0;

    // Process each file in the array
    for (let i = 0; i < filesArr.length; i++) {
      try {
        // Extract file extension and base name
        let exName = path.extname(filesArr[i].name);
        let baseName = path.basename(filesArr[i].name, exName);

        // Create unique file name
        let finalName = `${baseName}-${Date.now()}${exName}`;
        let finalPath = path.join(uploadPath, finalName);

        // Move the file to the target directory
        await filesArr[i].mv(finalPath);

        // Log success for the file
        resultArr.push({
          status: "success",
          path: finalName,
          fileName: filesArr[i].name,
          error: null,
        });
        countSuccess++;
      } catch (err) {
        // Log failure for the file
        resultArr.push({
          status: "failed",
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(err),
        });
      }
    }

    return {
      countSuccess: countSuccess,
      detail: resultArr,
    };
  } catch (error) {
    console.error("Multiple file upload error:", error);
    return {
      countSuccess: 0,
      detail: [],
      error: JSON.stringify(error),
    };
  }
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
