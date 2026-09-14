#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const ink = rgb(0.1, 0.09, 0.08);
const muted = rgb(0.44, 0.42, 0.38);
const forest = rgb(0.18, 0.29, 0.27);
const line = rgb(0.85, 0.82, 0.76);
const paper = rgb(0.97, 0.95, 0.91);

const people = [
  {
    key: "ian",
    name: "El Ian",
    role: "Funciones · lógica · repositorios · auth",
    pct: "25%",
    tasks: [
      ["I01", "ABM Propietario", "82%", true],
      ["I02", "ABM Inquilino", "82%", true],
      ["I03", "ABM Tipo de inmueble", "78%", true],
      ["I04", "ABM Inmueble (campos de la narrativa)", "68%", true],
      ["I05", "Imagen de portada y galería", "8%", false],
      ["I06", "Suspender oferta de un inmueble", "35%", true],
      ["I07", "Crear reserva (fechas, monto, vínculo)", "58%", true],
      ["I08", "Control de solapamiento de fechas", "15%", false],
      ["I09", "Búsqueda de inmuebles libres por fechas", "0%", false],
      ["I10", "Seña al crear la reserva", "10%", false],
      ["I11", "Módulo Pago (modelo, repo, controlador)", "5%", false],
      ["I12", "Editar pago: solo el concepto", "0%", false],
      ["I13", "Anular pago (cambio de estado)", "0%", false],
      ["I14", "Terminación anticipada y multa 50/25", "12%", false],
      ["I15", "Renovar / extender como nueva reserva", "0%", false],
      ["I16", "Login con email y contraseña", "8%", false],
      ["I17", "Roles administrador y empleado", "5%", false],
      ["I18", "ABM de usuarios (solo admin)", "0%", false],
      ["I19", "Perfil del empleado (datos, password, avatar)", "5%", false],
      ["I20", "Auditoría de reservas", "22%", true],
      ["I21", "Auditoría de pagos", "8%", false],
      ["I22", "Paginado por servidor cableado a la vista", "45%", true],
      ["I23", "Búsquedas resueltas en el servidor", "50%", true],
      ["I24", "Selects con búsqueda servidor", "10%", false],
      ["I25", "Seed de Usuario, Reserva y Pago", "0%", false],
      ["I26", "Ajustes de esquema (FKs, VARCHAR, imágenes)", "55%", true],
    ],
  },
  {
    key: "deboh",
    name: "Deboh",
    role: "Visual · CSS · views de ABM",
    pct: "16%",
    tasks: [
      ["D01", "Identidad visual y CSS propio", "5%", false],
      ["D02", "Layout, navbar y navegación", "28%", true],
      ["D03", "Home de la agencia (no el template)", "0%", false],
      ["D04", "Views Propietarios", "55%", true],
      ["D05", "Views Inquilinos", "50%", true],
      ["D06", "Views Tipo de inmueble", "48%", true],
      ["D07", "Views Inmuebles (incluye bugs de latitud/eliminar)", "38%", true],
      ["D08", "Views Reservas + detalle", "32%", true],
      ["D09", "Views Pagos", "0%", false],
      ["D10", "Views Login, usuarios y perfil", "0%", false],
      ["D11", "Paginador visual reutilizable", "0%", false],
      ["D12", "Buscador en cada listado", "5%", false],
      ["D13", "Desplegables con filtro ajax", "0%", false],
      ["D14", "UI de portada y galería", "0%", false],
      ["D15", "Empty states, toasts, validaciones", "18%", true],
      ["D16", "Responsive", "15%", true],
      ["D17", "Corregir bugs de vistas ya detectados", "0%", false],
      ["D18", "Chrome de informes", "0%", false],
    ],
  },
  {
    key: "dario",
    name: "El Dario",
    role: "Informes · consultas · listados de negocio",
    pct: "1%",
    tasks: [
      ["R00", "Infra InformesController + repo + menú", "0%", false],
      ["R01", "Inmuebles y dueño, filtro Disponible", "12%", true],
      ["R02", "Inmuebles de un propietario específico", "0%", false],
      ["R03", "Más reservados últimos 365 días", "0%", false],
      ["R04", "Sin reservas en los últimos X días", "0%", false],
      ["R05", "Reservas vigentes", "0%", false],
      ["R06", "Reservas que terminan en X días", "0%", false],
      ["R07", "Pagos de una reserva + alta desde el listado", "0%", false],
      ["R08", "Inmuebles no ocupados entre dos fechas", "0%", false],
      ["R09", "Paginado, búsqueda y selects en los 8 informes", "0%", false],
    ],
  },
];

