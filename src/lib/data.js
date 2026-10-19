import { getCollection } from 'astro:content';
import { parse } from 'yaml';
import siteRaw from '../data/site.yml?raw';
import teamRaw from '../data/team.yml?raw';
import regionsRaw from '../data/regions.yml?raw';
import { kpiOf, kphOf, zoneUrl, slug } from './farm.js';

export const site = parse(siteRaw);
export const team = parse(teamRaw).membres;
export const regions = parse(regionsRaw).regions;

// Éklâmes : ressource globale droppée par tous les monstres (taux variable 1–4 %),
// en 5 paliers selon le niveau des monstres. Source : DofusDB (objets 31518 à 31522).
const EKLAMES = [
  { max: 50, nom: 'Éklâme inférieure' },
  { max: 100, nom: 'Éklâme ordinaire' },
  { max: 150, nom: 'Éklâme supérieure' },
  { max: 190, nom: 'Éklâme majestueuse' },
  { max: 999, nom: 'Éklâme suprême' },
];

// Ajoute la ligne Éklâme du palier correspondant au niveau de la zone,
// sauf si elle est déjà renseignée dans le fichier de la zone (quantité/prix mesurés).
function avecEklame(z) {
  if (z.drops.some((d) => d.ressource.toLowerCase().includes('éklâme'))) return z.drops;
  const min = parseInt(z.niveau, 10) || 0;
  const ek = EKLAMES.find((e) => min <= e.max) || EKLAMES[EKLAMES.length - 1];
  return [...z.drops, { ressource: ek.nom, monstres: 'Tous les monstres de la zone (taux réel variable : 1–4 %)', taux_base: 2.5, quantite: 0, prix: 0, eklame: true }];
}

export async function getZones() {
  return (await getCollection('zones')).map((e) => {
    const z = e.data;
    const measured = z.statut === 'mesuree' && z.drops.length > 0;
    const zone = { ...z, drops: avecEklame(z) };
    return { ...zone, id: e.id, url: zoneUrl(zone), regionSlug: slug(zone.region), measured, kpi: measured ? kpiOf(zone) : 0, kph: measured ? kphOf(zone) : 0 };
  });
}

export const teamPP = () => team.map((m) => Number(m.prospection) || 0);
