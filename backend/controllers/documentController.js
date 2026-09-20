const fs = require("fs");
const path = require("path");
const Document = require("../models/Document");

const uploadDocument = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a document"
            });
        }

        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Document title is required"
            });
        }

        const document = await Document.create({
            title,
            description: description || "",

            filename: req.file.filename,

            originalName: req.file.originalname,

            filePath: `/uploads/${req.file.filename}`,

            fileSize: req.file.size,

            mimeType: req.file.mimetype,

            uploadedBy: req.user.userId
        });

        res.status(201).json({
            message: "Document uploaded successfully",
            document
        });
    } catch (error) {
        res.status(500).json({
            message: "Document upload failed",
            error: error.message
        });
    }
};

const getDocuments = async (req, res) => {
    try {
        const documents = await Document.find({
            uploadedBy: req.user.userId
        })
            .sort({
                createdAt: -1
            });

        res.json({
            count: documents.length,
            documents
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch documents",
            error: error.message
        });
    }
};

const getDocumentById = async (req, res) => {
    try {
        const document = await Document.findOne({
            _id: req.params.id,
            uploadedBy: req.user.userId
        });

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        res.json(document);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch document",
            error: error.message
        });
    }
};

const deleteDocument = async (req, res) => {
    try {
        const document = await Document.findOne({
            _id: req.params.id,
            uploadedBy: req.user.userId
        });

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        const filePath = path.join(
            __dirname,
            "..",
            document.filePath
        );

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await Document.deleteOne({
            _id: document._id
        });

        res.json({
            message: "Document deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete document",
            error: error.message
        });
    }
};
const downloadDocument = async (req, res) => {
    try {
        const document = await Document.findOne({
            _id: req.params.id,
            uploadedBy: req.user.userId
        });

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        res.download(
            path.join(__dirname, "..", document.filePath),
            document.originalName
        );
    } catch (error) {
        res.status(500).json({
            message: "Failed to download document",
            error: error.message
        });
    }
};
module.exports = {
    uploadDocument,
    getDocuments,
    getDocumentById,
    deleteDocument,
    downloadDocument
};