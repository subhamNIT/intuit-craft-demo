import React from "react";
import "../styles/Modal.css"; // Import the loader styles
import PropTypes from "prop-types";
import alertImage from "../assets/error.png";

const Modal = ({setShowMaxEventAlert, modalMessage, theme}) => {
    
    //Function to close the opened modal
    const closeModal = () => {
        setShowMaxEventAlert(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="modal">
            <div className={`modal-content ${theme}`}>
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="modal-content-container">
                <img src = {alertImage} alt="alert" width="50px"/>
                <p>{modalMessage}</p>
                </div>
            </div>
        </div>
    );
}


Modal.propTypes = {
    setShowMaxEventAlert: PropTypes.func.isRequired, 
    modalMessage: PropTypes.string
};


export default Modal;
