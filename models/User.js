const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is Required",
    },

    email: {
      type: String,
      unique: true,
      required: "Username is Required",
      match: [/.+@.+\..+/],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//friendCount retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
