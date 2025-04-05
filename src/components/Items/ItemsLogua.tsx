import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, MenuItem, Typography, Button } from "@mui/material";

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
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (isHome) {
      console.log(path);

      router.push(`${path}`);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleOpenMenu}
        sx={{ ":hover": { backgroundColor: "#b22222" } }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#1e1e1e",
              backgroundColor: "#b22222",
              padding: "4px 8px",
              borderRadius: "4px",
            },
          }}
        >
          {title}
        </Typography>
      </Button>
      {subtitle && subtitle.length > 0 && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {subtitle?.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                router.push(`${path}`);
                handleCloseMenu();
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};
