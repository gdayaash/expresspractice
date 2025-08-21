import { model, Schema } from "mongoose";

//Write the Schema

const schema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  year: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
  },
});

//Models

const Movie = model("Movie", schema);

export default Movie;
