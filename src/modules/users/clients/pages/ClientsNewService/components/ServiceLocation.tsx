import { Box, TextField, Typography } from "@mui/material";
import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import { Library } from "@googlemaps/js-api-loader";

const googleLibraries: Library[] = ["places", "geometry"];

interface ServiceLocationProps {
  address: string;
  setAddress: (value: React.SetStateAction<string>) => void;
  location: { lat: number; lng: number };
  handleMarkerDragEnd: (event: google.maps.MapMouseEvent) => void;
  googleApiKey: string;
}

export const ServiceLocation = ({
  address,
  setAddress,
  location,
  handleMarkerDragEnd,
  googleApiKey,
}: ServiceLocationProps) => {
  return (
    <Box>
      <Typography typography="body-normal-bold">
        Domicilio de servicio
      </Typography>
      <TextField
        fullWidth
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Detalla tu dirección o selecciónala en el mapa"
      />

      <Box sx={{ mt: 2 }}>
        <LoadScriptNext
          googleMapsApiKey={googleApiKey}
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
