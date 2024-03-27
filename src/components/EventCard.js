import React, { memo } from "react";
import "../styles/EventCard.css";
import PropTypes from "prop-types";


const EventCard = memo(({ event, isEventConflict, handleSelectEvent, category }) => {

    const cardClassName = `${category === "all" ? (isEventConflict(event) ? "event-card conflict" : "event-card") : "selected-event"}`;

    //Function to format time in desired format
    const formatTime = (time) => {
        const options = { hour: "numeric", minute: "2-digit", hour12: true };
        return new Date(time).toLocaleTimeString("en-US", options);
    }

    //Function to render button
    const renderButton = () => {
        return (
            category === "all" ? (
                <button 
                    aria-label="Select Event"
                    className={`${isEventConflict(event) ? "conflict" : ""}`} 
                    disabled={isEventConflict(event)} 
                    onClick={() => handleSelectEvent(event)}
                    tabIndex={0}
                >
                    SELECT
                </button>
            ) : (
                <button
                    aria-label="Remove Event"
                    tabIndex={0}
                    onClick={() => handleSelectEvent(event.id)}
                >
                    REMOVE
                </button>
            )
        );
    };

    return (
        <div className={cardClassName}>
            <div className="category-initial">
                {event.event_category.charAt(0)}
            </div>
            <div className="event-details">
                <div title={event?.event_name} className="event-name">
                    <strong>{event.event_name}</strong>
                </div>
                <div className="event-category">
                    ({event?.event_category})
                </div>
                <div>{formatTime(event?.start_time)} - {formatTime(event?.end_time)}</div>
                <div className="event-button-container">
                    {renderButton()}
                </div>
            </div>
        </div>
    );
})

EventCard.propTypes = {
    event: PropTypes.object.isRequired,
    isEventConflict: PropTypes.func.isRequired,
    handleSelectEvent: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
};

export default EventCard;

