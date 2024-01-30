import Image from "next/image";
import uckgLogo from "../../public/assets/logos/logo.png";
import { Typography } from "@mui/material";

export const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image src={uckgLogo} alt="UCKG Connect Logo" width={80} height={80} />
      <div style={{ marginLeft: 10 }}>
        <Typography
          color="primary.darkest"
          fontFamily=""
          variant="subtitle1"
          style={{
            fontSize: "1.2rem",
            fontWeight: "800",
            textDecoration: "none",
          }}
        >
          UCKG
        </Typography>
        <Typography
          color="primary.darkest"
          fontFamily=""
          variant="subtitle1"
          style={{
            fontSize: "1.2rem",
            fontWeight: "800",
            fontStyle: "italic",
            textDecoration: "none",
          }}
        >
          Connect
        </Typography>
      </div>
    </div>
  );
};
