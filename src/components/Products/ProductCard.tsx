import React from "react";
import Image from "next/image";
import { Card, Box, Typography } from "@mui/material";

export const ProductCard = ({
  title,
  image_1,
  image_2,
}: {
  title: string;
  image_1: string;
  image_2?: string;
}) => {
  return (
    <Box>
      <Card
        sx={{
          width: "100%",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          position="relative"
          width="100%"
          height={{
            xs: "200px",
            sm: "250px",
            md: "300px",
            lg: "350px",
          }}
          sx={{
            "&:hover .hover": {
              opacity: 1,
            },
          }}
        >
          <Image
            src={image_1}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {image_2 && (
            <Box
              className="hover"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
                zIndex: 1,
              }}
            >
              <Image
                src={image_2}
                alt="Hover"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}
        </Box>
      </Card>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            userSelect: "none",
            cursor: "default",
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.1rem",
              lg: "1.2rem",
            },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
