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
            //https://www.geeksforgeeks.org/mongoose-schematypes-getters/
            //https://chat.openai.com/c/e1023eb5-3b15-44f4-af2c-64df6894f9df
            get: function (createdAt) {
                return new Date(createdAt).toLocaleString();
            }
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