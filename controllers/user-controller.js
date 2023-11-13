const { User, Thought } = require('../models');

module.exports = {
    // GET all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET a single user by its _id and populated thought and friend data
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });        
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // POST a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // PUT to update a user by its _id
    //https://mongoosejs.com/docs/api/query.html#Query.prototype.findOneAndUpdate()
    async updateUserById(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                req.body,
                // check that new user is validated and update to new version
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });        
            }
            res.json(user);
        } catch (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).json(err);
            }
            res.status(500).json(err);
        }
    },
    // DELETE to remove user by its _id
    async deleteUserById(req, res) {
        try {
            const user = await User.findOneAndDelete(
                { _id: req.params.userId }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });        
            }
//BONUS remove a user's associated thoughts when deleted
            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'Successfully deleted user and associated thoughts!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};