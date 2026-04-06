/**
 * Generates public/resume.pdf from data/resume.ts (same source as the site).
 * Run: npm run generate:resume
 * Runs automatically before production build (prebuild).
 */
import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import { resume } from "../data/resume";

const PAGE_WIDTH = 612;
const MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const publicDir = path.join(process.cwd(), "public");
const outPath = path.join(publicDir, "resume.pdf");

function ensureSpace(doc: InstanceType<typeof PDFDocument>, needed: number) {
  if (doc.y + needed > doc.page.height - MARGIN) {
    doc.addPage();
  }
}

function heading(doc: InstanceType<typeof PDFDocument>, text: string) {
  ensureSpace(doc, 36);
  doc.moveDown(0.4);
  doc.fontSize(11).font("Helvetica-Bold").fillColor("#111").text(text);
  doc.moveDown(0.25);
  doc.font("Helvetica").fontSize(10).fillColor("#333");
}

const doc = new PDFDocument({
  size: "letter",
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
});

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

doc.fontSize(20).font("Helvetica-Bold").fillColor("#111").text(resume.name, { width: CONTENT_WIDTH });
doc.moveDown(0.15);
doc.fontSize(12).font("Helvetica").fillColor("#2563eb").text(resume.title, { width: CONTENT_WIDTH });
doc.moveDown(0.35);
doc.fontSize(9).fillColor("#444").text(
  [resume.email, resume.phone, resume.linkedin, resume.github].join(" · "),
  { width: CONTENT_WIDTH }
);
doc.moveDown(0.6);

heading(doc, "Professional summary");
doc.font("Helvetica").fontSize(10).text(resume.summary, { width: CONTENT_WIDTH, align: "left" });

heading(doc, "Focus areas");
resume.focusAreas.forEach((line) => {
  ensureSpace(doc, 16);
  doc.text(`• ${line}`, { width: CONTENT_WIDTH, indent: 10 });
});

heading(doc, "Experience");
resume.experience.forEach((exp) => {
  ensureSpace(doc, 80);
  doc.font("Helvetica-Bold").fontSize(10).text(`${exp.role} — ${exp.company}`, { width: CONTENT_WIDTH });
  doc.font("Helvetica").fontSize(9).fillColor("#555").text(`${exp.start} – ${exp.end} · ${exp.location}`, {
    width: CONTENT_WIDTH,
  });
  doc.fillColor("#333").fontSize(10);
  doc.text(`Stack: ${exp.stack.join(", ")}`, { width: CONTENT_WIDTH });
  doc.moveDown(0.2);
  exp.bullets.forEach((b) => {
    ensureSpace(doc, 18);
    doc.text(`• ${b}`, { width: CONTENT_WIDTH, indent: 12 });
  });
  doc.moveDown(0.35);
});

heading(doc, "Technical skills");
resume.skills.forEach((g) => {
  ensureSpace(doc, 28);
  doc.font("Helvetica-Bold").fontSize(10).text(`${g.group}:`, { continued: false });
  doc.font("Helvetica").text(` ${g.items.join(", ")}`, { width: CONTENT_WIDTH });
  doc.moveDown(0.2);
});

heading(doc, "Key projects");
resume.projects.forEach((p) => {
  ensureSpace(doc, 40);
  doc.font("Helvetica-Bold").fontSize(10).text(p.name, { width: CONTENT_WIDTH });
  doc.font("Helvetica").fontSize(10).text(p.description, { width: CONTENT_WIDTH });
  doc.moveDown(0.35);
});

heading(doc, "Achievements");
resume.achievements.forEach((line) => {
  ensureSpace(doc, 16);
  doc.text(`• ${line}`, { width: CONTENT_WIDTH, indent: 10 });
});

heading(doc, "Education");
resume.education.forEach((edu) => {
  ensureSpace(doc, 36);
  doc.font("Helvetica-Bold").text(edu.degree, { width: CONTENT_WIDTH });
  doc.font("Helvetica").fillColor("#555").fontSize(9).text(edu.school, { width: CONTENT_WIDTH });
  doc.fillColor("#333").fontSize(10).text(`${edu.start} – ${edu.end}`, { width: CONTENT_WIDTH });
});

heading(doc, "Open to");
resume.lookingFor.forEach((line) => {
  ensureSpace(doc, 16);
  doc.text(`• ${line}`, { width: CONTENT_WIDTH, indent: 10 });
});

stream.on("finish", () => {
  console.log(`Wrote ${outPath}`);
});

stream.on("error", (err) => {
  console.error(err);
  process.exit(1);
});

doc.end();
