import React, {useMemo} from 'react';
import noResultsmage from '../assets/no-results.png'; 
import '../styles/Dashboard.css';
import EventCard from './EventCard';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
    const {
        events,
        selectedEvents,
        handleSelectEvent,
        handleDeselectEvent,
        theme
    } = props;

    // Function to check for event conflict
    const isEventConflict = useMemo(() => {
        return (event) => {
            return selectedEvents.some(selectedEvent =>
                (new Date(event.start_time) >= new Date(selectedEvent.start_time) &&
                new Date(event.start_time) < new Date(selectedEvent.end_time)) ||
                (new Date(event.end_time) > new Date(selectedEvent.start_time) &&
                new Date(event.end_time) <= new Date(selectedEvent.end_time))
            );

        }
    }, [selectedEvents]);

    return (
        <div className={`events-container ${theme}`}>
            <div className={`events-list ${theme}`}>
                <div className='events-container-text'>
                    <h2>All Events</h2>
                </div>
                {events.length === 0 ? (
                        <div className="no-events-container">
                            <img className="no-events-image-container" src={noResultsmage} alt="no-events-data"/>
                            <div className="no-events-text-container"><strong>No Data Found!</strong></div>
                        </div>
                ): (          
                    <div className='events-cards-container'>
                        {events.map(event => (
                             <EventCard 
                                key={event.id} 
                                event={event} 
                                isEventConflict={isEventConflict} 
                                handleSelectEvent={handleSelectEvent} 
                                category= "all"
                            />
                        ))}
                    </div>
                    )
                }
            </div>
            <div className={`selected-events ${theme}`}>
                <div className='events-container-text'>
                    <h2>Selected Events</h2>
                </div>
                <div className='events-cards-container'>
                    {selectedEvents.map(event => (
                        <EventCard 
                            key={event.id} 
                            event={event}
                            handleSelectEvent={handleDeselectEvent} 
                            category= "selected"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

Dashboard.propTypes = {
    events: PropTypes.array.isRequired,
    selectedEvents: PropTypes.array.isRequired,
    handleSelectEvent: PropTypes.func.isRequired,
    handleDeselectEvent: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
};

Dashboard.defaultProps = {
    theme: "light"
}


export default Dashboard;
