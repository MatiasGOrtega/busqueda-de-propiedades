import { Search } from "@mui/icons-material";
import { Box, IconButton, MenuItem, TextField } from "@mui/material";
import React from "react";

function Filter() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-light text-2xl">
        Resultados para la busqueda <b>London</b>
      </h1>
      <Box sx={{ minWidth: 120 }} className="top">
        <TextField
          fullWidth
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          placeholder="Ubicación de la propiedad"
        />
      </Box>
      <div className="flex flex-wrap gap-1">
        <Box sx={{ width: 120 }}>
          <TextField
            size="small"
            fullWidth
            label="Tipo"
            id="type"
            placeholder="Tipo"
            value=""
            select
          >
            <MenuItem value="">-</MenuItem>
            <MenuItem value="buy">Compra</MenuItem>
            <MenuItem value="rent">Renta</MenuItem>
          </TextField>
        </Box>
        <Box sx={{ width: 120 }}>
          <TextField
            fullWidth
            label="Propiedad"
            value=""
            size="small"
            id="property"
            placeholder="Propiedad"
            select
          >
            <MenuItem value="">-</MenuItem>
            <MenuItem value="apartment">Departamento</MenuItem>
            <MenuItem value="house">Casa</MenuItem>
            <MenuItem value="condo">Condominio</MenuItem>
            <MenuItem value="land">Land</MenuItem>
          </TextField>
        </Box>
        <Box sx={{ width: 120 }}>
          <TextField
            label="Precio Min."
            id="minPrice"
            size="small"
            type="number"
            placeholder="Precio Min."
          />
        </Box>
        <Box sx={{ width: 120 }}>
          <TextField
            label="Precio Max."
            id="maxPrice"
            type="number"
            size="small"
            placeholder="Precio Max."
          />
        </Box>
        <Box sx={{ width: 120 }}>
          <TextField
            label="Habitaciones"
            id="bedroom"
            size="small"
            type="text"
            placeholder="Habitaciones"
          />
        </Box>

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
      </div>
    </div>
  );
}

export default Filter;
