import { i as __toESM } from "../_runtime.mjs";
import { I as require_jsx_runtime, L as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as FileText, d as ChevronDown, f as Check, i as Search, l as ExternalLink, o as Printer, p as Building2, r as Square, s as Funnel, t as UserRound, u as Download } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CMZvupLz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var PEOPLE = {
	ian: {
		name: "El Ian",
		role: "Funciones · lógica · repositorios · auth",
		github: "@necoian",
		email: "0108.facultad@gamil.com",
		blurb: "Hace que cada función de la narrativa ocurra de verdad: modelos, SQL, repositorios, controladores, reglas de negocio, autenticación y los contratos que consumen las vistas."
	},
	deboh: {
		name: "Deboh",
		role: "Visual · CSS · views de ABM",
		github: "@debbieagomez",
		email: "deborahgomez71@gmail.com",
		blurb: "Identidad visual, layout, CSS y las vistas de todos los ABM. Convierte el esqueleto HTML actual en una interfaz usable, consistente y con paginado, búsqueda y selects con filtro."
	},
	dario: {
		name: "El Dario",
		role: "Informes · consultas · listados de negocio",
		github: "@GodoyDario",
		email: "dariogodoy0896@gmail.com",
		blurb: "Los 8 informes de la narrativa, de punta a punta: consultas SQL, controlador, vistas de reporte, filtros, paginado servidor y alta de pago desde el listado correspondiente."
	}
};
var REPO = {
	url: "https://github.com/debbieagomez/Inmobiliaria-DeborahGomez",
	stack: "ASP.NET Core MVC (net10.0) + MySQL + Bootstrap 5",
	commits: 29,
	branch: "main",
	snapshot: "197ea58 — merge PR #1 rama Funciones (14 sep 2026)",
	overallPct: 22
};
var TASKS = [
	{
		id: "I01",
		owner: "ian",
		group: "ABM entidades",
		title: "ABM Propietario",
		narrative: "Propietario es dueño de uno o varios inmuebles. ABM completo.",
		status: "parcial",
		pct: 82,
		evidence: "Modelo, repositorio (CRUD + ExisteDni/ExisteEmail), controlador heredado de ABMController y vistas index/crear/editar/eliminar. Búsqueda y LIMIT/OFFSET en SQL.",
		missing: "DataAnnotations en el modelo, no hay chequeo de rol al eliminar, Index no pasa el total para el pager, la vista no muestra el buscador.",
		files: [
			"Models/Propietario.cs",
			"Repositories/RepositorioPropietario.cs",
			"Controllers/PropietariosController.cs"
		],
		items: [
			{
				id: "I01-a",
				label: "Alta / baja / modificación / listado",
				inRepo: true
			},
			{
				id: "I01-b",
				label: "Unicidad de DNI y email",
				inRepo: true
			},
			{
				id: "I01-c",
				label: "Búsqueda servidor por nombre/DNI",
				inRepo: true
			},
			{
				id: "I01-d",
				label: "Validaciones [Required]/[Email] en el modelo",
				inRepo: false
			},
			{
				id: "I01-e",
				label: "Eliminar solo si es administrador",
				inRepo: false
			},
			{
				id: "I01-f",
				label: "Index entrega total + página a la vista",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "I02",
		owner: "ian",
		group: "ABM entidades",
		title: "ABM Inquilino",
		narrative: "ABM inquilino. DNI, nombre completo y datos de contacto.",
		status: "parcial",
		pct: 82,
		evidence: "Mismo patrón que Propietario. RepositorioInquilino (typo en el nombre del archivo) cubre CRUD y unicidad.",
		missing: "Renombrar RepositiorioInquilino.cs, DataAnnotations, gate de admin al eliminar, cablear paginado.",
		files: [
			"Models/Inquilino.cs",
			"Repositories/RepositiorioInquilino.cs",
			"Controllers/InquilinosController.cs"
		],
		items: [
			{
				id: "I02-a",
				label: "CRUD + unicidad DNI/email",
				inRepo: true
			},
			{
				id: "I02-b",
				label: "Búsqueda servidor",
				inRepo: true
			},
			{
				id: "I02-c",
				label: "Renombrar archivo RepositiorioInquilino",
				inRepo: false
			},
			{
				id: "I02-d",
				label: "Eliminar solo administrador",
				inRepo: false
			},
			{
				id: "I02-e",
				label: "Index con total para pager",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "I03",
		owner: "ian",
		group: "ABM entidades",
		title: "ABM Tipo de inmueble",
		narrative: "Se debe poder administrar (ABM) los tipos de los inmuebles.",
		status: "parcial",
		pct: 78,
		evidence: "CRUD completo (Ian lo cerró el 3 sep). Búsqueda por nombre y paginado SQL.",
		missing: "Unicidad de Nombre, no permitir borrar un tipo en uso, gate admin.",
		files: [
			"Models/TipoInmueble.cs",
			"Repositories/RepositorioTipoInmueble.cs",
			"Controllers/TipoInmuebleController.cs"
		],
		items: [
			{
				id: "I03-a",
				label: "CRUD de tipos",
				inRepo: true
			},
			{
				id: "I03-b",
				label: "Nombre único",
				inRepo: false
			},
			{
				id: "I03-c",
				label: "Bloquear baja si hay inmuebles asociados",
				inRepo: false
			}
		],
		priority: "media"
	},
	{
		id: "I04",
		owner: "ian",
		group: "Inmuebles",
		title: "ABM Inmueble (campos de la narrativa)",
		narrative: "Dirección, cupo, tipo, coordenadas y precio por día. Porcentaje de seña. Un único propietario.",
		status: "parcial",
		pct: 68,
		evidence: "Modelo y tabla tienen todos los campos. Repositorio con JOIN a propietario y tipo. Alta/edición persisten Disponible y PorcentajeSenia.",
		missing: "No hay validación de cupo>0 ni porcentaje 0–100. Dropdowns cargan 1000 filas. Columnas denormalizadas propietarioNombre/TipoNombre en el SQL. Sin detalle.",
		files: [
			"Models/Inmueble.cs",
			"Repositories/RepositorioInmueble.cs",
			"Controllers/InmueblesController.cs",
			"Database/DBInmobiliaria_DeborahGomez.sql"
		],
		items: [
			{
				id: "I04-a",
				label: "Campos dirección, cupo, coords, precio, seña, tipo, dueño",
				inRepo: true
			},
			{
				id: "I04-b",
				label: "JOIN para mostrar dueño y tipo",
				inRepo: true
			},
			{
				id: "I04-c",
				label: "Validar cupo y porcentaje seña",
				inRepo: false
			},
			{
				id: "I04-d",
				label: "Quitar columnas denormalizadas del CREATE TABLE",
				inRepo: false
			},
			{
				id: "I04-e",
				label: "Endpoint de búsqueda para selects (no tamPagina:1000)",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "I05",
		owner: "ian",
		group: "Inmuebles",
		title: "Imagen de portada y galería",
		narrative: "Tienen una imagen de portada y otras varias del inmueble.",
		status: "falta",
		pct: 8,
		evidence: "Solo existe ImagenPortadaUrl VARCHAR(45). No hay tabla de imágenes extra, ni upload, ni wwwroot/uploads.",
		missing: "Tabla ImagenInmueble (Id, InmuebleId, Url, EsPortada, Orden). Upload a disco o cloud. VARCHAR más largo. Servir estáticos.",
		files: ["Models/Inmueble.cs", "Database/DBInmobiliaria_DeborahGomez.sql"],
		items: [
			{
				id: "I05-a",
				label: "Campo ImagenPortadaUrl en el modelo",
				inRepo: true
			},
			{
				id: "I05-b",
				label: "Ampliar VARCHAR (hoy 45 chars no alcanza para una URL)",
				inRepo: false
			},
			{
				id: "I05-c",
				label: "Tabla galería ImagenInmueble",
				inRepo: false
			},
			{
				id: "I05-d",
				label: "Alta/baja de imágenes y set de portada",
				inRepo: false
			},
			{
				id: "I05-e",
				label: "Endpoint de upload",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "I06",
		owner: "ian",
		group: "Inmuebles",
		title: "Suspender oferta de un inmueble",
		narrative: "El propietario puede solicitar que se suspenda temporalmente la oferta. No aparece en listados para alquilar. No afecta alquileres ya creados.",
		status: "parcial",
		pct: 35,
		evidence: "Campo Disponible existe y se edita con checkbox. No hay acción dedicada ni filtro en búsquedas de alquiler.",
		missing: "Método Suspender/Reactivar. Las búsquedas para alquilar deben filtrar Disponible=1. Las reservas existentes no se tocan (hoy no hay query de ocupación).",
		files: ["Models/Inmueble.cs", "Repositories/RepositorioInmueble.cs"],
		items: [
			{
				id: "I06-a",
				label: "Campo Disponible persistido",
				inRepo: true
			},
			{
				id: "I06-b",
				label: "Acción Suspender/Reactivar",
				inRepo: false
			},
			{
				id: "I06-c",
				label: "Excluir no-disponibles de la búsqueda para alquilar",
				inRepo: false
			},
			{
				id: "I06-d",
				label: "Confirmar que no altera reservas vigentes",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "I07",
		owner: "ian",
		group: "Reservas",
		title: "Crear reserva (fechas, monto, inmueble, inquilino)",
		narrative: "Registrar fecha inicio/fin (controlar fechas), monto diario y vínculo inmueble–inquilino.",
		status: "parcial",
		pct: 58,
		evidence: "Modelo con IValidatableObject (Hasta ≥ Desde). Repositorio Alta copia FechaHastaOriginal. Vista crear con selects. UsuarioCreadorId hardcodeado a 1.",
		missing: "Tomar usuario de la sesión. Verificar ocupación. Generar seña. Seed de Usuario (hoy la FK va a fallar). Mostrar nombres, no IDs.",
		files: [
			"Models/Reserva.cs",
			"Repositories/RepositorioReserva.cs",
			"Controllers/ReservasController.cs",
			"Views/Reservas/crear.cshtml"
		],
		items: [
			{
				id: "I07-a",
				label: "CRUD básico de reserva",
				inRepo: true
			},
			{
				id: "I07-b",
				label: "Validación Hasta ≥ Desde",
				inRepo: true
			},
			{
				id: "I07-c",
				label: "Guardar FechaHastaOriginal al crear",
				inRepo: true
			},
			{
				id: "I07-d",
				label: "UsuarioCreadorId desde sesión (no value=1)",
				inRepo: false
			},
			{
				id: "I07-e",
				label: "JOIN para devolver dirección e inquilino",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "I08",
		owner: "ian",
		group: "Reservas",
		title: "Control de solapamiento de fechas",
		narrative: "Se debe volver a verificar que el inmueble no esté ocupado en esas fechas por otra reserva.",
		status: "falta",
		pct: 15,
		evidence: "Solo se valida el orden de fechas. No hay query de overlap. Reservas finalizadas anticipadamente deberían liberar el inmueble desde FechaFinalizacionAnticipada.",
		missing: "Método EstaOcupado(inmuebleId, desde, hasta, excluirReservaId). Usar FechaHasta efectiva (anticipada o original). Ignorar reservas finalizadas cuya fecha efectiva ya pasó.",
		files: ["Repositories/RepositorioReserva.cs", "Controllers/ABMController.cs"],
		items: [
			{
				id: "I08-a",
				label: "Validación de orden de fechas",
				inRepo: true
			},
			{
				id: "I08-b",
				label: "Query de solapamiento al crear",
				inRepo: false
			},
			{
				id: "I08-c",
				label: "Query de solapamiento al editar",
				inRepo: false
			},
			{
				id: "I08-d",
				label: "Considerar terminación anticipada como fecha efectiva",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "I09",
		owner: "ian",
		group: "Reservas",
		title: "Búsqueda de inmuebles libres por fechas y características",
		narrative: "La agencia busca inmuebles no ocupados en esas fechas. Si hay adecuados, se entrega una lista. Si interesa, se crea la reserva.",
		status: "falta",
		pct: 0,
		evidence: "No existe método ni pantalla de búsqueda por fechas/cupo/tipo. Coincide con el informe 8 de Dario: Ian expone la query, Dario el informe.",
		missing: "RepositorioInmueble.BuscarDisponibles(desde, hasta, cupo?, tipoId?, precioMax?). Filtrar Disponible=1 y sin overlap.",
		files: ["Repositories/IRepositorioInmueble.cs"],
		items: [
			{
				id: "I09-a",
				label: "Contrato BuscarDisponibles en el repositorio",
				inRepo: false
			},
			{
				id: "I09-b",
				label: "Filtros cupo / tipo / precio",
				inRepo: false
			},
			{
				id: "I09-c",
				label: "Acción del controlador que Dario reutiliza",
				inRepo: false
			}
		],
		priority: "critica",
		dependsOn: ["I08", "I06"]
	},
	{
		id: "I10",
		owner: "ian",
		group: "Reservas",
		title: "Seña al crear la reserva",
		narrative: "Los inmuebles establecen el porcentaje de alquiler que se debe pagar al momento de realizar la reserva.",
		status: "falta",
		pct: 10,
		evidence: "PorcentajeSenia está en Inmueble. Nunca se usa al crear Reserva. No existe Pago.",
		missing: "Calcular seña = montoPorDia * días * porcentaje/100. Crear Pago automático concepto 'Seña'. No confirmar reserva si no se registra el pago (definir regla con el equipo).",
		files: ["Models/Inmueble.cs"],
		items: [
			{
				id: "I10-a",
				label: "Campo PorcentajeSenia en inmueble",
				inRepo: true
			},
			{
				id: "I10-b",
				label: "Cálculo de seña al crear reserva",
				inRepo: false
			},
			{
				id: "I10-c",
				label: "Alta automática del pago 'Seña'",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I11"]
	},
	{
		id: "I11",
		owner: "ian",
		group: "Pagos",
		title: "Módulo Pago (modelo, repo, controlador)",
		narrative: "Cada reserva tiene pagos: concepto, fecha e importe. Seña, pago total, multa, etc.",
		status: "falta",
		pct: 5,
		evidence: "Tabla Pago en SQL con Anulado, UsuarioCreadorId, UsuarioAnuladorId. Cero código C# y cero seed.",
		missing: "Models/Pago.cs, IRepositorioPago, RepositorioPago, PagosController (o acciones anidadas en Reservas). DI en Program.cs.",
		files: ["Database/DBInmobiliaria_DeborahGomez.sql"],
		items: [
			{
				id: "I11-a",
				label: "Tabla SQL Pago",
				inRepo: true
			},
			{
				id: "I11-b",
				label: "Modelo + repositorio + controlador",
				inRepo: false
			},
			{
				id: "I11-c",
				label: "Listar pagos de una reserva",
				inRepo: false
			},
			{
				id: "I11-d",
				label: "Alta de pago asociado a reserva",
				inRepo: false
			},
			{
				id: "I11-e",
				label: "Registrar en DI (Program.cs)",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "I12",
		owner: "ian",
		group: "Pagos",
		title: "Editar pago: solo el concepto",
		narrative: "En los pagos, al editar, solo se puede editar el concepto, no el monto o fecha.",
		status: "falta",
		pct: 0,
		evidence: "No hay edición de pagos.",
		missing: "Update que solo setea Concepto. Ignorar Importe/FechaPago aunque vengan en el POST.",
		files: [],
		items: [{
			id: "I12-a",
			label: "Modificacion actualiza únicamente Concepto",
			inRepo: false
		}, {
			id: "I12-b",
			label: "Rechazar edición si el pago está anulado",
			inRepo: false
		}],
		priority: "alta",
		dependsOn: ["I11"]
	},
	{
		id: "I13",
		owner: "ian",
		group: "Pagos",
		title: "Anular pago (cambio de estado, sigue visible)",
		narrative: "La eliminación debe ser un cambio de estado: se siguen mostrando pero especificando que el pago está anulado.",
		status: "falta",
		pct: 0,
		evidence: "Columna Anulado y UsuarioAnuladorId existen en SQL. Baja de otras entidades es DELETE físico.",
		missing: "Nunca DELETE. SET Anulado=1, UsuarioAnuladorId=sesión. Listados muestran badge Anulado. Solo admin anula.",
		files: ["Database/DBInmobiliaria_DeborahGomez.sql"],
		items: [
			{
				id: "I13-a",
				label: "Columnas Anulado / UsuarioAnuladorId",
				inRepo: true
			},
			{
				id: "I13-b",
				label: "Anular en lugar de DELETE",
				inRepo: false
			},
			{
				id: "I13-c",
				label: "Queda visible en el listado",
				inRepo: false
			},
			{
				id: "I13-d",
				label: "Solo administrador puede anular",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I11", "I18"]
	},
	{
		id: "I14",
		owner: "ian",
		group: "Reservas",
		title: "Terminación anticipada y cálculo de multa",
		narrative: "Si cumplió menos de la mitad del tiempo original, paga 50% restante. Si no, 25%. Informar el valor, cargar el pago en la misma pantalla. Si no paga en el momento, no se finaliza. No se pierde FechaHasta original. En ningún caso se devuelve dinero.",
		status: "falta",
		pct: 12,
		evidence: "Campos FechaHastaOriginal, FechaFinalizacionAnticipada, MontoMulta, UsuarioFinalizadorId, Finalizada existen. Cero lógica.",
		missing: "Servicio CalcularMulta(reserva, fechaEfectiva). Acción Terminar. Crear Pago 'Multa por terminación'. Transacción: pago + marcar finalizada. Si el pago falla, no finalizar.",
		files: ["Models/Reserva.cs", "Repositories/RepositorioReserva.cs"],
		items: [
			{
				id: "I14-a",
				label: "Campos de multa y fecha anticipada en el modelo",
				inRepo: true
			},
			{
				id: "I14-b",
				label: "Cálculo 50% / 25% sobre días restantes × monto",
				inRepo: false
			},
			{
				id: "I14-c",
				label: "Pantalla que informa la multa",
				inRepo: false
			},
			{
				id: "I14-d",
				label: "Alta del pago multa en la misma operación",
				inRepo: false
			},
			{
				id: "I14-e",
				label: "No finalizar si no hay pago",
				inRepo: false
			},
			{
				id: "I14-f",
				label: "No tocar FechaHastaOriginal",
				inRepo: false
			},
			{
				id: "I14-g",
				label: "Nunca devolver dinero (no hay acción de reembolso)",
				inRepo: false
			}
		],
		priority: "critica",
		dependsOn: ["I11"]
	},
	{
		id: "I15",
		owner: "ian",
		group: "Reservas",
		title: "Renovar / extender reserva",
		narrative: "No modificar la reserva inicial: generar un nuevo alquiler, con nuevo monto y fechas, mismo inquilino e inmueble.",
		status: "falta",
		pct: 0,
		evidence: "No hay acción Renovar. Editar sí permite cambiar fechas de la reserva original (viola la narrativa).",
		missing: "Acción Renovar: prefill inquilino+inmueble, nuevas fechas a partir de FechaHasta, verificar overlap, UsuarioCreadorId de sesión. La original queda intacta.",
		files: ["Controllers/ReservasController.cs"],
		items: [
			{
				id: "I15-a",
				label: "Acción Renovar que crea una reserva nueva",
				inRepo: false
			},
			{
				id: "I15-b",
				label: "No altera la reserva original",
				inRepo: false
			},
			{
				id: "I15-c",
				label: "Verifica disponibilidad del período nuevo",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I08"]
	},
	{
		id: "I16",
		owner: "ian",
		group: "Auth",
		title: "Login con email y contraseña",
		narrative: "El sistema debe contar con acceso por usuario y contraseña.",
		status: "falta",
		pct: 8,
		evidence: "Tabla Usuario (Email, PasswordHash, Rol, Avatar). Program.cs llama UseAuthorization() sin AddAuthentication ni cookie. PasswordHash VARCHAR(45) no entra un hash BCrypt.",
		missing: "Cookie auth, login/logout, hash BCrypt/PBKDF2, ampliar PasswordHash a VARCHAR(255), [Authorize] global, seed de admin.",
		files: ["Database/DBInmobiliaria_DeborahGomez.sql", "Program.cs"],
		items: [
			{
				id: "I16-a",
				label: "Tabla Usuario",
				inRepo: true
			},
			{
				id: "I16-b",
				label: "AddAuthentication + cookie scheme",
				inRepo: false
			},
			{
				id: "I16-c",
				label: "Login / Logout",
				inRepo: false
			},
			{
				id: "I16-d",
				label: "Hash seguro (no guardar plano)",
				inRepo: false
			},
			{
				id: "I16-e",
				label: "Ampliar PasswordHash (VARCHAR 45 es corto)",
				inRepo: false
			},
			{
				id: "I16-f",
				label: "[Authorize] en ABMController",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "I17",
		owner: "ian",
		group: "Auth",
		title: "Roles administrador y empleado",
		narrative: "Solo los administradores pueden eliminar entidades. Solo los administradores pueden gestionar a otros usuarios.",
		status: "falta",
		pct: 5,
		evidence: "ENUM Rol en SQL. Ningún [Authorize(Roles=...)]. Baja() es pública.",
		missing: "Policies AdminOnly / Empleado. Ocultar botones Eliminar. Filtro en EliminarConfirmado.",
		files: ["Database/DBInmobiliaria_DeborahGomez.sql", "Controllers/ABMController.cs"],
		items: [
			{
				id: "I17-a",
				label: "ENUM Administrador / Empleado",
				inRepo: true
			},
			{
				id: "I17-b",
				label: "Policies y [Authorize(Roles)]",
				inRepo: false
			},
			{
				id: "I17-c",
				label: "EliminarConfirmado solo admin",
				inRepo: false
			}
		],
		priority: "critica",
		dependsOn: ["I16"]
	},
	{
		id: "I18",
		owner: "ian",
		group: "Auth",
		title: "ABM de usuarios (solo admin)",
		narrative: "Los administradores pueden gestionar a otros usuarios.",
		status: "falta",
		pct: 0,
		evidence: "No hay modelo, repo, controlador ni vistas de Usuario.",
		missing: "CRUD Usuario. No permitir borrar el último admin. No auto-degradarse.",
		files: [],
		items: [
			{
				id: "I18-a",
				label: "Modelo Usuario + repositorio",
				inRepo: false
			},
			{
				id: "I18-b",
				label: "UsuariosController [Authorize(Roles=Administrador)]",
				inRepo: false
			},
			{
				id: "I18-c",
				label: "Alta con hash de password",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I16"]
	},
	{
		id: "I19",
		owner: "ian",
		group: "Auth",
		title: "Perfil del empleado (datos, contraseña, avatar)",
		narrative: "Los empleados solo pueden manipular su propio perfil (cambiar datos personales, contraseña y avatar).",
		status: "falta",
		pct: 5,
		evidence: "Columna Avatar VARCHAR(45). No hay perfil.",
		missing: "CuentaController: editar email, password (con actual), upload avatar. Ampliar VARCHAR.",
		files: ["Database/DBInmobiliaria_DeborahGomez.sql"],
		items: [
			{
				id: "I19-a",
				label: "Columna Avatar",
				inRepo: true
			},
			{
				id: "I19-b",
				label: "Editar perfil propio",
				inRepo: false
			},
			{
				id: "I19-c",
				label: "Cambio de contraseña",
				inRepo: false
			},
			{
				id: "I19-d",
				label: "Upload de avatar",
				inRepo: false
			}
		],
		priority: "media",
		dependsOn: ["I16"]
	},
	{
		id: "I20",
		owner: "ian",
		group: "Auditoría",
		title: "Auditoría de reservas (creador / quien terminó)",
		narrative: "Registrar qué usuario creó una reserva y, en caso que corresponda, quién la terminó. Visible solo para administradores en la vista de detalle.",
		status: "parcial",
		pct: 22,
		evidence: "UsuarioCreadorId y UsuarioFinalizadorId en tabla y modelo. Alta hardcodea 1. Falta FK de UsuarioFinalizadorId. No hay detalle ni filtro por rol.",
		missing: "Setear IDs desde sesión. FK faltante. ObtenerPorId con emails. Endpoint de detalle. Ocultar a empleados.",
		files: ["Models/Reserva.cs", "Database/DBInmobiliaria_DeborahGomez.sql"],
		items: [
			{
				id: "I20-a",
				label: "Columnas UsuarioCreadorId / UsuarioFinalizadorId",
				inRepo: true
			},
			{
				id: "I20-b",
				label: "Setear desde el usuario autenticado",
				inRepo: false
			},
			{
				id: "I20-c",
				label: "FK de UsuarioFinalizadorId",
				inRepo: false
			},
			{
				id: "I20-d",
				label: "Detalle con auditoría (solo admin)",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I16"]
	},
	{
		id: "I21",
		owner: "ian",
		group: "Auditoría",
		title: "Auditoría de pagos (creador / quien anuló)",
		narrative: "Similar para pagos: quién lo creó y, en caso que corresponda, quién lo anuló.",
		status: "falta",
		pct: 8,
		evidence: "Columnas en SQL. Cero código.",
		missing: "Persistir IDs en alta/anulación. Exponerlos en detalle admin.",
		files: ["Database/DBInmobiliaria_DeborahGomez.sql"],
		items: [
			{
				id: "I21-a",
				label: "Columnas SQL de auditoría de pago",
				inRepo: true
			},
			{
				id: "I21-b",
				label: "Grabar creador y anulador desde sesión",
				inRepo: false
			},
			{
				id: "I21-c",
				label: "Mostrar en detalle admin",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I11", "I16"]
	},
	{
		id: "I22",
		owner: "ian",
		group: "Transversal",
		title: "Paginado por servidor",
		narrative: "Los listados deben contar con paginado por servidor.",
		status: "parcial",
		pct: 45,
		evidence: "IRepositorio.ObtenerLista(..., pagina, tamPagina) y ObtenerCantidad. ABMController.Index llama ObtenerLista pero no pasa el total. Las vistas no tienen pager.",
		missing: "ViewModel (Items, Pagina, Total, TamPagina, Busqueda). Pager en cada Index (Deboh dibuja; Ian entrega el modelo).",
		files: ["Repositories/IRepositorio.cs", "Controllers/ABMController.cs"],
		items: [
			{
				id: "I22-a",
				label: "LIMIT/OFFSET en repositorios",
				inRepo: true
			},
			{
				id: "I22-b",
				label: "ObtenerCantidad",
				inRepo: true
			},
			{
				id: "I22-c",
				label: "Index arma ViewModel con total",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "I23",
		owner: "ian",
		group: "Transversal",
		title: "Búsquedas resueltas en el servidor",
		narrative: "Las búsquedas deben ser resueltas en el servidor.",
		status: "parcial",
		pct: 50,
		evidence: "Propietario/Inquilino/Tipo/Inmueble filtran en SQL. Reserva ignora @busqueda. Ninguna vista envía el form.",
		missing: "Implementar filtro en Reserva (inquilino, dirección, fechas). Aceptar querystring busqueda.",
		files: ["Repositories/RepositorioReserva.cs", "Controllers/ABMController.cs"],
		items: [
			{
				id: "I23-a",
				label: "Filtro SQL en 4 de 5 entidades",
				inRepo: true
			},
			{
				id: "I23-b",
				label: "Reserva.ObtenerLista usa el parámetro busqueda",
				inRepo: false
			},
			{
				id: "I23-c",
				label: "Búsqueda por más campos (inmueble: tipo, dueño)",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "I24",
		owner: "ian",
		group: "Transversal",
		title: "Selects con búsqueda servidor",
		narrative: "La selección de valores tipo desplegable debe realizarse con filtro o búsqueda en el servidor para evitar traer todos los valores.",
		status: "falta",
		pct: 10,
		evidence: "InmueblesController y ReservasController hacen ObtenerLista(tamPagina: 1000) en OnActionExecuting. Viola la narrativa.",
		missing: "Endpoints JSON /buscar?q= con LIMIT 20. Deboh conecta TomSelect/Select2.",
		files: ["Controllers/InmueblesController.cs", "Controllers/ReservasController.cs"],
		items: [
			{
				id: "I24-a",
				label: "Quitar tamPagina:1000 de OnActionExecuting",
				inRepo: false
			},
			{
				id: "I24-b",
				label: "GET /buscar.json?q= con LIMIT 20",
				inRepo: false
			},
			{
				id: "I24-c",
				label: "Endpoints para propietario, inquilino, inmueble, tipo",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "I25",
		owner: "ian",
		group: "Datos",
		title: "Seed de Usuario, Reserva y Pago",
		narrative: "Datos de prueba para poder ejercitar reservas y pagos.",
		status: "falta",
		pct: 0,
		evidence: "Seed.sql carga propietarios, inquilinos, tipos e inmuebles. Bloques de pago/reserva/usuario vacíos. Crear reserva hoy revienta por FK UsuarioCreadorId.",
		missing: "Al menos 1 admin + 1 empleado (hash conocido), 4–6 reservas (vigentes, pasadas, solapables), pagos de seña y un anulado.",
		files: ["Database/Seed.sql"],
		items: [
			{
				id: "I25-a",
				label: "Seed de entidades base",
				inRepo: true
			},
			{
				id: "I25-b",
				label: "INSERT Usuario admin y empleado",
				inRepo: false
			},
			{
				id: "I25-c",
				label: "INSERT Reserva de prueba",
				inRepo: false
			},
			{
				id: "I25-d",
				label: "INSERT Pago de prueba (uno anulado)",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "I26",
		owner: "ian",
		group: "Datos",
		title: "Ajustes de esquema (FKs, tamaños, imágenes)",
		narrative: "El modelo de datos debe sostener auth, pagos, auditoría e imágenes.",
		status: "parcial",
		pct: 55,
		evidence: "7 tablas alineadas al DER. Faltan FKs de UsuarioFinalizadorId y UsuarioAnuladorId, tabla de galería, tamaños de VARCHAR.",
		missing: "Migración: VARCHAR Email/PasswordHash/Avatar/Url, FKs, tabla ImagenInmueble, unique Dni.",
		files: ["Database/DBInmobiliaria_DeborahGomez.sql"],
		items: [
			{
				id: "I26-a",
				label: "Tablas Propietario, Tipo, Inmueble, Inquilino, Reserva, Pago, Usuario",
				inRepo: true
			},
			{
				id: "I26-b",
				label: "FK UsuarioFinalizadorId y UsuarioAnuladorId",
				inRepo: false
			},
			{
				id: "I26-c",
				label: "UNIQUE de DNI",
				inRepo: false
			},
			{
				id: "I26-d",
				label: "Tabla ImagenInmueble",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "D01",
		owner: "deboh",
		group: "Sistema visual",
		title: "Identidad visual y CSS propio",
		narrative: "La aplicación debe verse como una agencia inmobiliaria, no como el template de ASP.NET.",
		status: "falta",
		pct: 5,
		evidence: "wwwroot/css/site.css es el CSS por defecto (14px, focus azul Bootstrap). Cero tokens, cero marca.",
		missing: "Paleta, tipografías, botones, tablas, forms, badges de estado, espaciado. Dejar Bootstrap como base o reemplazarlo, pero con una hoja propia.",
		files: ["wwwroot/css/site.css", "Views/Shared/_Layout.cshtml.css"],
		items: [
			{
				id: "D01-a",
				label: "Hoja de estilos del template",
				inRepo: true
			},
			{
				id: "D01-b",
				label: "Tokens: color, tipo, radio, sombra",
				inRepo: false
			},
			{
				id: "D01-c",
				label: "Estilos de tabla, form, badge, pager",
				inRepo: false
			},
			{
				id: "D01-d",
				label: "Quitar look 'Welcome ASP.NET Core'",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "D02",
		owner: "deboh",
		group: "Sistema visual",
		title: "Layout, navbar y navegación",
		narrative: "Acceso claro a ABM, informes, perfil y login.",
		status: "parcial",
		pct: 28,
		evidence: "Navbar con Home, Privacy, Propietarios, Inquilinos, Inmuebles, Tipo, Reservas. Typo text-darck. Sobra Privacy. Faltan Informes, Pagos, Usuarios, Login.",
		missing: "Marca de la agencia, menú Informes, cuenta/avatar, login/logout, quitar Privacy, corregir typo, agrupar ABM.",
		files: ["Views/Shared/_Layout.cshtml"],
		items: [
			{
				id: "D02-a",
				label: "Navbar con links a ABMs existentes",
				inRepo: true
			},
			{
				id: "D02-b",
				label: "Corregir clase text-darck",
				inRepo: false
			},
			{
				id: "D02-c",
				label: "Menú Informes",
				inRepo: false
			},
			{
				id: "D02-d",
				label: "Login / avatar / logout",
				inRepo: false
			},
			{
				id: "D02-e",
				label: "Quitar Privacy y reescribir footer",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "D03",
		owner: "deboh",
		group: "Sistema visual",
		title: "Home de la agencia (no el template)",
		narrative: "Punto de entrada del empleado: atajos a ABM, reservas vigentes, búsqueda de inmuebles.",
		status: "falta",
		pct: 0,
		evidence: "Views/Home/Index.cshtml sigue diciendo 'Welcome' y link a docs de Microsoft.",
		missing: "Dashboard: KPIs simples, accesos, reservas que vencen (cuando Dario tenga el informe).",
		files: ["Views/Home/Index.cshtml"],
		items: [
			{
				id: "D03-a",
				label: "Reemplazar Welcome ASP.NET",
				inRepo: false
			},
			{
				id: "D03-b",
				label: "Atajos a propietarios / inmuebles / reservas",
				inRepo: false
			},
			{
				id: "D03-c",
				label: "Panel de 'reservas que vencen' (consume informe de Dario)",
				inRepo: false
			}
		],
		priority: "media"
	},
	{
		id: "D04",
		owner: "deboh",
		group: "Views ABM",
		title: "Views Propietarios (index, crear, editar, eliminar)",
		narrative: "ABM visual de propietarios.",
		status: "parcial",
		pct: 55,
		evidence: "Crear/editar usan form-control y btn-primary. Index es una <table> cruda sin clases, sin búsqueda, sin pager, sin empty state. Eliminar muestra datos y confirma.",
		missing: "Tabla Bootstrap/propia, buscador, pager, empty, botones de acción, validación visual uniforme.",
		files: [
			"Views/Propietarios/index.cshtml",
			"Views/Propietarios/crear.cshtml",
			"Views/Propietarios/editar.cshtml",
			"Views/Propietarios/eliminar.cshtml"
		],
		items: [
			{
				id: "D04-a",
				label: "Formularios crear/editar con Bootstrap",
				inRepo: true
			},
			{
				id: "D04-b",
				label: "Pantalla confirmar eliminar",
				inRepo: true
			},
			{
				id: "D04-c",
				label: "Index estilizado + empty state",
				inRepo: false
			},
			{
				id: "D04-d",
				label: "Form de búsqueda",
				inRepo: false
			},
			{
				id: "D04-e",
				label: "Paginador visual",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "D05",
		owner: "deboh",
		group: "Views ABM",
		title: "Views Inquilinos",
		narrative: "ABM visual de inquilinos (DNI, nombre, contacto).",
		status: "parcial",
		pct: 50,
		evidence: "Mismo patrón: forms aceptables, index crudo.",
		missing: "Igual que propietarios: tabla, búsqueda, pager, consistencia.",
		files: [
			"Views/Inquilinos/index.cshtml",
			"Views/Inquilinos/crear.cshtml",
			"Views/Inquilinos/editar.cshtml",
			"Views/Inquilinos/eliminar.cshtml"
		],
		items: [{
			id: "D05-a",
			label: "Esqueleto de las 4 vistas",
			inRepo: true
		}, {
			id: "D05-b",
			label: "Index + búsqueda + pager al mismo estándar que Propietarios",
			inRepo: false
		}],
		priority: "alta"
	},
	{
		id: "D06",
		owner: "deboh",
		group: "Views ABM",
		title: "Views Tipo de inmueble",
		narrative: "ABM visual de tipos.",
		status: "parcial",
		pct: 48,
		evidence: "Index/crear/editar/eliminar existen. Index crudo.",
		missing: "Mismo sistema de listado. Ocultar Eliminar a empleados (Ian da el flag, Deboh lo respeta en la vista).",
		files: ["Views/TipoInmueble/index.cshtml", "Views/TipoInmueble/crear.cshtml"],
		items: [
			{
				id: "D06-a",
				label: "4 vistas existentes",
				inRepo: true
			},
			{
				id: "D06-b",
				label: "Listado al estándar visual",
				inRepo: false
			},
			{
				id: "D06-c",
				label: "Ocultar Eliminar si el usuario no es admin",
				inRepo: false
			}
		],
		priority: "media"
	},
	{
		id: "D07",
		owner: "deboh",
		group: "Views ABM",
		title: "Views Inmuebles",
		narrative: "Alta con todos los campos, listado con dueño, imagen, estado.",
		status: "parcial",
		pct: 38,
		evidence: "Index muestra tipo, dueño, cupo, precio, disponible. Crear tiene los campos. Editar: Latitud está bindeada a Longitud. Eliminar: h1 roto y asp-controller='Inmueble' (singular, 404). Sin imagen. Selects nativos.",
		missing: "Corregir bugs, mostrar portada, badge Disponible, selects con búsqueda, detalle, filtros.",
		files: [
			"Views/Inmuebles/index.cshtml",
			"Views/Inmuebles/crear.cshtml",
			"Views/Inmuebles/editar.cshtml",
			"Views/Inmuebles/eliminar.cshtml"
		],
		items: [
			{
				id: "D07-a",
				label: "Index lista dueño, tipo, precio, disponible",
				inRepo: true
			},
			{
				id: "D07-b",
				label: "Form crear con campos de la narrativa",
				inRepo: true
			},
			{
				id: "D07-c",
				label: "Fix Latitud bindeada a Longitud en editar",
				inRepo: false
			},
			{
				id: "D07-d",
				label: "Fix h1 y controller Inmueble→Inmuebles en eliminar",
				inRepo: false
			},
			{
				id: "D07-e",
				label: "Mostrar miniatura de portada",
				inRepo: false
			},
			{
				id: "D07-f",
				label: "Badge Disponible / Suspendido",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "D08",
		owner: "deboh",
		group: "Views ABM",
		title: "Views Reservas + detalle",
		narrative: "Alta de reserva, listado, detalle con auditoría (admin), acciones terminar y renovar.",
		status: "parcial",
		pct: 32,
		evidence: "Index muestra IDs de inmueble/inquilino, no nombres. Crear tiene fechas y selects. Editar esconde campos de multa. No hay Detalle, Terminar ni Renovar.",
		missing: "Mostrar dirección y nombre. Detalle. Formularios Terminar (multa visible, confirmar pago) y Renovar. Ocultar auditoría a empleados.",
		files: [
			"Views/Reservas/index.cshtml",
			"Views/Reservas/crear.cshtml",
			"Views/Reservas/editar.cshtml",
			"Views/Reservas/eliminar.cshtml"
		],
		items: [
			{
				id: "D08-a",
				label: "4 vistas CRUD básicas",
				inRepo: true
			},
			{
				id: "D08-b",
				label: "Listado con nombres, no IDs",
				inRepo: false
			},
			{
				id: "D08-c",
				label: "Vista Detalle (auditoría solo admin)",
				inRepo: false
			},
			{
				id: "D08-d",
				label: "Vista Terminar con multa y alta de pago",
				inRepo: false
			},
			{
				id: "D08-e",
				label: "Vista Renovar",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "D09",
		owner: "deboh",
		group: "Views ABM",
		title: "Views Pagos",
		narrative: "Listado de pagos de una reserva, alta, editar concepto, anular (sigue visible).",
		status: "falta",
		pct: 0,
		evidence: "No existe carpeta Views/Pagos.",
		missing: "Index por reserva, crear, editar (solo concepto, monto/fecha readonly), anular con confirmación, fila tachada + badge Anulado. Dario reutiliza el alta desde su informe.",
		files: [],
		items: [
			{
				id: "D09-a",
				label: "Index de pagos de una reserva",
				inRepo: false
			},
			{
				id: "D09-b",
				label: "Alta de pago",
				inRepo: false
			},
			{
				id: "D09-c",
				label: "Editar: concepto editable, resto readonly",
				inRepo: false
			},
			{
				id: "D09-d",
				label: "Anulado visible, no desaparece",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I11"]
	},
	{
		id: "D10",
		owner: "deboh",
		group: "Views ABM",
		title: "Views Login, usuarios y perfil",
		narrative: "Acceso, gestión de usuarios (admin) y perfil propio (empleado).",
		status: "falta",
		pct: 0,
		evidence: "No hay login ni perfil.",
		missing: "Login, Usuarios/index-crear-editar, Perfil con avatar. Mostrar rol en el header.",
		files: [],
		items: [
			{
				id: "D10-a",
				label: "Vista Login",
				inRepo: false
			},
			{
				id: "D10-b",
				label: "ABM Usuarios (admin)",
				inRepo: false
			},
			{
				id: "D10-c",
				label: "Perfil propio + avatar",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I16"]
	},
	{
		id: "D11",
		owner: "deboh",
		group: "Componentes UI",
		title: "Paginador visual reutilizable",
		narrative: "Los listados deben contar con paginado por servidor — la UI lo tiene que mostrar.",
		status: "falta",
		pct: 0,
		evidence: "Ningún Index renderiza páginas. ObtenerCantidad existe y no se usa.",
		missing: "Partial _Paginador.cshtml (anterior/siguiente, n de m, size 10).",
		files: [],
		items: [{
			id: "D11-a",
			label: "Partial de paginador",
			inRepo: false
		}, {
			id: "D11-b",
			label: "Incluirlo en todos los Index de ABM",
			inRepo: false
		}],
		priority: "alta",
		dependsOn: ["I22"]
	},
	{
		id: "D12",
		owner: "deboh",
		group: "Componentes UI",
		title: "Buscador en cada listado",
		narrative: "Las búsquedas se resuelven en el servidor — la vista debe enviarlas.",
		status: "falta",
		pct: 5,
		evidence: "Index(string? busqueda) existe. Ningún form lo posteó.",
		missing: "Barra de búsqueda GET que preserve pagina=1.",
		files: ["Controllers/ABMController.cs"],
		items: [{
			id: "D12-a",
			label: "El controlador acepta ?busqueda=",
			inRepo: true
		}, {
			id: "D12-b",
			label: "Form de búsqueda en cada Index",
			inRepo: false
		}],
		priority: "alta"
	},
	{
		id: "D13",
		owner: "deboh",
		group: "Componentes UI",
		title: "Desplegables con filtro (no traer todos)",
		narrative: "Selects con búsqueda en el servidor.",
		status: "falta",
		pct: 0,
		evidence: "Select nativo recorriendo ViewBag completo (hasta 1000).",
		missing: "TomSelect/Select2 ajax contra /buscar.json de Ian. Aplicar en inmueble, reserva, informes.",
		files: ["Views/Inmuebles/crear.cshtml", "Views/Reservas/crear.cshtml"],
		items: [
			{
				id: "D13-a",
				label: "Selects nativos actuales",
				inRepo: true
			},
			{
				id: "D13-b",
				label: "Componente con typeahead ajax",
				inRepo: false
			},
			{
				id: "D13-c",
				label: "Usarlo en ABM e informes",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I24"]
	},
	{
		id: "D14",
		owner: "deboh",
		group: "Componentes UI",
		title: "UI de portada y galería",
		narrative: "Imagen de portada y otras varias del inmueble.",
		status: "falta",
		pct: 0,
		evidence: "Ningún input file ni galería.",
		missing: "Upload, grilla, marcar portada, borrar. Miniatura en index y detalle.",
		files: ["Views/Inmuebles/crear.cshtml"],
		items: [{
			id: "D14-a",
			label: "Input file de portada",
			inRepo: false
		}, {
			id: "D14-b",
			label: "Galería con marcar portada / borrar",
			inRepo: false
		}],
		priority: "media",
		dependsOn: ["I05"]
	},
	{
		id: "D15",
		owner: "deboh",
		group: "Pulido",
		title: "Empty states, validaciones, toasts, confirmaciones",
		narrative: "La carga diaria de la agencia no puede ser una tabla vacía o un 500 crudo.",
		status: "parcial",
		pct: 18,
		evidence: "Algunos span de validación. Eliminar es una página de confirmación. No hay empty ni toasts. TempData no se usa.",
		missing: "Empty, TempData alerts, validation summary consistente, botones disabled en submit.",
		files: ["Views/Shared/_ValidationScriptsPartial.cshtml"],
		items: [
			{
				id: "D15-a",
				label: "Validación unobtrusive incluida",
				inRepo: true
			},
			{
				id: "D15-b",
				label: "Empty state 'no hay resultados'",
				inRepo: false
			},
			{
				id: "D15-c",
				label: "Alertas de éxito/error (TempData)",
				inRepo: false
			}
		],
		priority: "media"
	},
	{
		id: "D16",
		owner: "deboh",
		group: "Pulido",
		title: "Responsive y tablas que no se desborden",
		narrative: "Usable en notebook y en pantalla chica de la agencia.",
		status: "parcial",
		pct: 15,
		evidence: "Navbar toggler de Bootstrap. Tablas sin table-responsive. Forms de inmueble/reserva sin grid.",
		missing: "table-responsive, stack de acciones, forms en 2 columnas, tap targets.",
		files: ["Views/Shared/_Layout.cshtml"],
		items: [
			{
				id: "D16-a",
				label: "Navbar colapsable",
				inRepo: true
			},
			{
				id: "D16-b",
				label: "Tablas con scroll horizontal controlado",
				inRepo: false
			},
			{
				id: "D16-c",
				label: "Forms en grid 2 col / 1 col mobile",
				inRepo: false
			}
		],
		priority: "media"
	},
	{
		id: "D17",
		owner: "deboh",
		group: "Pulido",
		title: "Corregir bugs de vistas ya detectados",
		narrative: "Las vistas actuales tienen errores que impiden usar el ABM.",
		status: "falta",
		pct: 0,
		evidence: "eliminar.cshtml inmueble: h1 mal cerrado, controller 'Inmueble'. editar.cshtml: Latitud usa asp-for='Longitud'. Layout: text-darck. Reservas/eliminar: hidden IdReserva vs parámetro id.",
		missing: "Parche de los 4 bugs. Smoke manual de cada ABM.",
		files: [
			"Views/Inmuebles/eliminar.cshtml",
			"Views/Inmuebles/editar.cshtml",
			"Views/Shared/_Layout.cshtml",
			"Views/Reservas/eliminar.cshtml"
		],
		items: [
			{
				id: "D17-a",
				label: "Fix eliminar inmueble (h1 + controller)",
				inRepo: false
			},
			{
				id: "D17-b",
				label: "Fix bind Latitud en editar",
				inRepo: false
			},
			{
				id: "D17-c",
				label: "Fix text-darck",
				inRepo: false
			},
			{
				id: "D17-d",
				label: "Fix hidden de eliminar reserva (name=id)",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "D18",
		owner: "deboh",
		group: "Pulido",
		title: "Chrome de informes (tablas, filtros, estados)",
		narrative: "Los informes de Dario deben verse con el mismo sistema visual.",
		status: "falta",
		pct: 0,
		evidence: "No hay vistas de informes. Deboh define el partial de filtros + tabla; Dario lo instancia.",
		missing: "_InformeLayout / _Filtros / tabla. Export visual (imprimir).",
		files: [],
		items: [
			{
				id: "D18-a",
				label: "Partial de filtros de informe",
				inRepo: false
			},
			{
				id: "D18-b",
				label: "Tabla de informe al estándar del ABM",
				inRepo: false
			},
			{
				id: "D18-c",
				label: "Estilo de impresión",
				inRepo: false
			}
		],
		priority: "media"
	},
	{
		id: "R00",
		owner: "dario",
		group: "Infraestructura",
		title: "Infra de informes (controller, repo, menú)",
		narrative: "Ocho informes con paginado y búsqueda servidor.",
		status: "falta",
		pct: 0,
		evidence: "No hay InformesController, ni RepositorioInformes, ni Views/Informes, ni link en el layout. HomeController no cuenta.",
		missing: "InformesController con una acción por informe. RepositorioInformes con SQL. Views. Item de menú (Deboh lo cuelga en el layout).",
		files: [],
		items: [
			{
				id: "R00-a",
				label: "InformesController",
				inRepo: false
			},
			{
				id: "R00-b",
				label: "RepositorioInformes / consultas dedicadas",
				inRepo: false
			},
			{
				id: "R00-c",
				label: "Carpeta Views/Informes",
				inRepo: false
			},
			{
				id: "R00-d",
				label: "Registrar DI en Program.cs",
				inRepo: false
			}
		],
		priority: "critica"
	},
	{
		id: "R01",
		owner: "dario",
		group: "Informes",
		title: "Inmuebles y su dueño, filtro por Disponible",
		narrative: "Listar todos los inmuebles y su dueño. Permitir filtrar por disponibilidad (propiedad Estado/Disponible, no por fechas).",
		status: "parcial",
		pct: 12,
		evidence: "El Index de Inmuebles ya muestra dueño y Disponible, pero es el ABM, sin filtro por estado y sin pensarse como informe.",
		missing: "Informe propio: columnas dirección, tipo, dueño, cupo, precio, disponible. Filtro Disponible sí/no/todos. Paginado servidor. No reutilizar el ABM a ciegas: el informe no tiene botones de editar/borrar.",
		files: ["Views/Inmuebles/index.cshtml", "Repositories/RepositorioInmueble.cs"],
		items: [
			{
				id: "R01-a",
				label: "El ABM ya lista dueño y disponible",
				inRepo: true
			},
			{
				id: "R01-b",
				label: "Vista de informe (sin acciones de ABM)",
				inRepo: false
			},
			{
				id: "R01-c",
				label: "Filtro Disponible sí / no / todos",
				inRepo: false
			},
			{
				id: "R01-d",
				label: "Paginado servidor",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "R02",
		owner: "dario",
		group: "Informes",
		title: "Inmuebles de un propietario específico",
		narrative: "Listar todos los inmuebles que le correspondan a un propietario específico.",
		status: "falta",
		pct: 0,
		evidence: "No hay filtro por PropietarioId en el listado. El select debería ser con búsqueda servidor.",
		missing: "Filtro propietario (ajax). SQL WHERE PropietarioId=@id. Vacío si no se eligió dueño, o listar todos con el filtro obligatorio.",
		files: ["Repositories/RepositorioInmueble.cs"],
		items: [
			{
				id: "R02-a",
				label: "Query por PropietarioId",
				inRepo: false
			},
			{
				id: "R02-b",
				label: "Select de propietario con búsqueda",
				inRepo: false
			},
			{
				id: "R02-c",
				label: "Paginado",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: ["I24", "D13"]
	},
	{
		id: "R03",
		owner: "dario",
		group: "Informes",
		title: "Inmuebles más reservados en los últimos 365 días",
		narrative: "Listar los inmuebles más reservados en los últimos 365 días.",
		status: "falta",
		pct: 0,
		evidence: "No hay COUNT de reservas por inmueble ni filtro de fecha.",
		missing: "SQL GROUP BY InmuebleId WHERE FechaDesde >= NOW()-INTERVAL 365 DAY ORDER BY cantidad DESC. Incluir reservas finalizadas (sí se reservó). Mostrar cantidad y última reserva.",
		files: [],
		items: [
			{
				id: "R03-a",
				label: "Query agrupada últimos 365 días",
				inRepo: false
			},
			{
				id: "R03-b",
				label: "Columnas: inmueble, dueño, cantidad, última fecha",
				inRepo: false
			},
			{
				id: "R03-c",
				label: "Paginado",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "R04",
		owner: "dario",
		group: "Informes",
		title: "Inmuebles sin reservas en los últimos X días",
		narrative: "Listar los inmuebles sin reservas en los últimos X días (30, 60, etc.).",
		status: "falta",
		pct: 0,
		evidence: "No existe.",
		missing: "Parámetro X (30/60/90/custom). NOT EXISTS de Reserva en la ventana. Incluir inmuebles que nunca tuvieron reserva.",
		files: [],
		items: [
			{
				id: "R04-a",
				label: "Parámetro X (30/60/90/libre)",
				inRepo: false
			},
			{
				id: "R04-b",
				label: "Query NOT EXISTS / LEFT JOIN",
				inRepo: false
			},
			{
				id: "R04-c",
				label: "Paginado",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "R05",
		owner: "dario",
		group: "Informes",
		title: "Reservas vigentes (por fecha desde y hasta)",
		narrative: "Listar todas las reservas de alquiler que se encuentren vigentes (por fecha desde y hasta).",
		status: "falta",
		pct: 0,
		evidence: "El Index de reservas lista todas, sin filtro de vigencia.",
		missing: "Vigente = hoy ∈ [FechaDesde, FechaEfectiva] y no finalizada (o finalizada con fecha efectiva futura). Mostrar inquilino, inmueble, montos, días restantes.",
		files: ["Repositories/RepositorioReserva.cs"],
		items: [
			{
				id: "R05-a",
				label: "Definir fecha efectiva (anticipada vs original)",
				inRepo: false
			},
			{
				id: "R05-b",
				label: "Query de vigentes",
				inRepo: false
			},
			{
				id: "R05-c",
				label: "Listado con días restantes",
				inRepo: false
			},
			{
				id: "R05-d",
				label: "Paginado",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "R06",
		owner: "dario",
		group: "Informes",
		title: "Reservas que terminan en X días",
		narrative: "Listar todas las reservas que terminen en X días (permitir elegir o especificar plazo).",
		status: "falta",
		pct: 0,
		evidence: "No existe.",
		missing: "Parámetro X. FechaEfectiva BETWEEN hoy AND hoy+X. Input numérico + presets 7/15/30. Sirve para el dashboard de Deboh.",
		files: [],
		items: [
			{
				id: "R06-a",
				label: "Parámetro X editable + presets",
				inRepo: false
			},
			{
				id: "R06-b",
				label: "Query por fecha efectiva",
				inRepo: false
			},
			{
				id: "R06-c",
				label: "Paginado",
				inRepo: false
			}
		],
		priority: "alta"
	},
	{
		id: "R07",
		owner: "dario",
		group: "Informes",
		title: "Pagos de una reserva + cargar un pago desde el listado",
		narrative: "Listar los pagos realizados para una reserva en particular. Permitir cargar un nuevo pago a esa reserva desde la pantalla del listado.",
		status: "falta",
		pct: 0,
		evidence: "Cero pagos en código. Este informe es el más acoplado al módulo de Ian.",
		missing: "Elegir reserva (select con búsqueda). Tabla de pagos (anulados visibles). Form inline o modal de alta. No editar monto/fecha en esa grilla. Reusa IRepositorioPago de Ian.",
		files: [],
		items: [
			{
				id: "R07-a",
				label: "Elegir reserva con búsqueda servidor",
				inRepo: false
			},
			{
				id: "R07-b",
				label: "Listar pagos (anulados visibles)",
				inRepo: false
			},
			{
				id: "R07-c",
				label: "Alta de pago desde la misma pantalla",
				inRepo: false
			},
			{
				id: "R07-d",
				label: "Paginado de pagos",
				inRepo: false
			}
		],
		priority: "critica",
		dependsOn: ["I11", "D09"]
	},
	{
		id: "R08",
		owner: "dario",
		group: "Informes",
		title: "Inmuebles no ocupados entre dos fechas",
		narrative: "Dadas dos fechas posibles de una reserva (inicio y fin), listar todos los inmuebles que no estén ocupados en alguna reserva entre esas fechas.",
		status: "falta",
		pct: 0,
		evidence: "No hay query de overlap. Es el mismo motor que la búsqueda de Ian (I09): Dario lo expone como informe.",
		missing: "Inputs fecha desde/hasta. Reusar BuscarDisponibles. Filtrar también Disponible=1. Mostrar precio, cupo, tipo, dueño. CTA 'crear reserva' opcional.",
		files: [],
		items: [
			{
				id: "R08-a",
				label: "Inputs de rango de fechas",
				inRepo: false
			},
			{
				id: "R08-b",
				label: "Query de no-ocupación (reusa I09)",
				inRepo: false
			},
			{
				id: "R08-c",
				label: "Excluir suspendidos",
				inRepo: false
			},
			{
				id: "R08-d",
				label: "Paginado",
				inRepo: false
			}
		],
		priority: "critica",
		dependsOn: ["I09"]
	},
	{
		id: "R09",
		owner: "dario",
		group: "Calidad",
		title: "Paginado, búsqueda y selects en todos los informes",
		narrative: "Otros requerimientos: paginado servidor, búsquedas servidor, desplegables con filtro servidor.",
		status: "falta",
		pct: 0,
		evidence: "No hay informes, así que el requisito transversal está en 0% para este módulo.",
		missing: "Cada informe: tam 10, ObtenerCantidad, filtros GET, selects ajax. No cargar listas completas.",
		files: [],
		items: [
			{
				id: "R09-a",
				label: "Paginado en los 8 informes",
				inRepo: false
			},
			{
				id: "R09-b",
				label: "Filtros por GET (compartibles por URL)",
				inRepo: false
			},
			{
				id: "R09-c",
				label: "Ningún informe trae combos completos",
				inRepo: false
			}
		],
		priority: "alta",
		dependsOn: [
			"R00",
			"I24",
			"D11",
			"D13"
		]
	}
];
var BUGS = [
	{
		id: "B01",
		owner: "ian",
		title: "Crear reserva revienta: no hay usuarios en el seed",
		where: "Views/Reservas/crear.cshtml · UsuarioCreadorId=1 · Seed.sql vacío",
		impact: "Bloqueante. La FK fk_R_UsuarioCreadorId falla en cualquier alta de reserva.",
		fix: "Seed de Usuario Id=1 admin + dejar de hardcodear cuando exista login.",
		severity: "bloqueante"
	},
	{
		id: "B02",
		owner: "deboh",
		title: "Eliminar inmueble apunta al controller 'Inmueble'",
		where: "Views/Inmuebles/eliminar.cshtml asp-controller=\"Inmueble\"",
		impact: "El POST de confirmación da 404. No se puede borrar inmuebles.",
		fix: "Cambiar a asp-controller=\"Inmuebles\" y asp-action=\"EliminarConfirmado\".",
		severity: "bloqueante"
	},
	{
		id: "B03",
		owner: "deboh",
		title: "Editar inmueble: Latitud está bindeada a Longitud",
		where: "Views/Inmuebles/editar.cshtml líneas 30–36",
		impact: "Al guardar se pierde la latitud; el campo Latitud escribe Longitud.",
		fix: "asp-for=\"Latitud\" en el input de latitud.",
		severity: "alta"
	},
	{
		id: "B04",
		owner: "deboh",
		title: "H1 roto en eliminar inmueble",
		where: "Views/Inmuebles/eliminar.cshtml: <h1>…</><h1/>",
		impact: "HTML inválido, título ilegible.",
		fix: "Reemplazar por un <h1> bien cerrado. Corregir typo 'inmuble'.",
		severity: "media"
	},
	{
		id: "B05",
		owner: "deboh",
		title: "Eliminar reserva: el hidden no se llama id",
		where: "Views/Reservas/eliminar.cshtml asp-for=\"IdReserva\" vs EliminarConfirmado(int id)",
		impact: "El POST manda IdReserva=N e id=0 → borra mal o no borra.",
		fix: "input type=hidden name=\"id\" value=\"@Model.IdReserva\".",
		severity: "bloqueante"
	},
	{
		id: "B06",
		owner: "deboh",
		title: "Typo text-darck en el navbar",
		where: "Views/Shared/_Layout.cshtml link Inmuebles",
		impact: "El link no hereda el color del resto.",
		fix: "text-dark.",
		severity: "media"
	},
	{
		id: "B07",
		owner: "ian",
		title: "UseAuthorization sin esquema de autenticación",
		where: "Program.cs",
		impact: "[Authorize] no va a funcionar hasta AddAuthentication. Falsa sensación de seguridad.",
		fix: "AddAuthentication().AddCookie() + AddAuthorization con policies.",
		severity: "alta"
	},
	{
		id: "B08",
		owner: "ian",
		title: "Dropdowns traen 1000 filas",
		where: "InmueblesController / ReservasController OnActionExecuting tamPagina:1000",
		impact: "Viola el requisito de selects con búsqueda servidor. Va a explotar con más datos.",
		fix: "Endpoints /buscar?q= LIMIT 20.",
		severity: "alta"
	},
	{
		id: "B09",
		owner: "ian",
		title: "Reserva.ObtenerLista ignora la búsqueda",
		where: "Repositories/RepositorioReserva.cs",
		impact: "El parámetro busqueda se declara y no se usa. El listado no se puede filtrar.",
		fix: "WHERE por id, inquilino o fechas.",
		severity: "alta"
	},
	{
		id: "B10",
		owner: "ian",
		title: "Index no usa ObtenerCantidad",
		where: "Controllers/ABMController.cs",
		impact: "El pager no puede dibujarse: la vista no sabe el total.",
		fix: "ViewModel con Total, Pagina, TamPagina, Items, Busqueda.",
		severity: "alta"
	},
	{
		id: "B11",
		owner: "ian",
		title: "PasswordHash e ImagenPortadaUrl VARCHAR(45)",
		where: "Database/DBInmobiliaria_DeborahGomez.sql",
		impact: "BCrypt no entra. Una URL de imagen tampoco.",
		fix: "VARCHAR(255) o TEXT.",
		severity: "alta"
	},
	{
		id: "B12",
		owner: "ian",
		title: "FKs de auditoría incompletas",
		where: "Reserva.UsuarioFinalizadorId / Pago.UsuarioAnuladorId",
		impact: "Se puede guardar un id de usuario inexistente.",
		fix: "CONSTRAINT FK a Usuario.",
		severity: "media"
	},
	{
		id: "B13",
		owner: "ian",
		title: "Baja física en todas las entidades",
		where: "Repositorio*.Baja → DELETE FROM",
		impact: "Cualquiera borra. Pagos deberían anularse. Un inmueble con reservas va a chocar la FK.",
		fix: "Admin-only + manejar FK (bloquear o cascade según regla). Pagos: UPDATE Anulado.",
		severity: "alta"
	},
	{
		id: "B14",
		owner: "ian",
		title: "Archivo RepositiorioInquilino.cs mal nombrado",
		where: "Repositories/RepositiorioInquilino.cs",
		impact: "Ruido, peor buscabilidad.",
		fix: "Rename a RepositorioInquilino.cs.",
		severity: "media"
	},
	{
		id: "B15",
		owner: "deboh",
		title: "Home sigue siendo el template de Microsoft",
		where: "Views/Home/Index.cshtml",
		impact: "No hay punto de entrada de negocio.",
		fix: "Dashboard de agencia.",
		severity: "media"
	}
];
function tasksFor(owner) {
	return TASKS.filter((t) => t.owner === owner);
}
function avgPct(owner) {
	const list = tasksFor(owner);
	if (!list.length) return 0;
	return Math.round(list.reduce((s, t) => s + t.pct, 0) / list.length);
}
function statusCounts(owner) {
	const list = owner ? tasksFor(owner) : TASKS;
	return {
		total: list.length,
		hecho: list.filter((t) => t.status === "hecho").length,
		parcial: list.filter((t) => t.status === "parcial").length,
		falta: list.filter((t) => t.status === "falta").length
	};
}
function itemStats(owner) {
	const items = (owner ? tasksFor(owner) : TASKS).flatMap((t) => t.items);
	const inRepo = items.filter((i) => i.inRepo).length;
	return {
		total: items.length,
		inRepo,
		pending: items.length - inRepo
	};
}
var useProgress = create()(persist((set) => ({
	closed: {},
	notes: {},
	toggle: (id) => set((s) => ({ closed: {
		...s.closed,
		[id]: !s.closed[id]
	} })),
	setClosed: (id, value) => set((s) => ({ closed: {
		...s.closed,
		[id]: value
	} })),
	setNote: (id, value) => set((s) => ({ notes: {
		...s.notes,
		[id]: value
	} })),
	reset: () => set({
		closed: {},
		notes: {}
	}),
	closeMany: (ids) => set((s) => {
		const next = { ...s.closed };
		for (const id of ids) next[id] = true;
		return { closed: next };
	})
}), { name: "reservas-temporales-checklist-v1" }));
var TABS = [
	{
		id: "overview",
		label: "Resumen"
	},
	{
		id: "ian",
		label: "El Ian"
	},
	{
		id: "deboh",
		label: "Deboh"
	},
	{
		id: "dario",
		label: "El Dario"
	},
	{
		id: "bugs",
		label: "Bugs"
	},
	{
		id: "repo",
		label: "Repo"
	}
];
var STATUS_LABEL = {
	hecho: "Hecho",
	parcial: "Parcial",
	falta: "Falta"
};
function ownerColor(owner) {
	if (owner === "ian") return "var(--color-ian)";
	if (owner === "deboh") return "var(--color-deboh)";
	return "var(--color-dario)";
}
function statusColor(status) {
	if (status === "hecho") return "var(--color-hecho)";
	if (status === "parcial") return "var(--color-parcial)";
	return "var(--color-falta)";
}
function Tablero() {
	const [tab, setTab] = (0, import_react.useState)("overview");
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [onlyOpen, setOnlyOpen] = (0, import_react.useState)(false);
	const closed = useProgress((s) => s.closed);
	const reset = useProgress((s) => s.reset);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	const teamClosed = (0, import_react.useMemo)(() => {
		const ids = TASKS.map((t) => t.id);
		const n = ids.filter((id) => closed[id]).length;
		return {
			n,
			pct: Math.round(n / ids.length * 100)
		};
	}, [closed]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "no-print border-b border-line bg-surface/80 backdrop-blur-md sticky top-0 z-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-[10px] bg-ink text-bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
								className: "size-4",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[15px] font-semibold leading-tight tracking-tight",
							children: "Reservas Temporales"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] uppercase tracking-[0.14em] text-muted",
							children: ["Tablero de avance · ", REPO.snapshot.split("—")[0].trim()]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-auto flex flex-wrap items-center gap-1",
						children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTab(t.id),
							className: "rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors " + (tab === t.id ? "bg-ink text-bg" : "text-ink-soft hover:bg-bg-warm"),
							children: t.label
						}, t.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
				children: [
					tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
						hydrated,
						teamClosed,
						onOpen: setTab
					}),
					(tab === "ian" || tab === "deboh" || tab === "dario") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonBoard, {
						owner: tab,
						hydrated,
						query,
						setQuery,
						onlyOpen,
						setOnlyOpen
					}),
					tab === "bugs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BugsBoard, {}),
					tab === "repo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoBoard, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "no-print mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 pb-10 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						"Análisis sobre ",
						REPO.url.replace("https://", ""),
						" · narrativa del PDF"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: async () => {
								try {
									const { downloadInteractivePdf } = await import("./pdf-export-BFw1YJtV.mjs");
									await downloadInteractivePdf(closed);
								} catch (err) {
									console.error(err);
									window.print();
								}
							},
							className: "inline-flex items-center gap-1.5 rounded-full bg-forest px-3.5 py-2 text-[13px] font-medium text-forest-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "Descargar PDF"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => window.print(),
							className: "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-[13px] font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "Imprimir"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								if (confirm("¿Borrar los tildes del equipo en este navegador?")) reset();
							},
							className: "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] text-muted hover:text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Reset tildes"]
						})
					]
				})]
			})
		]
	});
}
function Overview({ hydrated, teamClosed, onOpen }) {
	const globalItems = itemStats();
	const globalStatus = statusCounts();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 lg:grid-cols-[1.4fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted",
						children: "Proyecto de alquileres temporarios"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 font-display text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.12] tracking-[-0.03em]",
						children: ["Separación de responsabilidades", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: " y estado real del repo."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft",
						children: [
							"Cruce de la narrativa con el código de",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: "main @ 197ea58"
							}),
							". El Ian cierra que las funciones existan. Deboh cierra que se vean y se usen. El Dario cierra los ocho informes. Los tildes de este tablero se guardan en este navegador."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-[28px] border border-line bg-surface p-5 shadow-[0_1px_0_rgba(26,24,20,0.04)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-muted",
							children: "Avance del repositorio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 font-display text-5xl font-semibold tabular-nums tracking-tight",
							children: [REPO.overallPct, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 text-2xl text-muted",
								children: "%"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								globalItems.inRepo,
								" de ",
								globalItems.total,
								" ítems ya están en el código · ",
								globalStatus.parcial,
								" tareas a medio hacer ·",
								" ",
								globalStatus.falta,
								" ni empezadas"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-2 overflow-hidden rounded-full bg-bg-warm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-forest",
								style: { width: `${REPO.overallPct}%` }
							})
						}),
						hydrated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted",
							children: [
								"Checklist del equipo: ",
								teamClosed.n,
								"/",
								TASKS.length,
								" tareas marcadas (",
								teamClosed.pct,
								"%)."
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					"ian",
					"deboh",
					"dario"
				].map((owner) => {
					const person = PEOPLE[owner];
					const pct = avgPct(owner);
					const counts = statusCounts(owner);
					const items = itemStats(owner);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onOpen(owner),
						className: "rounded-[24px] border border-line bg-surface p-5 text-left transition-transform hover:-translate-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white",
									style: { background: ownerColor(owner) },
									children: person.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-2xl font-semibold tabular-nums",
									children: [pct, "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-medium leading-snug",
								children: person.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[13px] leading-relaxed text-muted",
								children: [
									counts.parcial,
									" parciales · ",
									counts.falta,
									" faltan ·",
									" ",
									items.inRepo,
									"/",
									items.total,
									" ítems en repo"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 h-1.5 overflow-hidden rounded-full bg-bg-warm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full",
									style: {
										width: `${pct}%`,
										background: ownerColor(owner)
									}
								})
							})
						]
					}, owner);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[28px] border border-line bg-surface p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold tracking-tight",
					children: "Cómo se parte el trabajo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
							name: "El Ian",
							color: "var(--color-ian)",
							points: [
								"Modelos, SQL, repositorios, controladores",
								"Reglas: solapamiento, multa 50/25, seña, renovar",
								"Módulo Pago y anulación por estado",
								"Auth cookie, roles, auditoría, seed de usuarios",
								"Paginado/búsqueda/selects: el contrato servidor"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
							name: "Deboh",
							color: "var(--color-deboh)",
							points: [
								"CSS, layout, home, navbar, marca",
								"Views de todos los ABM (index/crear/editar/eliminar/detalle)",
								"Paginador, buscador y selects con typeahead",
								"Galería, login, perfil, empty states",
								"Arreglar los bugs de vistas (latitud, 404 eliminar…)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
							name: "El Dario",
							color: "var(--color-dario)",
							points: [
								"InformesController + RepositorioInformes",
								"Los 8 informes de la narrativa, uno por uno",
								"Filtros GET, paginado, cero combos completos",
								"Pagos de una reserva + alta desde el listado",
								"Inmuebles libres entre dos fechas (reusa query de Ian)"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold tracking-tight",
				children: "Bloqueantes ahora mismo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2",
				children: BUGS.filter((b) => b.severity === "bloqueante").map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-line bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: [
							b.id,
							" · ",
							b.title
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] text-muted",
						children: b.impact
					})]
				}, b.id))
			})] })
		]
	});
}
function Split({ name, color, points }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[12px] font-semibold uppercase tracking-[0.14em]",
		style: { color },
		children: name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 space-y-2 text-[13.5px] leading-snug text-ink-soft",
		children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 size-1.5 shrink-0 rounded-full",
				style: { background: color }
			}), p]
		}, p))
	})] });
}
function PersonBoard({ owner, hydrated, query, setQuery, onlyOpen, setOnlyOpen }) {
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
		return t.title.toLowerCase().includes(q) || t.id.toLowerCase().includes(q) || t.narrative.toLowerCase().includes(q) || t.missing.toLowerCase().includes(q);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.16em]",
						style: { color: ownerColor(owner) },
						children: [
							person.github,
							" · ",
							person.email
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl font-semibold tracking-[-0.03em]",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft",
						children: person.blurb
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[22px] border border-line bg-surface px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.14em] text-muted",
							children: "En el repositorio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl font-semibold tabular-nums",
							children: [pct, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								counts.parcial,
								" parcial · ",
								counts.falta,
								" falta · ",
								items.inRepo,
								"/",
								items.total,
								" ítems"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative flex-1 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Filtrar tareas…",
						className: "w-full rounded-full border border-line bg-surface py-2 pl-9 pr-3 text-sm outline-none focus:border-ink"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOnlyOpen(!onlyOpen),
					className: "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[13px] " + (onlyOpen ? "border-ink bg-ink text-bg" : "border-line bg-surface text-ink-soft"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5" }), "Solo abiertas"]
				})]
			}),
			groups.map((group) => {
				const list = filtered.filter((t) => t.group === group);
				if (!list.length) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[12px] font-semibold uppercase tracking-[0.16em] text-muted",
						children: group
					}), list.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskCard, {
						task,
						hydrated,
						checked: !!closed[task.id],
						onToggle: () => toggle(task.id)
					}, task.id))]
				}, group);
			})
		]
	});
}
function TaskCard({ task, hydrated, checked, onToggle }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const closedItems = useProgress((s) => s.closed);
	const toggle = useProgress((s) => s.toggle);
	const pending = task.items.filter((i) => !i.inRepo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "rounded-[22px] border bg-surface print:break-inside-avoid " + (checked ? "border-line/80 opacity-70" : "border-line"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3 p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onToggle,
				className: "mt-0.5 grid size-7 shrink-0 place-items-center rounded-[8px] border border-line-strong bg-bg",
				"aria-pressed": checked,
				"aria-label": checked ? "Marcar abierta" : "Marcar cerrada por el equipo",
				children: hydrated && checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-4",
					strokeWidth: 2.4
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3.5 text-line-strong" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted",
								children: task.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white",
								style: { background: statusColor(task.status) },
								children: [
									STATUS_LABEL[task.status],
									" · ",
									task.pct,
									"%"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-bg-warm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted",
								children: task.priority
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-lg font-semibold leading-snug tracking-tight",
						children: task.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13.5px] leading-relaxed text-ink-soft",
						children: task.narrative
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1.5 overflow-hidden rounded-full bg-bg-warm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full",
							style: {
								width: `${task.pct}%`,
								background: statusColor(task.status)
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(!open),
						className: "mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-ink-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 transition-transform " + (open ? "rotate-180" : "") }), open ? "Ocultar detalle" : "Ver qué hay y qué falta"]
					}),
					open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 border-t border-line pt-3 text-[13.5px] leading-relaxed md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted",
								children: "En el repo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-ink-soft",
								children: task.evidence
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted",
								children: "Falta"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-ink-soft",
								children: task.missing
							})] }),
							task.files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "md:col-span-2 font-mono text-[11px] text-muted",
								children: task.files.join(" · ")
							}),
							task.dependsOn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "md:col-span-2 text-[12px] text-muted",
								children: ["Depende de ", task.dependsOn.join(", ")]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1.5",
						children: task.items.map((item) => {
							const itemChecked = item.inRepo || !!closedItems[item.id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-[13.5px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: item.inRepo,
									onClick: () => toggle(item.id),
									className: "mt-0.5 grid size-5 shrink-0 place-items-center rounded-[5px] border " + (item.inRepo ? "border-hecho bg-hecho text-white" : itemChecked ? "border-ink bg-ink text-bg" : "border-line-strong bg-bg"),
									"aria-label": item.label,
									children: itemChecked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-3",
										strokeWidth: 3
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: item.inRepo ? "text-ink-soft" : "",
									children: [item.label, item.inRepo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-hecho",
										children: "en repo"
									})]
								})]
							}, item.id);
						})
					}),
					pending.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-[11px] text-muted",
						children: [
							pending.length,
							" ítem",
							pending.length === 1 ? "" : "s",
							" pendiente",
							pending.length === 1 ? "" : "s"
						]
					})
				]
			})]
		})
	});
}
function BugsBoard() {
	const toggle = useProgress((s) => s.toggle);
	const closed = useProgress((s) => s.closed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold tracking-[-0.03em]",
			children: "Bugs encontrados en el código"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-[15px] text-ink-soft",
			children: "No son “deuda futura”: rompen flujos de hoy. Asignados al dueño del archivo. Tildar cuando el PR los cierre."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-2",
			children: BUGS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3 rounded-[22px] border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => toggle(b.id),
					className: "mt-0.5 grid size-7 shrink-0 place-items-center rounded-[8px] border border-line-strong bg-bg",
					children: closed[b.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3.5 text-line-strong" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted",
								children: b.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white",
								style: { background: b.severity === "bloqueante" ? "var(--color-falta)" : b.severity === "alta" ? "var(--color-parcial)" : "var(--color-muted)" },
								children: b.severity
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white",
								style: { background: ownerColor(b.owner) },
								children: PEOPLE[b.owner].name
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-lg font-semibold leading-snug",
						children: b.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-[11px] text-muted",
						children: b.where
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[13.5px] text-ink-soft",
						children: b.impact
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-[13.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Fix: "
						}), b.fix]
					})
				] })]
			}, b.id))
		})]
	});
}
function RepoBoard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold tracking-[-0.03em]",
					children: "Qué hay hoy en el repositorio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-[15px] text-ink-soft",
					children: "ASP.NET Core MVC, MySQL, patrón genérico ABMController + IRepositorio. 29 commits en main. Integrantes: Dario Godoy, Deborah Gomez, Ian Quimey Pereyra."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: REPO.url,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest",
					children: ["Abrir GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					title: "Implementado",
					lines: [
						"CRUD Propietario, Inquilino, TipoInmueble, Inmueble, Reserva",
						"Validación Hasta ≥ Desde y FechaHastaOriginal al alta",
						"Unicidad DNI/email en propietario e inquilino",
						"LIMIT/OFFSET + ObtenerCantidad en repositorios",
						"Campo Disponible, PorcentajeSenia, coords, precio",
						"DER completo en SQL: incluye Pago y Usuario",
						"Seed de propietarios, inquilinos, tipos e inmuebles"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					title: "Ausente",
					lines: [
						"Modelo/repo/controller de Pago y de Usuario",
						"Login, roles, [Authorize], avatar, perfil",
						"Solapamiento de reservas y búsqueda por fechas",
						"Terminación anticipada, multa, renovación",
						"Galería de imágenes e upload",
						"Los 8 informes",
						"UI de paginado, búsqueda y selects ajax",
						"Seed de Usuario — las reservas no se pueden crear"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[24px] border border-line bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 font-display text-lg font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), "Arquitectura actual"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-3 overflow-x-auto text-[12.5px] leading-relaxed text-ink-soft",
					children: `Controllers/ABMController<T>     CRUD genérico Index/Crear/Editar/Eliminar
  ↳ Propietarios, Inquilinos, TipoInmueble, Inmuebles, Reservas
Repositories/IRepositorio<T>      Alta Baja Modificacion ObtenerLista ObtenerCantidad ObtenerPorId
Models                            Propietario Inquilino TipoInmueble Inmueble Reserva
                                  (faltan Pago y Usuario)
Database                          7 tablas · Seed parcial
Views                             esqueletos HTML, casi sin CSS propio
Program.cs                        DI de 5 repos · UseAuthorization vacío`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[24px] border border-line bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 font-display text-lg font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" }), "Orden sugerido (dependencias)"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-3 list-decimal space-y-2 pl-5 text-[14px] leading-relaxed text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ian: seed de Usuario + ampliar VARCHAR. Sin esto no hay reservas." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Deboh: parche de bugs de vistas (eliminar inmueble/reserva, latitud)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ian: auth cookie + roles. Deboh: login y navbar." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ian: overlap + BuscarDisponibles. Dario: informes 1, 5, 8." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ian: módulo Pago. Deboh: vistas. Dario: informe 7." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ian: multa y renovar. Deboh: pantallas Terminar / Renovar." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dario: el resto de informes. Deboh: CSS, pager, selects, home." })
					]
				})]
			})
		]
	});
}
function Fact({ title, lines }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[24px] border border-line bg-surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-lg font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2 text-[13.5px] leading-snug text-ink-soft",
			children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" }), l]
			}, l))
		})]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tablero, {});
}
//#endregion
export { TASKS as a, REPO as i, BUGS as n, avgPct as o, PEOPLE as r, itemStats as s, routes_exports as t };
