import React, { useState } from "react";

function WeatherPresentation(props) {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row row-cols-auto mt-3 justify-content-center">
          {/* For Weather Information */}
          <div className="col my-5 mx-auto pt-4 px-4 px-lg-5 shadow-lg mb-5 bg-light rounded">
            <form onSubmit={props.handleSubmit} action="#">
              <div className="my-3 text-center">
                <p className="fw-bolder">Weather Info</p>
                <label htmlFor="cityID" className="form-label">
                  Enter City :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cityID"
                  placeholder="City Name"
                  onChange={(e) => setCity(e.target.value)}
                  //$ To Bind the city to the input field
                  value={props.city}
                  onKeyPress={props.getWeather}
                />
              </div>
              <button
                type="submit"
                className="btn btn-info my-5 d-flex justify-content-center d-md-table mx-auto" //#    To Center Button in all View Port
              >
                Submit
              </button>
            </form>
            <p>Entered City : {props.userInput}</p>
            {/* Output */}
            {typeof weatherData.main === "undefined" ? (
              <div>
                <p>Enter a city to get the weather of </p>
              </div>
            ) : (
              <div>
                <p>City : {weatherData.name}</p>
                <p>Temp : {Math.round(weatherData.main.temp - 273.15)} *C</p>
                <p>Sky : {weatherData.weather[0].main}</p>
                <p>Lon : {weatherData.coord.lon}</p>
                <p>Lat : {weatherData.coord.lat}</p>
                <p>Country : {weatherData.sys.country}</p>
              </div>
            )}
            {/* Ternary Operator condition for BAD CITY INPUT */}
            {weatherData.cod === "404" ? <p>City not found</p> : <></>}
            {/* OUtput End */}
          </div>
          {/* For Area Information */}
          <div className="col mx-auto my-5 pt-4 px-4 px-lg-5 shadow-lg mb-5 bg-light rounded">
            <form onSubmit={props.handleSubmit} action="/login">
              <div className="my-3 text-center">
                <p className="fw-bolder">Area Info</p>
                <label htmlFor="cityID" className="form-label">
                  Country Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cityID"
                  value={props.userInput}
                  placeholder="City Name"
                  onChange={props.handleCity}
                />
              </div>
              <div className="my-3 text-center">
                <label htmlFor="cityID" className="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cityID"
                  value={props.userInput}
                  placeholder="City Name"
                  onChange={props.handleCity}
                />
              </div>
              <button
                type="submit"
                className="btn btn-info my-5 d-flex justify-content-center d-md-table mx-auto" //#    To Center Button in all View Port
              >
                Submit
              </button>
            </form>
            <p>Entered City : {props.userInput}</p>
          </div>
        </div>
      </div>
    </>
  );
}

// WeatherPresentation.propTypes = {};

export default WeatherPresentation;
