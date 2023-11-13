const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: [true, 'Reaction is required!'],
            minLength: [1, 'Reaction must be at least 1 character long!'],
            maxLength: [280, 'Reaction must be less than 280 characters!']
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use getter method to format timestamp on query
            get: function (createdAt) {
                return new Date(createdAt).toLocaleString();
            }
        }
    },
    // allows for virtuals
    {
        toJSON: {
            getters: true,
        },
        id: false

    },
);

module.exports = reactionSchema;