const bugs = [
  ["B01", "Crear reserva revienta: no hay usuarios en el seed", "Ian", "bloqueante"],
  ["B02", "Eliminar inmueble apunta al controller Inmueble", "Deboh", "bloqueante"],
  ["B03", "Editar inmueble: Latitud bindeada a Longitud", "Deboh", "alta"],
  ["B04", "H1 roto en eliminar inmueble", "Deboh", "media"],
  ["B05", "Eliminar reserva: el hidden no se llama id", "Deboh", "bloqueante"],
  ["B06", "Typo text-darck en el navbar", "Deboh", "media"],
  ["B07", "UseAuthorization sin esquema de autenticación", "Ian", "alta"],
  ["B08", "Dropdowns traen 1000 filas", "Ian", "alta"],
  ["B09", "Reserva.ObtenerLista ignora la búsqueda", "Ian", "alta"],
  ["B10", "Index no usa ObtenerCantidad", "Ian", "alta"],
  ["B11", "PasswordHash e ImagenPortadaUrl VARCHAR(45)", "Ian", "alta"],
  ["B12", "FKs de auditoría incompletas", "Ian", "media"],
  ["B13", "Baja física en todas las entidades", "Ian", "alta"],
  ["B14", "Archivo RepositiorioInquilino.cs mal nombrado", "Ian", "media"],
  ["B15", "Home sigue siendo el template de Microsoft", "Deboh", "media"],
];

function wrap(text, font, size, max) {
  const words = text.split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (font.widthOfTextAtSize(next, size) > max) {
      if (cur) lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines;
}

const pdf = await PDFDocument.create();
pdf.registerFontkit(fontkit);
const regular = await pdf.embedFont(
  readFileSync("/workspace/public/fonts/LiberationSans-Regular.ttf"),
  { subset: true },
);
const bold = await pdf.embedFont(
  readFileSync("/workspace/public/fonts/LiberationSans-Bold.ttf"),
  { subset: true },
);
const form = pdf.getForm();

function addPage() {
  const page = pdf.addPage([595.28, 841.89]);
  page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: paper });
  return page;
}

function banner(page, title, subtitle) {
  page.drawRectangle({ x: 0, y: 800, width: 595.28, height: 42, color: forest });
  page.drawText("RESERVAS TEMPORALES  ·  CHECKLIST INTERACTIVO", {
    x: 36,
    y: 816,
    size: 9,
    font: bold,
    color: rgb(0.96, 0.94, 0.91),
  });
  page.drawText(title, { x: 36, y: 770, size: 18, font: bold, color: ink });
  page.drawText(subtitle, { x: 36, y: 754, size: 9, font: regular, color: muted });
}

const cover = addPage();
cover.drawRectangle({ x: 0, y: 0, width: 18, height: 841.89, color: forest });
cover.drawText("CHECKLIST INTERACTIVO", {
  x: 48,
  y: 760,
  size: 11,
  font: bold,
  color: forest,
});
cover.drawText("Proyecto Reservas Temporales", {
  x: 48,
  y: 720,
  size: 24,
  font: bold,
  color: ink,
});
cover.drawText("Separación de responsabilidades  ·  El Ian  ·  Deboh  ·  El Dario", {
  x: 48,
  y: 698,
  size: 11,
  font: regular,
  color: muted,
});

