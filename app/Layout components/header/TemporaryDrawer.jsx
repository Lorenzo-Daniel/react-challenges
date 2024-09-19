"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
//---------------------------------------------------------------------------

function TemporaryDrawer({ data }) {
  const [state, setState] = useState({
    left: false,
  });
  const navigate = useRouter();

  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className="f">
          <ListItemText primary="CHALLENGES LIST" />
        </ListItem>
        <Divider />
        {data?.map((url, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={url.name.toUpperCase()}
                onClick={() => navigate.push(`/${url.route}`)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <IconButton onClick={toggleDrawer(anchor, true)}>
          <MenuIcon sx={{ fontSize: "40px", color: "white" }} />
        </IconButton>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </>
    </div>
  );
}

export default TemporaryDrawer;
