const { Schema, Types, model } = require('mongoose');

// reaction schema
const reactionSchema = new Schema(
    {
        reactionId: { // set custom id to avoid confusion with parent thought's _id field
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
            required: [true, 'Username is required!']
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
    // allows for virtuals and getters
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    },
);
// create the Reaction model using the reactionSchema
// const Reaction = model('Reaction', reactionSchema);
// export the Reaction model and the reactionSchema
module.exports = { reactionSchema };