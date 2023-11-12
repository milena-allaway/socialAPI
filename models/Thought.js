const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

//Thought Schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Thought is required!'],
            minLength: [1, 'Thought must be at least 1 character long!'],
            maxLength: [280, 'Thought must be less than 280 characters!']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use getter method to format timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    // allows for virtuals
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false

    }
);

// virtual to count reactions, count is based on the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

// export the Thought model
module.exports = Thought;