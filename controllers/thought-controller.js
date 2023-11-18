const { Thought, User } = require('../models');

module.exports = {
    // GET all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET a single thought by its _id
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });        
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // POST a new thought and push the created thought's _id to the associated user's thoughts array field
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // PUT to update a thought by its _id
    async updateThoughtById(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                req.body,
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });        
            }
            res.json(thought);
        } catch (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).json(err);
            }
            res.status(500).json(err);
        }
    },
    // DELETE to remove a thought by its _id and update the associated user model
    async deleteThoughtById(req, res) {
        // try {
        //     const thought = await Thought.findOneAndDelete(
        //         { _id: req.params.thoughtId }
        //     );
        //     if (!thought) {
        //         return res.status(404).json({ message: 'No thought found with this id!' });
        //     }
        //     res.json({ message: `Successfully deleted the thought '${thought.thoughtText}'!` });
        // } catch (err) {
        //     res.status(500).json(err);
        // }
        try {
            const thought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            const user = await User.findOneAndUpdate(
                { username: thought.username },
                { $pull: { thoughts: thought._id } },
                { new: true }
            );
            res.json({ message: `Successfully deleted the thought '${thought.thoughtText}'!`, user });
        } catch (err) {
            res.status(500).json(err);
            
        }
    },
    // POST to add a reaction to a thought by its _id
    async addReaction(req, res) {
        try {
            const reaction = req.body;
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: reaction } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);

        }
    },
    // DELETE to remove a reaction from a thought by its _id
    async removeReactionById(req, res) {
        try{
            const reactionId = req.params.reactionId;

            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: reactionId } } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json({ message: `Successfully deleted the reaction with ID: ${reactionId}`, thought });
        } catch (err) {
            res.status(500).json(err);
        }
    }
};