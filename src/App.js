/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import mockData from "./constants/api-mock";
import Loader from "./components/Loader";
import ErrorPage from "./components/Error";
import Dashboard from "./components/Dashboard";
import Theme from "./components/Theme";
import Modal from "./components/Modal";

const App = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [theme, setTheme] = useState("");
    const [showMaxEventAlert, setShowMaxEventAlert] = useState(false);
    const alertModalMessage = "You can select a maximum of 3 events.";
    const loaderMessage = "Please wait while we are loading!!";

    // Fetch events from API
    useEffect(() => {
        //Fetches the theme from local storage
        const theme = localStorage.getItem("theme") || "light";
        setTheme(theme);
        fetchEvents();
    }, []);

    // Function to handle theme change
    const handleThemeChange = useCallback((e) => {
        const newTheme = e.target.value;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }, []);

    // Fetch events using mock data (for demonstration purposes)
    const fetchEvents = useCallback(async () => {
        try {
            setIsLoading(true);
            // const data = await fetch(`${CONSTANTS.API_URL}`);
            // const res = await data.json();
            setTimeout(() => {
                setIsLoading(false);
                // setError("The page requested couldnot be processed. Please try after sometime");
                setEvents(mockData);
            }, 1000)
            // setEvents(res);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }, []);

    // Function to handle event selection
    const handleSelectEvent = useCallback((event) => {
        if (selectedEvents.length >= 3) {
            document.body.style.overflow = "hidden";
            setShowMaxEventAlert(true);
            return;
        }
        setSelectedEvents(prevEvents => [...prevEvents, event]);
    }, [selectedEvents]);

    // Function to handle event deselection
    const handleDeselectEvent = useCallback((eventId) => {
        setSelectedEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
    }, []);

    return (
        <div className="app-container">
            <div className={`App ${theme}`}>
                {isLoading && <Loader message={loaderMessage} theme={theme} />}
                {error && <ErrorPage message={error} />}
                {!isLoading && !error && 
                <div className="dashboard-container">
                    <Theme handleThemeChange={handleThemeChange} theme={theme} />
                    <Dashboard
                        theme={theme}
                        events={events}
                        selectedEvents={selectedEvents}
                        handleSelectEvent={handleSelectEvent}
                        handleDeselectEvent={handleDeselectEvent}
                    />
                </div>
                }
            </div>
            {showMaxEventAlert && (
                <Modal setShowMaxEventAlert={setShowMaxEventAlert} modalMessage={alertModalMessage} theme={theme} />
            )}
        </div>
    );
}

export default App;
