import express from "express";
import {
  MovieAlter,
  MovieCreate,
  MovieDetails,
  MovieIndex,
  MoviePop,
} from "../controllers/movies.controller.js";

const movieRoute = express.Router();

//MVC -> Module View Controller

//Creating
movieRoute.post("/", MovieCreate);

//Reading
movieRoute.get("/", MovieIndex);

//MovieDeatails

movieRoute.get("/:id", MovieDetails);

// Updating
movieRoute.put("/:id", MovieAlter);

//Deleting
movieRoute.delete("/:id", MoviePop);

export default movieRoute;
