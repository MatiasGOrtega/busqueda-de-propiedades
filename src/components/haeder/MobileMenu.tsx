"use client";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Box, Divider, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box className="block laptop:hidden">
      <Button variant="text" color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="right"
        color="warning"
        variant="temporary"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {["Inicio", "Sobre Nosotros", "Contacto", "Agentes"].map((text) => (
              <ListItem key={text}>
                <Link className="nav-link w-[250px]" href="/">
                  {text}
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Iniciar sesión", "Registrarse"].map((text) => (
              <ListItem key={text}>
                <Link className="nav-link w-[250px]" href="/">
                  {text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
