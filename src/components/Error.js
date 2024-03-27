import React from "react";
import "../styles/Error.css"
import errorPageImage from "../assets/Object-Was-Not-Found.jpg";
import PropTypes from "prop-types";
import { CONSTANTS } from "../constants/constants";


const ErrorPage = ({ message }) => {
    return (
        <div className="error-page">
            <div className="error-image-container">
                <img className="error-image" src={errorPageImage} alt="error-page"/>
            </div>
            <div className="error-container">
                <div className="error-container-header">SORRY</div>
                <div className="error-container-message">{message ? message : CONSTANTS.fallbackErrorMessage}</div>
            </div>
        </div>
    );
}

ErrorPage.propTypes = {
    message: PropTypes.array,
};

export default ErrorPage;
