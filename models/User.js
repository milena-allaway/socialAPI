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
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false

    }
);

// virtual to count friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;