import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Typography, Button, Box, Fade } from "@mui/material";

export const ItemsLogua = ({
  title,
  subtitle,
  path,
  isHome,
}: {
  title: string;
  subtitle?: string[];
  path: string;
  isHome?: boolean;
}) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  const handleHomePageRedirection = () => {
    if (isHome) {
      router.push(`${path}`);
    }
  };

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <Box>
        <Button onClick={handleHomePageRedirection}>
          <Typography
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "#1e1e1e",
              },
            }}
          >
            {title}
          </Typography>
        </Button>
      </Box>
      {subtitle && subtitle.length > 0 && (
        <Fade in={hover} timeout={200} unmountOnExit>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "100%",
              left: 0,
              backgroundColor: "#b22222",
              zIndex: 10,
              padding: 1,
              borderRadius: 1,
              maxWidth: "100vw",
              boxSizing: "border-box",
            }}
          >
            {subtitle?.map((item, index) => (
              <Button
                key={index}
                onClick={() => router.push(`${path}`)}
                sx={{ color: "white" }}
                fullWidth
              >
                <Typography>{item}</Typography>
              </Button>
            ))}
          </Box>
        </Fade>
      )}
    </Box>
  );
};
