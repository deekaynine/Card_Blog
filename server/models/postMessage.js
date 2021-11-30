import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//likeCount and createAt are objects because of additional information for ex: default: 0

//converting schema to model...

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
