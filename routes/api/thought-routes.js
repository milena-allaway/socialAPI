const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    removeReactionById
} = require('../../controllers/thought-controller');

module.exports = router;