import React from "react";
import "./style.css";

function Projects() {
    return (
        <div className="container3">
            <h1 className="theDistance">Projects</h1>
            <p className="theDistance">I am always building as this art is limitless and ever-growing but here are a few of my completer projects.</p>
            <div className="holder1 topSet">
            <div className="imgHolder">
                <img alt="weatherAPI" src="./images/weatherAPI.png" width="550px" height="350px" />
            <a href="https://drewbo51.github.io/WeatherAPI_Challenge8/">https://drewbo51.github.io/WeatherAPI_Challenge8/</a>
            </div>
            <div className="imgHolder holder2">
            <img alt="codingQuiz" src="./images/codingQuiz.png" width="550px" height="350px" />
            <a href="https://drewbo51.github.io/CodingQuizChallenge6/">https://drewbo51.github.io/CodingQuizChallenge6/</a>
            </div>

            </div><div className="holder1 bottomSet">
            <div className="imgHolder">
                <img alt="marvel" src="./images/marvel.png" width="550px" height="350px" />
            <a href="https://drewbo51.github.io/Project1-MarvelTicTacToe/">https://drewbo51.github.io/Project1-MarvelTicTacToe/</a>
            </div>
            <div className="imgHolder holder2">
            <img alt="passwordGenerator" src="./images/passwordGenerator.png" width="550px" height="350px" />
            <a href="https://drewbo51.github.io/Challenge5-PasswordGenerator/">https://drewbo51.github.io/Challenge5-PasswordGenerator/</a>
            </div>
            </div>
        </div>
    )
}

export default Projects;