import { Button, ButtonGroup } from "@mui/material";

function DesktopMenu() {
  return (
    <ButtonGroup
      variant="text"
      aria-label="buttons group links"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <Button href="#text-buttons" color="primary">
        En alquiler
      </Button>
      <Button href="#text-buttons">En venta</Button>
      <Button href="#text-buttons">Buscador de agentes</Button>
    </ButtonGroup>
  );
}

export default DesktopMenu;
