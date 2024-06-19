const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "devit-tech-web-site",
  keyFilename: "./devit-tech-web-site-4f392cb2c8b3.json",
});

const uploadToFirebaseStorage = async (filepath, fileName) => {
  try {
    const gcs = storage.bucket("gs://ix-blog-app");
    const storagepath = `ix-blog-app/${fileName}`;

    const result = await gcs.upload(filepath, {
      destination: storagepath,
      public: true,
      metadata: {
        contentType: "application/plain", //application/csv for excel or csv file upload
      },
    });
    return result[0].metadata.mediaLink;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = {
  uploadToFirebaseStorage,
};
