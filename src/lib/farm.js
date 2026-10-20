// Outils partagés : calculs F.A.R.M. (utilisés au build et dans le navigateur)
export const slug = (s) =>
  String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const zoneUrl = (z) => `/farm/${slug(z.region)}/${slug(z.nom)}/`;

// Multiplicateur de prospection (formule communautaire, base 0 depuis la 3.7)
export const mult = (pp) => Math.max(1, 0.74 + 1.755 / (1 + Math.exp((150 - pp) / 85)));

// Prospection à partir de laquelle un perso drop la ressource à 100 %
export function ppFor100(base) {
  const m = 100 / base;
  if (m <= 1) return 0;
  if (m >= 2.495) return null;
  return 150 - 85 * Math.log(1.755 / (m - 0.74) - 1);
}

export const minutes = (sessions = []) => sessions.reduce((a, b) => a + b, 0);

export const estimationsOf = (z) => (z.estimations || []).reduce((a, e) => a + e.valeur, 0);

export function kpiOf(z) {
  const combats = z.combats || 100;
  const fromDrops = (z.drops || []).reduce((a, d) => a + d.quantite * d.prix, 0);
  return (fromDrops + (z.kamas_combats || 0) + estimationsOf(z)) / combats;
}

export function kphOf(z) {
  const m = minutes(z.sessions);
  return m ? kpiOf(z) * (z.combats || 100) / (m / 60) : 0;
}

export const fmt = (n) => Math.round(n).toLocaleString('fr-FR');

export function duree(min) {
  const h = Math.floor(min / 60), m = Math.round(min % 60);
  if (!h) return `${m} min`;
  return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`;
}

export function dateFr(s) {
  if (!s) return '—';
  const d = new Date(s);
  if (isNaN(d)) return s;
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' });
}

export const niveau = (l) => String(l).replace('-', ' – ');
