"use client";
import { Search } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: string) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button
          onClick={() => switchType("buy")}
          style={{
            padding: "16px 36px",
            backgroundColor: "black",
            cursor: "pointer",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          Comprar
        </Button>
        <Button
          onClick={() => switchType("rent")}
          style={{
            padding: "16px 36px",
            backgroundColor: "white",
            cursor: "pointer",
            textTransform: "capitalize",
            color: "black",
          }}
        >
          Rentar
        </Button>
      </div>
      <Box
        className="flex justify-between gap-4 flex-col tablet:flex-row"
        component="form"
        sx={{
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          height: {
            xs: "auto",
            md: "64px",
          },
          "& > :not(button)": {
            m: 1,
            width: {
              xs: "100%",
              md: "auto", 
            },
            margin: "0",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          id="location"
          label="Ubicacion"
          variant="standard"
          placeholder="Ubicacion de la ciudad"
        />

        <TextField
          type="number"
          id="min-price"
          label="Precio Minimo"
          variant="standard"
          placeholder="Precio Min."
        />

        <TextField
          type="number"
          id="max-price"
          label="Precio Maximo"
          variant="standard"
        />

        <IconButton
          sx={{ padding: { sm: "16px" }, width: { xs: "100%", sm: "auto" } }}
          style={{
            borderRadius: "0",
            backgroundColor: "#fde047",
            color: "white",
          }}
          type="submit"
          aria-label="search button"
          size="large"
        >
          <Search />
        </IconButton>
      </Box>
    </div>
  );
}

export default SearchBar;
