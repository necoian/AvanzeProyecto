import { useEffect, useMemo, useState } from "react";
import {
  BUGS,
  PEOPLE,
  REPO,
  TASKS,
  avgPct,
  itemStats,
  statusCounts,
  type Owner,
  type Status,
  type Task,
} from "@/lib/checklist-data";
import { useProgress } from "@/lib/progress-store";
import {
  Building2,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Printer,
  RotateCcw,
  Search,
  Square,
  UserRound,
} from "lucide-react";

type Tab = "overview" | Owner | "bugs" | "repo";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Resumen" },
  { id: "ian", label: "El Ian" },
  { id: "deboh", label: "Deboh" },
  { id: "dario", label: "El Dario" },
  { id: "bugs", label: "Bugs" },
  { id: "repo", label: "Repo" },
];

const STATUS_LABEL: Record<Status, string> = {
  hecho: "Hecho",
  parcial: "Parcial",
  falta: "Falta",
};

function ownerColor(owner: Owner) {
  if (owner === "ian") return "var(--color-ian)";
  if (owner === "deboh") return "var(--color-deboh)";
  return "var(--color-dario)";
}

function statusColor(status: Status) {
  if (status === "hecho") return "var(--color-hecho)";
  if (status === "parcial") return "var(--color-parcial)";
  return "var(--color-falta)";
}

