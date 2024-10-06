import { NavBar } from "@/modules/users/colaborators/components/NavBar/NavBar";
import { Grid2 as Grid } from "@mui/material";

export const Index = () => {
  return (
    <>
      <Grid>
        <NavBar toggleDrawer={() => () => {}} alternative />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "red",
            marginTop: "100px",
          }}
        >
          <a href="/admin">admin</a>
          <a href="/colaborador">colaborador</a>
          <a href="/cliente">cliente</a>
        </div>
      </Grid>
    </>
  );
};
