import Movie from "../models/movies.model.js";
//Read
export const MovieIndex = async (req, res) => {
  // res.send("Get em All");
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create
export const MovieCreate = async (req, res) => {
  // console.log(req.body);

  //Validate Your Data

  const newMovie = new Movie({
    title: req.body.title,
    year: req.body.year,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//Get Movie By id
export const MovieDetails = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: "cannot find movies" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Update the
export const MovieAlter = async (req, res) => {
  try {
    const result = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        year: req.body.year,
        desc: req.body.desc,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  // if (req.body.title != null) {
  //   res.movie.title = req.body.title;
  // }
  // if (req.body.year != null) {
  //   res.movie.year = req.body.year;
  // }
  // if (req.body.desc != null) {
  //   res.movie.desc = req.body.desc;
  // }

  // try {
  //   const updatedMovie = await res.movie.save();
  //   res.json(updatedMovie);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

//delete
export const MoviePop = (req, res) => {
  res.send("Movie Removed");
};
