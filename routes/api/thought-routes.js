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

// /api/thought
// get all thoughts and create a thought
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thought/:thoughtId
// get one thought, update one thought, and delete one thought
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

// /api/thought/:thoughtId/reactions
// add a reaction
router.route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thought/:thoughtId/reactions/:reactionId
// remove a reaction
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReactionById);

module.exports = router;