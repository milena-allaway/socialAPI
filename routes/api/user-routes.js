const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriendById
} = require('../../controllers/user-controller');

// /api/user
// get all users and create a user
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/user/:userId
// get one user, update one user, and delete one user
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

// /api/user/:userId/friends/:friendId
// add a friend and remove a friend
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriendById);

module.exports = router;