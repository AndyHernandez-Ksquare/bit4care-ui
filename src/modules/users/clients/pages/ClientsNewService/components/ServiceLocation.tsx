import { Box, TextField, Typography } from "@mui/material";
import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import { Library } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

const googleLibraries: Library[] = ["places", "geometry"];

const GOOGLE_MAPS_API_KEY = "AIzaSyCK4QwPfMHi-8SXl6s8UaX0L4q4LymW4a0";

const base_google_url =
  "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

interface ServiceLocationProps {
  address: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setAddress: (value: string) => void;
  setLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  location: { lat: number; lng: number };
}

export const ServiceLocation = ({
  address,
  disabled = false,
  location,
  onChange,
  setAddress,
  setLocation,
}: ServiceLocationProps) => {
  const handleMarkerDragEnd = async (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setLocation({ lat, lng });

      const response = await fetch(
        `${base_google_url}${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      }
    }
  };

  // Fetch the user's location when the component mounts
  useEffect(() => {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude }); // Set location with the user's coordinates

          // Optionally, reverse geocode the coordinates to get a readable address
          fetch(
            `${base_google_url}${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`,
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.results.length > 0) {
                setAddress(data.results[0].formatted_address);
              }
            })
            .catch((error) => {
              console.error("Error fetching address:", error);
            });
        },
        (error) => {
          console.error("Geolocation error:", error);
          // Optionally, handle error and set default location
        },
        { timeout: 10000 }, // Optional: Set a timeout for geolocation fetching
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Box>
      <Typography typography="body-normal-bold">
        Domicilio de servicio
      </Typography>
      <TextField
        fullWidth
        value={address}
        onChange={onChange}
        placeholder="Detalla tu dirección o selecciónala en el mapa"
        disabled={disabled}
      />

      <Box sx={{ mt: 2 }}>
        <LoadScriptNext
          googleMapsApiKey={GOOGLE_MAPS_API_KEY}
          libraries={googleLibraries}
        >
          <GoogleMap
            center={location}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "300px" }}
          >
            <MarkerF
              position={location}
              onDragEnd={handleMarkerDragEnd}
              draggable
            />
          </GoogleMap>
        </LoadScriptNext>
      </Box>
    </Box>
  );
};
