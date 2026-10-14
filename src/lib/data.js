import { getCollection } from 'astro:content';
import { parse } from 'yaml';
import siteRaw from '../data/site.yml?raw';
import teamRaw from '../data/team.yml?raw';
import regionsRaw from '../data/regions.yml?raw';
import { kpiOf, kphOf, zoneUrl, slug } from './farm.js';

export const site = parse(siteRaw);
export const team = parse(teamRaw).membres;
export const regions = parse(regionsRaw).regions;

export async function getZones() {
  return (await getCollection('zones')).map((e) => {
    const z = e.data;
    const measured = z.statut === 'mesuree' && z.drops.length > 0;
    return { ...z, id: e.id, url: zoneUrl(z), regionSlug: slug(z.region), measured, kpi: measured ? kpiOf(z) : 0, kph: measured ? kphOf(z) : 0 };
  });
}

export const teamPP = () => team.map((m) => Number(m.prospection) || 0);