export function Tablero() {
  const [tab, setTab] = useState<Tab>("overview");
  const [hydrated, setHydrated] = useState(false);
  const [query, setQuery] = useState("");
  const [onlyOpen, setOnlyOpen] = useState(false);
  const closed = useProgress((s) => s.closed);
  const reset = useProgress((s) => s.reset);

  useEffect(() => setHydrated(true), []);

  const teamClosed = useMemo(() => {
    const ids = TASKS.map((t) => t.id);
    const n = ids.filter((id) => closed[id]).length;
    return { n, pct: Math.round((n / ids.length) * 100) };
  }, [closed]);

  return (
    <div className="min-h-screen">
      <header className="no-print border-b border-line bg-surface/80 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-[10px] bg-ink text-bg">
              <Building2 className="size-4" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold leading-tight tracking-tight">
                Reservas Temporales
              </p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                Tablero de avance · {REPO.snapshot.split("—")[0].trim()}
              </p>
            </div>
          </div>
          <nav className="ml-auto flex flex-wrap items-center gap-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={
                  "rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors " +
                  (tab === t.id
                    ? "bg-ink text-bg"
                    : "text-ink-soft hover:bg-bg-warm")
                }
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {tab === "overview" && (
          <Overview
            hydrated={hydrated}
            teamClosed={teamClosed}
            onOpen={setTab}
          />
        )}
        {(tab === "ian" || tab === "deboh" || tab === "dario") && (
          <PersonBoard
            owner={tab}
            hydrated={hydrated}
            query={query}
            setQuery={setQuery}
            onlyOpen={onlyOpen}
            setOnlyOpen={setOnlyOpen}
          />
        )}
        {tab === "bugs" && <BugsBoard />}
        {tab === "repo" && <RepoBoard />}
      </main>

      <footer className="no-print mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 pb-10 sm:px-6">
        <p className="text-xs text-muted">
          Análisis sobre {REPO.url.replace("https://", "")} · narrativa del PDF
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={async () => {
              try {
                const { downloadInteractivePdf } = await import("@/lib/pdf-export");
                await downloadInteractivePdf(closed);
              } catch (err) {
                console.error(err);
                window.print();
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-forest px-3.5 py-2 text-[13px] font-medium text-forest-fg"
          >
            <Download className="size-3.5" />
            Descargar PDF
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-[13px] font-medium"
          >
            <Printer className="size-3.5" />
            Imprimir
          </button>
          <button
            onClick={() => {
              if (confirm("¿Borrar los tildes del equipo en este navegador?")) reset();
            }}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] text-muted hover:text-ink"
          >
            <RotateCcw className="size-3.5" />
            Reset tildes
          </button>
        </div>
      </footer>
    </div>
  );
}

function Overview({
  hydrated,
  teamClosed,
  onOpen,
}: {
  hydrated: boolean;
  teamClosed: { n: number; pct: number };
  onOpen: (t: Tab) => void;
}) {
  const globalItems = itemStats();
  const globalStatus = statusCounts();

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            Proyecto de alquileres temporarios
          </p>
          <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
            Separación de responsabilidades
            <span className="text-muted"> y estado real del repo.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
            Cruce de la narrativa con el código de{" "}
            <span className="font-medium text-ink">main @ 197ea58</span>. El
            Ian cierra que las funciones existan. Deboh cierra que se vean y se
            usen. El Dario cierra los ocho informes. Los tildes de este tablero
            se guardan en este navegador.
          </p>
        </div>
        <aside className="rounded-[28px] border border-line bg-surface p-5 shadow-[0_1px_0_rgba(26,24,20,0.04)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Avance del repositorio
          </p>
          <p className="mt-3 font-display text-5xl font-semibold tabular-nums tracking-tight">
            {REPO.overallPct}
            <span className="ml-1 text-2xl text-muted">%</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            {globalItems.inRepo} de {globalItems.total} ítems ya están en el
            código · {globalStatus.parcial} tareas a medio hacer ·{" "}
            {globalStatus.falta} ni empezadas
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-bg-warm">
            <div
              className="h-full rounded-full bg-forest"
              style={{ width: `${REPO.overallPct}%` }}
            />
          </div>
          {hydrated && (
            <p className="mt-3 text-xs text-muted">
              Checklist del equipo: {teamClosed.n}/{TASKS.length} tareas
              marcadas ({teamClosed.pct}%).
            </p>
          )}
        </aside>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {(["ian", "deboh", "dario"] as Owner[]).map((owner) => {
          const person = PEOPLE[owner];
          const pct = avgPct(owner);
          const counts = statusCounts(owner);
          const items = itemStats(owner);
          return (
            <button
              key={owner}
              onClick={() => onOpen(owner)}
              className="rounded-[24px] border border-line bg-surface p-5 text-left transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
                  style={{ background: ownerColor(owner) }}
                >
                  {person.name}
                </span>
                <span className="font-display text-2xl font-semibold tabular-nums">
                  {pct}%
                </span>
              </div>
              <p className="mt-3 text-sm font-medium leading-snug">{person.role}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {counts.parcial} parciales · {counts.falta} faltan ·{" "}
                {items.inRepo}/{items.total} ítems en repo
              </p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-bg-warm">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: ownerColor(owner) }}
                />
              </div>
            </button>
          );
        })}
      </section>

      <section className="rounded-[28px] border border-line bg-surface p-5 sm:p-6">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Cómo se parte el trabajo
        </h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <Split
            name="El Ian"
            color="var(--color-ian)"
            points={[
              "Modelos, SQL, repositorios, controladores",
              "Reglas: solapamiento, multa 50/25, seña, renovar",
              "Módulo Pago y anulación por estado",
              "Auth cookie, roles, auditoría, seed de usuarios",
              "Paginado/búsqueda/selects: el contrato servidor",
            ]}
          />
          <Split
            name="Deboh"
            color="var(--color-deboh)"
            points={[
              "CSS, layout, home, navbar, marca",
              "Views de todos los ABM (index/crear/editar/eliminar/detalle)",
              "Paginador, buscador y selects con typeahead",
              "Galería, login, perfil, empty states",
              "Arreglar los bugs de vistas (latitud, 404 eliminar…)",
            ]}
          />
          <Split
            name="El Dario"
            color="var(--color-dario)"
            points={[
              "InformesController + RepositorioInformes",
              "Los 8 informes de la narrativa, uno por uno",
              "Filtros GET, paginado, cero combos completos",
              "Pagos de una reserva + alta desde el listado",
              "Inmuebles libres entre dos fechas (reusa query de Ian)",
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Bloqueantes ahora mismo
        </h2>
        <ul className="mt-4 grid gap-2">
          {BUGS.filter((b) => b.severity === "bloqueante").map((b) => (
            <li
              key={b.id}
              className="rounded-2xl border border-line bg-surface px-4 py-3"
            >
              <p className="text-sm font-medium">
                {b.id} · {b.title}
              </p>
              <p className="mt-1 text-[13px] text-muted">{b.impact}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Split({
  name,
  color,
  points,
}: {
  name: string;
  color: string;
  points: string[];
}) {
  return (
    <div>
      <p
        className="text-[12px] font-semibold uppercase tracking-[0.14em]"
        style={{ color }}
      >
        {name}
      </p>
      <ul className="mt-3 space-y-2 text-[13.5px] leading-snug text-ink-soft">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span
              className="mt-1.5 size-1.5 shrink-0 rounded-full"
              style={{ background: color }}
            />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PersonBoard({
  owner,
  hydrated,
  query,
  setQuery,
  onlyOpen,
  setOnlyOpen,
}: {
  owner: Owner;
  hydrated: boolean;
  query: string;
  setQuery: (v: string) => void;
  onlyOpen: boolean;
  setOnlyOpen: (v: boolean) => void;
}) {
  const person = PEOPLE[owner];
  const closed = useProgress((s) => s.closed);
  const toggle = useProgress((s) => s.toggle);
  const pct = avgPct(owner);
  const counts = statusCounts(owner);
  const items = itemStats(owner);
  const tasks = TASKS.filter((t) => t.owner === owner);
  const groups = [...new Set(tasks.map((t) => t.group))];

  const filtered = tasks.filter((t) => {
    if (onlyOpen && closed[t.id]) return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.id.toLowerCase().includes(q) ||
      t.narrative.toLowerCase().includes(q) ||
      t.missing.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <section className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: ownerColor(owner) }}
          >
            {person.github} · {person.email}
          </p>
          <h1 className="mt-1 font-display text-4xl font-semibold tracking-[-0.03em]">
            {person.name}
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {person.blurb}
          </p>
        </div>
        <div className="rounded-[22px] border border-line bg-surface px-5 py-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
            En el repositorio
          </p>
          <p className="font-display text-3xl font-semibold tabular-nums">
            {pct}%
          </p>
          <p className="text-xs text-muted">
            {counts.parcial} parcial · {counts.falta} falta · {items.inRepo}/
            {items.total} ítems
          </p>
        </div>
      </section>

      <div className="no-print flex flex-wrap items-center gap-2">
        <label className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar tareas…"
            className="w-full rounded-full border border-line bg-surface py-2 pl-9 pr-3 text-sm outline-none focus:border-ink"
          />
        </label>
        <button
          onClick={() => setOnlyOpen(!onlyOpen)}
          className={
            "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[13px] " +
            (onlyOpen
              ? "border-ink bg-ink text-bg"
              : "border-line bg-surface text-ink-soft")
          }
        >
          <Filter className="size-3.5" />
          Solo abiertas
        </button>
      </div>

      {groups.map((group) => {
        const list = filtered.filter((t) => t.group === group);
        if (!list.length) return null;
        return (
          <section key={group} className="space-y-2">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
              {group}
            </h2>
            {list.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                hydrated={hydrated}
                checked={!!closed[task.id]}
                onToggle={() => toggle(task.id)}
              />
            ))}
          </section>
        );
      })}
    </div>
  );
}

function TaskCard({
  task,
  hydrated,
  checked,
  onToggle,
}: {
  task: Task;
  hydrated: boolean;
  checked: boolean;
  onToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const closedItems = useProgress((s) => s.closed);
  const toggle = useProgress((s) => s.toggle);
  const pending = task.items.filter((i) => !i.inRepo);

  return (
    <article
      className={
        "rounded-[22px] border bg-surface print:break-inside-avoid " +
        (checked ? "border-line/80 opacity-70" : "border-line")
      }
    >
      <div className="flex gap-3 p-4 sm:p-5">
        <button
          onClick={onToggle}
          className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-[8px] border border-line-strong bg-bg"
          aria-pressed={checked}
          aria-label={checked ? "Marcar abierta" : "Marcar cerrada por el equipo"}
        >
          {hydrated && checked ? (
            <Check className="size-4" strokeWidth={2.4} />
          ) : (
            <Square className="size-3.5 text-line-strong" />
          )}
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-muted">{task.id}</span>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
              style={{ background: statusColor(task.status) }}
            >
              {STATUS_LABEL[task.status]} · {task.pct}%
            </span>
            <span className="rounded-full bg-bg-warm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
              {task.priority}
            </span>
          </div>
          <h3 className="mt-1 font-display text-lg font-semibold leading-snug tracking-tight">
            {task.title}
          </h3>
          <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
            {task.narrative}
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-bg-warm">
            <div
              className="h-full rounded-full"
              style={{
                width: `${task.pct}%`,
                background: statusColor(task.status),
              }}
            />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-ink-soft"
          >
            <ChevronDown
              className={"size-4 transition-transform " + (open ? "rotate-180" : "")}
            />
            {open ? "Ocultar detalle" : "Ver qué hay y qué falta"}
          </button>
          {open && (
            <div className="mt-3 grid gap-3 border-t border-line pt-3 text-[13.5px] leading-relaxed md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  En el repo
                </p>
                <p className="mt-1 text-ink-soft">{task.evidence}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Falta
                </p>
                <p className="mt-1 text-ink-soft">{task.missing}</p>
              </div>
              {task.files.length > 0 && (
                <p className="md:col-span-2 font-mono text-[11px] text-muted">
                  {task.files.join(" · ")}
                </p>
              )}
              {task.dependsOn && (
                <p className="md:col-span-2 text-[12px] text-muted">
                  Depende de {task.dependsOn.join(", ")}
                </p>
              )}
            </div>
          )}
          <ul className="mt-3 space-y-1.5">
            {task.items.map((item) => {
              const itemChecked = item.inRepo || !!closedItems[item.id];
              return (
                <li key={item.id} className="flex items-start gap-2 text-[13.5px]">
                  <button
                    disabled={item.inRepo}
                    onClick={() => toggle(item.id)}
                    className={
                      "mt-0.5 grid size-5 shrink-0 place-items-center rounded-[5px] border " +
                      (item.inRepo
                        ? "border-hecho bg-hecho text-white"
                        : itemChecked
                          ? "border-ink bg-ink text-bg"
                          : "border-line-strong bg-bg")
                    }
                    aria-label={item.label}
                  >
                    {itemChecked && <Check className="size-3" strokeWidth={3} />}
                  </button>
                  <span className={item.inRepo ? "text-ink-soft" : ""}>
                    {item.label}
                    {item.inRepo && (
                      <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-hecho">
                        en repo
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
          {pending.length > 0 && (
            <p className="mt-2 text-[11px] text-muted">
              {pending.length} ítem{pending.length === 1 ? "" : "s"} pendiente
              {pending.length === 1 ? "" : "s"}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function BugsBoard() {
  const toggle = useProgress((s) => s.toggle);
  const closed = useProgress((s) => s.closed);
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-[-0.03em]">
          Bugs encontrados en el código
        </h1>
        <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">
          No son “deuda futura”: rompen flujos de hoy. Asignados al dueño del
          archivo. Tildar cuando el PR los cierre.
        </p>
      </div>
      <ul className="grid gap-2">
        {BUGS.map((b) => (
          <li
            key={b.id}
            className="flex gap-3 rounded-[22px] border border-line bg-surface p-4"
          >
            <button
              onClick={() => toggle(b.id)}
              className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-[8px] border border-line-strong bg-bg"
            >
              {closed[b.id] ? <Check className="size-4" /> : <Square className="size-3.5 text-line-strong" />}
            </button>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-muted">{b.id}</span>
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
                  style={{
                    background:
                      b.severity === "bloqueante"
                        ? "var(--color-falta)"
                        : b.severity === "alta"
                          ? "var(--color-parcial)"
                          : "var(--color-muted)",
                  }}
                >
                  {b.severity}
                </span>
                <span
                  className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
                  style={{ background: ownerColor(b.owner) }}
                >
                  {PEOPLE[b.owner].name}
                </span>
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
                {b.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] text-muted">{b.where}</p>
              <p className="mt-2 text-[13.5px] text-ink-soft">{b.impact}</p>
              <p className="mt-1 text-[13.5px]">
                <span className="font-medium">Fix: </span>
                {b.fix}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RepoBoard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-[-0.03em]">
          Qué hay hoy en el repositorio
        </h1>
        <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">
          ASP.NET Core MVC, MySQL, patrón genérico ABMController + IRepositorio.
          29 commits en main. Integrantes: Dario Godoy, Deborah Gomez, Ian
          Quimey Pereyra.
        </p>
        <a
          href={REPO.url}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest"
        >
          Abrir GitHub <ExternalLink className="size-3.5" />
        </a>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Fact
          title="Implementado"
          lines={[
            "CRUD Propietario, Inquilino, TipoInmueble, Inmueble, Reserva",
            "Validación Hasta ≥ Desde y FechaHastaOriginal al alta",
            "Unicidad DNI/email en propietario e inquilino",
            "LIMIT/OFFSET + ObtenerCantidad en repositorios",
            "Campo Disponible, PorcentajeSenia, coords, precio",
            "DER completo en SQL: incluye Pago y Usuario",
            "Seed de propietarios, inquilinos, tipos e inmuebles",
          ]}
        />
        <Fact
          title="Ausente"
          lines={[
            "Modelo/repo/controller de Pago y de Usuario",
            "Login, roles, [Authorize], avatar, perfil",
            "Solapamiento de reservas y búsqueda por fechas",
            "Terminación anticipada, multa, renovación",
            "Galería de imágenes e upload",
            "Los 8 informes",
            "UI de paginado, búsqueda y selects ajax",
            "Seed de Usuario — las reservas no se pueden crear",
          ]}
        />
      </div>
      <div className="rounded-[24px] border border-line bg-surface p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
          <FileText className="size-4" />
          Arquitectura actual
        </h2>
        <pre className="mt-3 overflow-x-auto text-[12.5px] leading-relaxed text-ink-soft">{`Controllers/ABMController<T>     CRUD genérico Index/Crear/Editar/Eliminar
  ↳ Propietarios, Inquilinos, TipoInmueble, Inmuebles, Reservas
Repositories/IRepositorio<T>      Alta Baja Modificacion ObtenerLista ObtenerCantidad ObtenerPorId
Models                            Propietario Inquilino TipoInmueble Inmueble Reserva
                                  (faltan Pago y Usuario)
Database                          7 tablas · Seed parcial
Views                             esqueletos HTML, casi sin CSS propio
Program.cs                        DI de 5 repos · UseAuthorization vacío`}</pre>
      </div>
      <div className="rounded-[24px] border border-line bg-surface p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
          <UserRound className="size-4" />
          Orden sugerido (dependencias)
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-[14px] leading-relaxed text-ink-soft">
          <li>
            Ian: seed de Usuario + ampliar VARCHAR. Sin esto no hay reservas.
          </li>
          <li>Deboh: parche de bugs de vistas (eliminar inmueble/reserva, latitud).</li>
          <li>Ian: auth cookie + roles. Deboh: login y navbar.</li>
          <li>Ian: overlap + BuscarDisponibles. Dario: informes 1, 5, 8.</li>
          <li>Ian: módulo Pago. Deboh: vistas. Dario: informe 7.</li>
          <li>Ian: multa y renovar. Deboh: pantallas Terminar / Renovar.</li>
          <li>Dario: el resto de informes. Deboh: CSS, pager, selects, home.</li>
        </ol>
      </div>
    </div>
  );
}

function Fact({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-[24px] border border-line bg-surface p-5">
      <h2 className="font-display text-lg font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2 text-[13.5px] leading-snug text-ink-soft">
        {lines.map((l) => (
          <li key={l} className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" />
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