const intro = [
  "Cruce de la narrativa (PDF) con el repositorio",
  "github.com/debbieagomez/Inmobiliaria-DeborahGomez  ·  main @ 197ea58",
  "Stack: ASP.NET Core MVC (net10.0) + MySQL + Bootstrap 5",
  "",
  "Avance global estimado en código: 22%",
  "El Ian 25%   ·   Deboh 16%   ·   El Dario 1%",
  "",
  "Las casillas de este PDF son interactivas (Acrobat, Chrome, Preview).",
  "Los ítems ya presentes en el repositorio aparecen marcados.",
  "El resto es trabajo pendiente. Tildar a medida que cada PR cierre la tarea.",
];
let y = 650;
for (const t of intro) {
  cover.drawText(t, { x: 48, y, size: 11, font: regular, color: ink });
  y -= 16;
}

cover.drawText("El Ian: modelos, SQL, repos, controladores, reglas, auth, pagos.", {
  x: 48,
  y: 430,
  size: 10,
  font: regular,
  color: ink,
});
cover.drawText("Deboh: CSS, layout, views ABM, pager, búsqueda, selects, bugs de vistas.", {
  x: 48,
  y: 412,
  size: 10,
  font: regular,
  color: ink,
});
cover.drawText("El Dario: los 8 informes, de la query a la vista, con paginado servidor.", {
  x: 48,
  y: 394,
  size: 10,
  font: regular,
  color: ink,
});

for (const person of people) {
  let page = addPage();
  banner(page, person.name, `${person.role}  ·  ${person.pct} en el repositorio`);
  y = 732;
  for (const [id, title, pct, partial] of person.tasks) {
    if (y < 60) {
      page = addPage();
      banner(page, person.name, "continuación");
      y = 732;
    }
    const box = form.createCheckBox(`task.${id}`);
    box.addToPage(page, { x: 36, y: y - 2, width: 11, height: 11 });
    page.drawText(`${id}   ${title}`, {
      x: 54,
      y,
      size: 11,
      font: bold,
      color: ink,
      maxWidth: 400,
    });
    page.drawText(pct, { x: 520, y, size: 10, font: regular, color: muted });
    y -= 14;
    page.drawText(partial ? "Parcial en el repo — falta cerrar ítems" : "No implementado en el repo", {
      x: 54,
      y,
      size: 8.5,
      font: regular,
      color: muted,
    });
    y -= 22;
    page.drawLine({
      start: { x: 36, y: y + 10 },
      end: { x: 559, y: y + 10 },
      thickness: 0.4,
      color: line,
    });
  }
}

let page = addPage();
banner(page, "Bugs encontrados", "Asignados al dueño del archivo");
y = 732;
for (const [id, title, owner, sev] of bugs) {
  if (y < 70) {
    page = addPage();
    banner(page, "Bugs encontrados", "continuación");
    y = 732;
  }
  const box = form.createCheckBox(`bug.${id}`);
  box.addToPage(page, { x: 36, y: y - 2, width: 11, height: 11 });
  page.drawText(`${id}   ${title}`, {
    x: 54,
    y,
    size: 10,
    font: bold,
    color: ink,
    maxWidth: 480,
  });
  y -= 13;
  page.drawText(`${sev.toUpperCase()}  ·  ${owner}`, {
    x: 54,
    y,
    size: 8,
    font: regular,
    color: muted,
  });
  y -= 20;
}

const bytes = await pdf.save({ updateFieldAppearances: true });
mkdirSync("/workspace/public", { recursive: true });
mkdirSync("/workspace/artifacts", { recursive: true });
writeFileSync("/workspace/public/checklist-reservas-temporales.pdf", bytes);
writeFileSync("/workspace/artifacts/checklist-reservas-temporales.pdf", bytes);
console.log("PDF escrito", bytes.length, "bytes");
