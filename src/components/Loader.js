import React from "react";
import "../styles/Loader.css"; // Import the loader styles
import PropTypes from "prop-types";
import loaderGif from "../assets/loader.gif";
import { CONSTANTS } from "../constants/constants";

const Loader = ({message}) => {
    return (
        <div className="loader-overlay">
            <div className="loader">
                <img src={loaderGif} alt="Loading..." />
                <div>
                    <strong>
                        {message ? message : CONSTANTS.fallbackLoaderMessage}
                    </strong>
                </div>
            </div>
        </div>
    );
}

Loader.propTypes = { 
  message: PropTypes.string
};


export default Loader;
