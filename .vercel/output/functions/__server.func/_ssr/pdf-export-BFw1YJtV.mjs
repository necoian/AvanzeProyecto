import { a as TASKS, i as REPO, n as BUGS, o as avgPct, r as PEOPLE, s as itemStats } from "./routes-CMZvupLz.mjs";
import { n as StandardFonts, r as rgb, t as PDFDocument } from "../_libs/pdf-lib.mjs";
import { t as fontkit } from "../_libs/pako+pdf-lib__fontkit.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pdf-export-BFw1YJtV.js
var ink = rgb(.1, .09, .08);
var muted = rgb(.44, .42, .38);
var forest = rgb(.18, .29, .27);
var line = rgb(.85, .82, .76);
var paper = rgb(.97, .95, .91);
async function loadFontBytes(path) {
	const res = await fetch(path);
	if (!res.ok) throw new Error("No se pudo cargar la fuente");
	return new Uint8Array(await res.arrayBuffer());
}
async function downloadInteractivePdf(closed) {
	const pdf = await PDFDocument.create();
	pdf.registerFontkit(fontkit);
	let regular;
	let bold;
	try {
		const [rBytes, bBytes] = await Promise.all([loadFontBytes("/fonts/LiberationSans-Regular.ttf"), loadFontBytes("/fonts/LiberationSans-Bold.ttf")]);
		regular = await pdf.embedFont(rBytes, { subset: true });
		bold = await pdf.embedFont(bBytes, { subset: true });
	} catch {
		regular = await pdf.embedFont(StandardFonts.Helvetica);
		bold = await pdf.embedFont(StandardFonts.HelveticaBold);
	}
	const ctx = {
		pdf,
		form: pdf.getForm(),
		regular,
		bold,
		closed
	};
	coverPage(ctx);
	personPages(ctx, "ian");
	personPages(ctx, "deboh");
	personPages(ctx, "dario");
	bugsPage(ctx);
	const bytes = await pdf.save({ updateFieldAppearances: true });
	const blob = new Blob([bytes], { type: "application/pdf" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "checklist-reservas-temporales.pdf";
	a.click();
	URL.revokeObjectURL(url);
}
function newPage(pdf) {
	return pdf.addPage([595.28, 841.89]);
}
function header(page, bold, regular, title, subtitle) {
	page.drawRectangle({
		x: 0,
		y: 800,
		width: 595.28,
		height: 42,
		color: forest
	});
	page.drawText("RESERVAS TEMPORALES", {
		x: 36,
		y: 818,
		size: 9,
		font: bold,
		color: rgb(.96, .94, .91)
	});
	page.drawText(title, {
		x: 36,
		y: 768,
		size: 18,
		font: bold,
		color: ink
	});
	page.drawText(subtitle, {
		x: 36,
		y: 752,
		size: 9,
		font: regular,
		color: muted
	});
}
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
function coverPage(ctx) {
	const page = newPage(ctx.pdf);
	page.drawRectangle({
		x: 0,
		y: 0,
		width: 595.28,
		height: 841.89,
		color: paper
	});
	page.drawRectangle({
		x: 0,
		y: 0,
		width: 18,
		height: 841.89,
		color: forest
	});
	page.drawText("CHECKLIST INTERACTIVO", {
		x: 48,
		y: 760,
		size: 11,
		font: ctx.bold,
		color: forest
	});
	page.drawText("Proyecto Reservas Temporales", {
		x: 48,
		y: 720,
		size: 26,
		font: ctx.bold,
		color: ink
	});
	page.drawText("Separación de responsabilidades · El Ian · Deboh · El Dario", {
		x: 48,
		y: 696,
		size: 12,
		font: ctx.regular,
		color: muted
	});
	const summary = [
		`Repositorio: ${REPO.url}`,
		`Snapshot: ${REPO.snapshot}`,
		`Stack: ${REPO.stack}`,
		`Avance global estimado en código: ${REPO.overallPct}%`,
		"",
		"Este PDF tiene casillas interactivas (Acrobat / Chrome). Los ítems ya presentes",
		"en el repositorio aparecen marcados. El resto es trabajo pendiente.",
		"",
		`El Ian  — funciones / lógica / auth     · ${avgPct("ian")}% en repo`,
		`Deboh   — visual / CSS / views ABM      · ${avgPct("deboh")}% en repo`,
		`El Dario — informes                      · ${avgPct("dario")}% en repo`
	];
	let y = 640;
	for (const line of summary) {
		page.drawText(line, {
			x: 48,
			y,
			size: 10,
			font: ctx.regular,
			color: ink
		});
		y -= 16;
	}
	for (const b of [
		{
			owner: "ian",
			x: 48
		},
		{
			owner: "deboh",
			x: 220
		},
		{
			owner: "dario",
			x: 392
		}
	]) {
		const stats = itemStats(b.owner);
		page.drawRectangle({
			x: b.x,
			y: 280,
			width: 156,
			height: 110,
			color: rgb(1, 1, 1),
			borderColor: line,
			borderWidth: 1
		});
		page.drawText(PEOPLE[b.owner].name, {
			x: b.x + 12,
			y: 364,
			size: 12,
			font: ctx.bold,
			color: ink
		});
		page.drawText(`${avgPct(b.owner)}% en código`, {
			x: b.x + 12,
			y: 346,
			size: 16,
			font: ctx.bold,
			color: forest
		});
		page.drawText(`${stats.inRepo}/${stats.total} ítems listos`, {
			x: b.x + 12,
			y: 324,
			size: 9,
			font: ctx.regular,
			color: muted
		});
		const roleLines = wrap(PEOPLE[b.owner].role, ctx.regular, 8, 132);
		let ry = 306;
		for (const rl of roleLines) {
			page.drawText(rl, {
				x: b.x + 12,
				y: ry,
				size: 8,
				font: ctx.regular,
				color: muted
			});
			ry -= 11;
		}
	}
	page.drawText("Los tildes de este archivo son independientes del tablero web.", {
		x: 48,
		y: 48,
		size: 8,
		font: ctx.regular,
		color: muted
	});
}
function personPages(ctx, owner) {
	const tasks = TASKS.filter((t) => t.owner === owner);
	let page = newPage(ctx.pdf);
	page.drawRectangle({
		x: 0,
		y: 0,
		width: 595.28,
		height: 841.89,
		color: paper
	});
	header(page, ctx.bold, ctx.regular, PEOPLE[owner].name, `${PEOPLE[owner].role}  ·  ${avgPct(owner)}% en el repositorio`);
	let y = 730;
	for (const task of tasks) {
		const needed = 52 + task.items.length * 14;
		if (y - needed < 48) {
			page = newPage(ctx.pdf);
			page.drawRectangle({
				x: 0,
				y: 0,
				width: 595.28,
				height: 841.89,
				color: paper
			});
			header(page, ctx.bold, ctx.regular, PEOPLE[owner].name, "continuación");
			y = 730;
		}
		const box = ctx.form.createCheckBox(`task.${task.id}`);
		box.addToPage(page, {
			x: 36,
			y: y - 2,
			width: 11,
			height: 11
		});
		if (task.status === "hecho" || ctx.closed[task.id]) box.check();
		page.drawText(`${task.id}  ${task.title}`, {
			x: 54,
			y,
			size: 11,
			font: ctx.bold,
			color: ink,
			maxWidth: 430
		});
		page.drawText(`${STATUS_LABEL_PDF[task.status]} ${task.pct}%  ·  ${task.priority}`, {
			x: 430,
			y,
			size: 8,
			font: ctx.regular,
			color: muted
		});
		y -= 14;
		const narr = wrap(task.narrative, ctx.regular, 8.5, 500).slice(0, 2);
		for (const line of narr) {
			page.drawText(line, {
				x: 54,
				y,
				size: 8.5,
				font: ctx.regular,
				color: muted
			});
			y -= 11;
		}
		for (const item of task.items) {
			const ib = ctx.form.createCheckBox(`item.${item.id}`);
			ib.addToPage(page, {
				x: 54,
				y: y - 1,
				width: 9,
				height: 9
			});
			if (item.inRepo || ctx.closed[item.id]) ib.check();
			const label = (item.inRepo ? "[repo] " : "") + item.label;
			page.drawText(label.slice(0, 110), {
				x: 68,
				y,
				size: 8.5,
				font: ctx.regular,
				color: ink,
				maxWidth: 470
			});
			y -= 13;
		}
		y -= 10;
		page.drawLine({
			start: {
				x: 36,
				y: y + 6
			},
			end: {
				x: 559,
				y: y + 6
			},
			thickness: .4,
			color: line
		});
	}
}
var STATUS_LABEL_PDF = {
	hecho: "HECHO",
	parcial: "PARCIAL",
	falta: "FALTA"
};
function bugsPage(ctx) {
	let page = newPage(ctx.pdf);
	page.drawRectangle({
		x: 0,
		y: 0,
		width: 595.28,
		height: 841.89,
		color: paper
	});
	header(page, ctx.bold, ctx.regular, "Bugs encontrados", "Asignados al dueño del archivo");
	let y = 730;
	for (const bug of BUGS) {
		if (y < 90) {
			page = newPage(ctx.pdf);
			page.drawRectangle({
				x: 0,
				y: 0,
				width: 595.28,
				height: 841.89,
				color: paper
			});
			header(page, ctx.bold, ctx.regular, "Bugs encontrados", "continuación");
			y = 730;
		}
		const box = ctx.form.createCheckBox(`bug.${bug.id}`);
		box.addToPage(page, {
			x: 36,
			y: y - 2,
			width: 11,
			height: 11
		});
		if (ctx.closed[bug.id]) box.check();
		page.drawText(`${bug.id}  ${bug.title}`, {
			x: 54,
			y,
			size: 10,
			font: ctx.bold,
			color: ink,
			maxWidth: 500
		});
		y -= 13;
		page.drawText(`${bug.severity.toUpperCase()}  ·  ${PEOPLE[bug.owner].name}  ·  ${bug.where}`, {
			x: 54,
			y,
			size: 8,
			font: ctx.regular,
			color: muted,
			maxWidth: 500
		});
		y -= 12;
		for (const line of wrap("Impacto: " + bug.impact, ctx.regular, 8.5, 500).slice(0, 3)) {
			page.drawText(line, {
				x: 54,
				y,
				size: 8.5,
				font: ctx.regular,
				color: ink
			});
			y -= 11;
		}
		for (const line of wrap("Fix: " + bug.fix, ctx.regular, 8.5, 500).slice(0, 2)) {
			page.drawText(line, {
				x: 54,
				y,
				size: 8.5,
				font: ctx.regular,
				color: forest
			});
			y -= 11;
		}
		y -= 8;
	}
}
//#endregion
export { downloadInteractivePdf };
