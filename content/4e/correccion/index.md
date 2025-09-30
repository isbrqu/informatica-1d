+++
title = 'Correcciones'
+++

<style>
    select {
  appearance: none;       /* elimina estilos por defecto en navegadores modernos */
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  max-width: 300px;
  padding: 0.6em 1em;
  font-size: 1rem;
  font-family: inherit;

  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  color: #333;

  line-height: 1.4;
  cursor: pointer;
  display: block;
}

/* Compatibilidad con foco/accesibilidad */
select:focus {
  border-color: #666;
  outline: none;
  box-shadow: 0 0 0 2px rgba(100, 100, 100, 0.2);
}

pre {
  font-size: 20px;
}
</style>

# Correcciones

<label>Seleccione su <strong>apellido y nombre<strong>: </label>
<select id="estudiante"></select>

<div id="correccion"></div>

<details>
  <summary>VER QR</summary>
  <img alt="QR de la url" src="qr.png" width="300">
</details>

<script src="/js/papaparse.v5-4-1.min.js" defer></script>
<script src="/js/table-of-csv.js" defer></script>
