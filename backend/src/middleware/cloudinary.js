const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer-Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: "captain_registration",
            allowed_formats: ["jpg", "jpeg", "png"],
            public_id: `${file.fieldname}-${Date.now()}`,
        };
    },
});

const upload = multer({ storage: storage });

const multiUpload = upload.fields([
    { name: "license_image", maxCount: 1 },
    { name: "vehicle_image", maxCount: 1 },
    { name: "driver_image", maxCount: 1 },
    { name: "rc_book_image", maxCount: 1 },
])

module.exports = multiUpload;