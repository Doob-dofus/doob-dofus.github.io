import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const drop = z.object({
  ressource: z.string(),
  monstres: z.string().optional().default(''),
  taux_base: z.coerce.number(),
  quantite: z.coerce.number().default(0),
  prix: z.coerce.number().default(0),
  ventes_30j: z.coerce.number().optional(),
  prix_manquant: z.boolean().optional().default(false),
});

const zones = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/zones' }),
  schema: z.object({
    nom: z.string(),
    region: z.string(),
    niveau: z.string().default('0-20'),
    statut: z.enum(['mesuree', 'wip']).default('wip'),
    rapport: z.coerce.number().optional(),
    monstres: z.array(z.string()).default([]),
    video: z.string().optional().default(''),
    mosaique: z.string().optional().default(''),
    date_prix: z.coerce.string().optional().default(''),
    anomalie: z.coerce.number().optional(),
    combats: z.coerce.number().default(100),
    monstres_combattus: z.coerce.number().optional(),
    sessions: z.array(z.coerce.number()).default([]),
    kamas_combats: z.coerce.number().optional().default(0),
    kamas_combats_inconnus: z.boolean().optional().default(false),
    notes: z.string().optional().default(''),
    estimations: z.array(z.object({
      libelle: z.string(),
      quantite: z.coerce.number().nonnegative().optional(),
      valeur: z.coerce.number().nonnegative(),
    })).default([]),
    prospection: z.array(z.coerce.number()).optional(),
    drops: z.array(drop).default([]),
  }),
});

export const collections = { zones };
