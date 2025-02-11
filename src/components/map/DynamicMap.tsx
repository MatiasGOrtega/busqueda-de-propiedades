"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map/Map"), {
  loading: () => <p>Cargando mapa...</p>,
  ssr: false,
});

export default Map;
