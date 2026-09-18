const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            default: ""
        },

        filename: {
            type: String,
            required: true
        },

        originalName: {
            type: String,
            required: true
        },

        filePath: {
            type: String,
            required: true
        },

        fileSize: {
            type: Number
        },

        mimeType: {
            type: String
        },

        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Document", documentSchema);