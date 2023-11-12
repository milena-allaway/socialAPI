//https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
//https://mongoosejs.com/docs/schematypes.html
const { Schema, model } = require('mongoose');

// user schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: [true, 'Username already taken, please try again!'],
            required: [true, 'Username is required!'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email address is required'],
            unique: [true, 'Email address already in use!'],
            match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    // allows for virtuals
    {
        toJSON: {
            virtuals: true,
        },
        id: false

    }
);

// virtual to count friends, count is based on the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// create the User model using the userSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;