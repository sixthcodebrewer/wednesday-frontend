// samshiksha-app/src/context/LocationContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the location
const LocationContext = createContext();

// Create a provider component
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ lat: null, lng: null });

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the LocationContext
export const useGPSLocation = () => {
  return useContext(LocationContext);
};