import { B4CDefinitionComponent } from "@/components/B4CDefinitionComponent/B4CDefinitionComponent";
import { B4CStarRating } from "@/components/B4CStarRating";
import { calculateAverageRating } from "@/constants/calculateAverageRating";
import { colorPalette } from "@/style/partials/colorPalette";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { useServiceData } from "../../context/NewServiceContext";

export const B4CServiceCheckout = () => {
  const { provider, price, duration } = useServiceData();

  return (
    <Box display="flex" flexDirection={"column"} alignItems="center" gap="16px">
      <Avatar
        alt={provider?.User.name}
        src="/static/images/avatar/2.jpg"
        sx={{ width: "130px", height: "130px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography variant="body-large-bold">{provider?.User.name}</Typography>
        <Typography variant="body-normal-bold" color={colorPalette.primary}>
          {provider?.speciality}
        </Typography>

        {provider?.is_approved && (
          <Typography variant="body-small-bold" color={colorPalette.success}>
            Cuenta verificada
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography variant="body-small-bold">Experiencia</Typography>

        <B4CDefinitionComponent label="Años de experiencia:">
          <Typography variant="body-small-bold">
            {provider?.years_of_experience}
          </Typography>
        </B4CDefinitionComponent>
        <B4CDefinitionComponent label="Horas trabajadas:">
          <Typography variant="body-small-bold">
            {provider?.worked_hours}
          </Typography>
        </B4CDefinitionComponent>

        <B4CDefinitionComponent label="Calificación:">
          <B4CStarRating
            rating={calculateAverageRating(provider?.carerReviews)}
          />
        </B4CDefinitionComponent>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "8px",
        }}
      >
        <Typography variant="body-small-bold">Precio</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
          }}
        >
          <Typography variant="body-normal">
            ${provider?.payment_range} x {`${duration} horas`}
          </Typography>
          <Typography variant="body-normal-bold">${price}</Typography>
        </Box>
      </Box>
      <Divider flexItem />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body-normal">Total</Typography>
        <Typography variant="body-normal-bold">${price}</Typography>
      </Box>
    </Box>
  );
};
