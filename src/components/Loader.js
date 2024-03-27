import React from "react";
import "../styles/Loader.css"; // Import the loader styles
import PropTypes from "prop-types";
import loaderGif from "../assets/loader.gif";
import { CONSTANTS } from "../constants/constants";

const Loader = ({message,theme}) => {
    return (
        <div className={`loader-overlay ${theme}`}>
            <div className="loader">
                <img src={loaderGif} alt="Loading..." />
                <div className={`loader-text ${theme}`}>
                    <strong>
                        {message ? message : CONSTANTS.fallbackLoaderMessage}
                    </strong>
                </div>
            </div>
        </div>
    );
}

Loader.propTypes = { 
  message: PropTypes.string,
  theme: PropTypes.string.isRequired,
};


Loader.defaultProps = {
    theme: "light"
}

export default Loader;

