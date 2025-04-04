import React, { useState } from "react";
import { useRouter } from "next/navigation";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

export const ItemsDrawer = ({
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
  const [openItem, setOpenItem] = useState(false);
  const handleExpandItem = () => {
    setOpenItem(!openItem);
    if (isHome) {
      router.push(`${path}`);
    }
  };

  return (
    <>
      <List
        sx={{ width: 250, maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        <ListItemButton onClick={handleExpandItem}>
          <ListItemText primary={title} />
          {subtitle ? (
            openItem ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )
          ) : (
            <></>
          )}
        </ListItemButton>
        <Collapse in={openItem} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subtitle?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={index}
                    onClick={() => router.push(`${path}`)}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </React.Fragment>
              );
            })}
          </List>
        </Collapse>
      </List>
    </>
  );
};
