const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const myUserSchema = new Schema(
  {   // 1st argument -> structure object
    fullName: { type: String },
    username: { type: String },
    encryptedPassword: { type: String }
  },

  {   // 2nd argument -> additional settings (optional)
    timestamps: true
      // timestamps creates two additional fields: "createdAt" & "updatedAt"
  }
);

const UserModel = mongoose.model('User', myUserSchema);
                              //   |
                              // 'User' -> 'users' -> db.users.find()


module.exports = UserModel;
