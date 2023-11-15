const router = require('express').Router();

// all of these user related methods are imported from the user-controller
// methods are defined in the user-controller and will use the /api/users/... path
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriendById
} = require('../../controllers/user-controller');

// /api/users
// get all users and create a user
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:userId
// get one user, update one user, and delete one user
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

// /api/users/:userId/friends/:friendId
// add a friend and remove a friend
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriendById);

module.exports = router;