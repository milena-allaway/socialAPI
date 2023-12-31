const router = require('express').Router();

// all of these thought related methods are imported from the thought-controller
// methods are defined in the thought-controller and will use the /api/thoughts/... path
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    removeReactionById
} = require('../../controllers/thought-controller');

// /api/thoughts
// get all thoughts and create a thought
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughs/:thoughtId
// get one thought, update one thought, and delete one thought
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

// /api/thoughts/:thoughtId/reactions
// add a reaction
router.route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// remove a reaction
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReactionById);

module.exports = router;