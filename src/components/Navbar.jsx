import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("Nature");
            navigate("/");
          }}
        >
          Nature
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("Travel");
            navigate("/");
          }}
        >
          Travel
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("City");
            navigate("/");
          }}
        >
          City
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() => {
            setSearch("Cars");
            navigate("/");
          }}
        >
          Cars
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("Fashion");
            navigate("/");
          }}
        >
          Fashion
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("Animal");
            navigate("/");
          }}
        >
          Animal
        </div>
        <div
          className="button btn btn-outline-dark text-light mx-3"
          onClick={() => {
            setSearch("Technology");
            navigate("/");
          }}
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("Business and Finance");
            navigate("/");
          }}
        >
          Business and Finance
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("Tokyo");
            navigate("/");
          }}
        >
          Tokyo
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("Dubai");
            navigate("/");
          }}
        >
          Dubai
        </div>
        {location.pathname === "/saved" ? (
          <div
            className="button btn btn-outline-warning mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-outline-warning mx-3"
            onClick={() => navigate("/saved")}
          >
            Save
          </div>
        )}
      </div>

      <div className="conatiner justify-content-center align-items-center d-flex">
        <div className="mb-3 justify-content-center align-items-center my-4">
          <input
            type="email"
            className="form-control bg-dark text-light"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ width: "800px" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
