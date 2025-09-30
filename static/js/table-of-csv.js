function tableOfCsv() {
  const text = `
Apellidos, Nombre	Alquileres	Suma de materiales
Aguirre, Ezequiel	Bien.	Bien.
Alaniz, Ramiro	Bien.	Bien.
Alveal, Valentina	Bien.	Compartir.
Amoroso, Priscila	Corregir: A3, B3, C3, D3.	Bien.
Ansorena, Milagros	Bien.	Corregir: B8.
Campos, Nahiara	Corregir: B10, B11, B12.	Bien.
Carrasco, Sebastián	Compartir.	Compartir.
Diaz, Aimara Jaqueline	Bien.	Bien.
Figueroa, Lena	Corregir: C2, C3, C11.	Compartir.
Garrido, Milena	Bien.	Bien.
Jimenez Martinez, Nicole	"Corregir: A3, B3, C3, D3.
Corregir: E2, E3, E4, E5."	Compartir.
Giuliano, Martin	Bien.	Bien.
Gomez Veizaga, Celina	Bien.	Bien.
Huarayo, Jasmin	Corregir: E2.	Bien.
Huenuqueo, Celina	"Corregir: E2, E3, E4, E5.
Corregir: A3, B3, C3, D3."	Compartir.
Linares, Magali	Bien.	Compartir.
Jancko, Danna	Corregir: B9, B10, B11, B12.	Bien.
Jaramillo, Jonatan	Compartir.	Compartir.
Perez, Rocio Celina	Completar.	Compartir.
Poblete, Jeremias	Bien.	Bien.
Rojas, Alex	Corregir: A3, B3, C3, D3.	Bien.
Rothen, Jaqueline	Completar.	Bien.
Vargas, Angela Fernanda	Bien.	Bien.
Vega Mella, Lourdes	"Corregir: A3, B3, C3, D3.
Corregir: E2, E3, E4, E5."	Compartir.
Vargas, Henry	"Corregir: E2, E3, E4, E5.
Corregir: C9, C10, C11, C12.
Corregir: D10, D11, D12."	Bien.
Guardia, Agustín	Bien.	Compartir.`
  const parse = Papa.parse(text, {
    delimiter: "\t",
    header: false,          // usa la primera fila como encabezados (opcional)
    skipEmptyLines: true,  // ignora filas vacías
    quoteChar: '"',        // por defecto
    escapeChar: '"',       // por defecto
    dynamicTyping: false   // convierte números si querés: true
  });
  const estudiante = document.getElementById("estudiante");
  const correccion = document.getElementById("correccion");
  // Opción placeholder
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = "— Elegí una opción —";
  estudiante.appendChild(opt0);
  // Ordena los datos
  const dataRows = parse.data.slice(1);
  const claves = Array.from(
    new Set(
      dataRows
        .map(r => (r[0] ?? "").toString().trim())
        .filter(v => v.length > 0)
    )
  ).sort((a, b) => a.localeCompare(b, "es"));
  for (const k of claves) {
    const opt = document.createElement("option");
    opt.value = k;
    opt.textContent = k;
    estudiante.appendChild(opt);
  }
  const header = parse.data[0];

  estudiante.addEventListener("change", () => {
    correccion.innerHTML = "";
    const key = estudiante.value;
    if (!key) return;
    const matches = dataRows.filter(r => (r[0] ?? "").toString().trim() === key);
    if (matches.length === 0) {
      correccion.textContent = "No se han encontrado correcciones.";
      return;
    }
    const h2 = document.createElement('h2');
    h2.textContent = key;
    correccion.appendChild(h2);
    const hd = header.slice(1)
    const cc = matches[0].slice(1)
    for (let i = 0; i < header.slice(1).length; i++) {
      const h3 = document.createElement('h3');
      h3.textContent = `${hd[i]}: `;
      correccion.appendChild(h3)
      const code = document.createElement('pre');
      code.textContent = cc[i]
      correccion.appendChild(code)
    }
  });
}

tableOfCsv()