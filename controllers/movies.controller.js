//Read
export const MovieIndex = (req, res) => {
  res.send("Get em All");
};

//Create
export const MovieCreate = (req, res) => {
  res.send("Create a Movie");
};

//Update
export const MovieAlter = (req, res) => {
  res.send("Update Movie");
};

//delete
export const MoviePop = (req, res) => {
  res.send("Movie Removed");
};
