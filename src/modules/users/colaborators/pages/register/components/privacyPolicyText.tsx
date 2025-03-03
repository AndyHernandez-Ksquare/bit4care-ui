import { Box, Typography } from "@mui/material";

export const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        overflow: "auto",
        padding: 12,
        gap: 12,
        display: "flex",
        flexDirection: "column",
        "& li": { marginLeft: 16 },
      }}
    >
      <Typography variant="body-normal" gutterBottom>
        En Bid4care, nos comprometemos con la protección de su privacidad y la
        correcta gestión de sus datos personales de acuerdo con la Ley Federal
        de Protección de Datos Personales en posesión de los particulares
        (LFPDPPP). Esta Política de Privacidad tiene como objetivo informarle
        sobre el tratamiento que damos a los datos personales que recabamos de
        usted, por lo que describe cómo recopilamos, usamos, compartimos y
        protegemos su información cuando utiliza nuestra plataforma.
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        1. Datos Personales que Recopilamos
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Podemos recopilar los siguientes datos personales al momento de
        registrarse en nuestra plataforma o utilizar nuestros servicios:
      </Typography>
      <Typography variant="body-normal" component="ul" sx={{ pl: 4 }}>
        <li>Nombre completo</li>
        <li>Correo electrónico</li>
        <li>Número de teléfono</li>
        <li>Dirección</li>
        <li>Información de facturación y pago</li>
        <li>
          Información sobre el servicio que requiere u ofrece (por ejemplo,
          habilidades, experiencia laboral, ubicación geográfica, etc.)
        </li>
        <li>
          Datos sensibles (como necesidades de salud o cuidado personal),
          siempre que sea estrictamente necesario para la prestación de ciertos
          servicios.
        </li>
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        2. Uso de los Datos Personales
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Sus datos personales serán utilizados para las siguientes finalidades:
      </Typography>
      <Typography variant="body-normal" component="ul" sx={{ pl: 4 }}>
        <li>
          Facilitar la conexión entre usuarios y proveedores de servicios.
        </li>
        <li>Proporcionar, operar y mantener nuestros servicios.</li>
        <li>Procesar pagos y gestionar transacciones financieras.</li>
        <li>Mejorar y personalizar su experiencia en la plataforma.</li>
        <li>Evaluar la calidad de nuestros Servicios.</li>
        <li>
          Comunicarnos con usted sobre actualizaciones, promociones y otros
          temas relacionados con el servicio.
        </li>
        <li>Cumplir con obligaciones legales y regulaciones aplicables.</li>
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        3. Transferencia/ compartición de Datos Personales a Terceros
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Bid4care se compromete a no transferir sus datos personales a terceros,
        sin su consentimiento, salvo las excepciones previstas por la ley. Se le
        informa previamente que Bid4care realizará las transferencias de sus
        datos a terceros en los siguientes casos:
      </Typography>
      <Typography variant="body-normal" component="ul" sx={{ pl: 4 }}>
        <li>
          Proveedores de servicios: Compartimos sus datos con empresas que nos
          ayudan a operar la plataforma, como procesadores de pago o proveedores
          de hosting.
        </li>
        <li>
          Cumplimiento legal: Si es requerido por ley o si consideramos de buena
          fe que es necesario para cumplir con regulaciones aplicables, órdenes
          judiciales o solicitudes de las autoridades.
        </li>
        <li>
          Fusiones o adquisiciones: En caso de que Bid4care sea adquirida o se
          fusione con otra empresa, sus datos personales podrían ser
          transferidos a la nueva entidad.
        </li>
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        4. Protección de sus Datos
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Implementamos medidas de seguridad técnicas y organizativas para
        proteger sus datos personales contra accesos no autorizados, uso
        indebido, divulgación o destrucción. Estas medidas incluyen:
      </Typography>
      <Typography variant="body-normal" component="ul" sx={{ pl: 4 }}>
        <li>Encriptación de datos en tránsito y en reposo.</li>
        <li>
          Control de acceso basado en roles para limitar el acceso a sus datos
          personales.
        </li>
        <li>Monitoreo continuo para detectar posibles vulnerabilidades.</li>
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        5. Derechos de los Usuarios
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Usted tiene derecho a:
      </Typography>
      <Typography variant="body-normal" component="ul" sx={{ pl: 4 }}>
        <li>Acceder a los datos personales que tenemos sobre usted.</li>
        <li>
          Solicitar la rectificación de sus datos si son inexactos o
          incompletos.
        </li>
        <li>
          Solicitar la eliminación de sus datos personales, siempre que no haya
          una obligación legal que nos impida hacerlo.
        </li>
        <li>
          Limitar u oponerse al tratamiento de sus datos personales en ciertas
          circunstancias.
        </li>
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Para ejercer cualquiera de estos derechos, puede contactarnos a través
        de la información provista en la sección de "Contacto".
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        6. Cookies y Tecnologías de Seguimiento
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Nuestro sitio web utiliza cookies y tecnologías de seguimiento para
        mejorar su experiencia en la plataforma. Estas herramientas nos permiten
        analizar el tráfico, recordar sus preferencias y personalizar nuestro
        servicio. Usted puede deshabilitar las cookies en cualquier momento a
        través de la configuración de su navegador, aunque esto puede afectar la
        funcionalidad de la plataforma.
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        7. Cambios en esta Política de Privacidad
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Nos reservamos el derecho de actualizar esta política de privacidad en
        cualquier momento. Cualquier cambio significativo será notificado a
        través de nuestro sitio web, por correo electrónico, mediante un aviso
        destacado en la plataforma o por otros medios de contacto que nos haya
        proporcionado. Le recomendamos revisar esta política periódicamente para
        estar al tanto de cualquier actualización.
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        8. Derechos Arcos
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Como titular de sus datos personales, tiene derecho a ejercer los
        Derechos ARCOS, es decir a tener acceso, rectificación, cancelación y
        oposición al tratamiento de sus datos. Para ejercer este derecho, puede
        enviar una solicitud, detallando el derecho que desea ejercer, junto con
        la documentación que acredite su identidad.
      </Typography>

      <Typography variant="body-normal-bold" gutterBottom>
        9. Contacto
      </Typography>
      <Typography variant="body-normal" gutterBottom>
        Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o
        sobre el manejo de sus datos personales, puede ponerse en contacto con
        nuestro departamento en:
      </Typography>
      <Typography variant="body-normal" component="ul" sx={{ pl: 4 }}>
        <li>Correo electrónico: [correo@bid4care.com] </li>
        <li>Teléfono: [+52 teléfono] </li>
        <li>Dirección: [dirección física] </li>
      </Typography>
    </Box>
  );
};
