import { B4CDragPhotoItem } from "@/components/B4CDragPhotoItem";
import { Box, Typography } from "@mui/material";
import { B4CTextfield } from "@/components/B4CTextfield";
import { B4CButton } from "@/components/B4CButton";
import { useGetClientSelf } from "@/context/api/hooks/useGetClientSelf";
import { useFormik } from "formik";
import * as Yup from "yup";

export const B4CClientProfileSettings = () => {
  const token = localStorage.getItem("clientToken") ?? "";

  const { data } = useGetClientSelf(token);

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required("El nombre completo es obligatorio"),
    address: Yup.string().required("La dirección es obligatoria"),
    email: Yup.string()
      .email("Debe ser un correo válido")
      .required("El correo es obligatorio"),
    phoneNumber: Yup.string()
      .matches(/^\d+$/, "Solo se permiten números")
      .required("El número de teléfono es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: data?.name || "",
      address: data?.address || "",
      email: data?.email || "",
      phoneNumber: data?.phone || "", // Ajusta según los datos disponibles
    },
    enableReinitialize: true, // Para actualizar valores iniciales cuando `data` cambie
    validationSchema,
    onSubmit: (values) => {
      console.log("Datos enviados:", values);
      // Aquí puedes manejar la lógica para actualizar los datos en el backend
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          width: "100%",
          paddingTop: "32px",
        }}
      >
        <Typography variant="h6">Tu foto de perfil</Typography>
        <B4CDragPhotoItem />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            width: "100%",
          }}
        >
          <B4CTextfield
            name="fullName"
            label="Nombre completo"
            placeholder="Por favor ingresa tu nombre completo"
            value={formik.values.fullName.toLocaleString()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helper={formik.touched.fullName ? formik.errors.fullName : ""}
            sx={{ width: "50%" }}
          ></B4CTextfield>
          <B4CTextfield
            name="address"
            label="Dirección"
            placeholder="Por favor ingresa tu dirección"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helper={formik.touched.address ? formik.errors.address : ""}
            sx={{ width: "50%" }}
          ></B4CTextfield>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
          <B4CTextfield
            name="email"
            label="Correo electrónico"
            placeholder="Por favor ingresa tu correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helper={formik.touched.email ? formik.errors.email : ""}
            sx={{ width: "50%" }}
          ></B4CTextfield>
          <B4CTextfield
            name="phoneNumber"
            label="Número de teléfono"
            placeholder="Por favor ingresa tu número de teléfono"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helper={formik.touched.phoneNumber ? formik.errors.phoneNumber : ""}
            sx={{ width: "50%" }}
          ></B4CTextfield>
        </Box>
        <B4CButton isSubmit label="Actualizar datos de cuenta"></B4CButton>
      </Box>
    </form>
  );
};
