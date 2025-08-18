import express from "express";
import {
  MovieAlter,
  MovieCreate,
  MovieIndex,
  MoviePop,
} from "../controllers/movies.controller.js";

const movieRoute = express.Router();

//MVC -> Module View Controller

//Creating
movieRoute.post("/", MovieCreate);

//Reading
movieRoute.get("/", MovieIndex);

// Updating
movieRoute.put("/:id", MovieAlter);

//Deleting
movieRoute.delete("/:id", MoviePop);

export default movieRoute;
