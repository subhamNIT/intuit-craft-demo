import React from "react";
import "../styles/Theme.css"; // Import the loader styles
import { CONSTANTS } from "../constants/constants";
import PropTypes from "prop-types";

const Theme = ({handleThemeChange, theme}) => {
  return (
    <div className="theme-dropdown-container">
        <span data-testid="theme-dropdown" className={`theme-dropdown ${theme}`}>
            <span><strong>Mode:</strong> </span>
            <select 
                className="theme-selector" 
                value={theme} 
                onChange={e => handleThemeChange(e)}
                aria-label="Select Theme"
                tabIndex={0}
            >
                {CONSTANTS.themes.map((theme) => {
                    return (
                        <option key={theme.name} value={theme.value}>{theme.name}</option>
                    )
                })}
            </select>
        </span>
    </div>
  );
}

Theme.propTypes = {
    handleThemeChange: PropTypes.func.isRequired, 
    theme: PropTypes.string.isRequired
};

export default Theme;
