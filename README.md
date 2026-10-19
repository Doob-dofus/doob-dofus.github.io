# F.A.R.M. | par Doob

Site du **Fichier d'Analyse de la Rentabilité des Maps** — la rentabilité des zones de farm Dofus, mesurée sur 100 combats en B8 sur le serveur Brial.

Adresse : **https://doob-dofus.github.io**

---

## 1. Publication

Le site est en ligne sur **https://doob-dofus.github.io**. À chaque modification enregistrée sur la branche `main` (via Pages CMS ou GitHub), il se republie tout seul en 1 à 2 minutes : suivi dans l'onglet **Actions** du dépôt.

## 2. Modifier le site sans code : Pages CMS

1. Va sur **https://app.pagescms.org** et connecte-toi avec ton compte GitHub.
2. Autorise l'accès au dépôt `doob-dofus.github.io`.
3. Tu verras 4 rubriques :
   - **Zones (rapports)** : une fiche par zone ;
   - **La team** : noms, classes, niveaux affichés, prospection des 8 persos ;
   - **Régions de la cartographie** : la liste des grandes régions et leurs niveaux ;
   - **Réglages du site** : serveur, liens YouTube / X / Discord / e-mail, bannière « données d'exemple ».

Chaque fois que tu cliques sur **Save**, le site se republie automatiquement.

## 3. Publier un nouveau rapport

Dans **Zones (rapports)**, ouvre la zone (ou crée-la) et remplis :

| Champ | Ce qu'il faut mettre |
|---|---|
| Statut | **Mesurée** (sinon la zone reste en WIP) |
| N° du rapport | 1, 2, 3… (sert à regrouper les zones par épisode) |
| Lien de l'épisode YouTube | l'URL de la vidéo |
| Mosaïque | l'image de la zone (facultatif) |
| Date du relevé des prix HDV | jour où tu as relevé les prix |
| % d'anomalie | pourcentage d'anomalie de la zone au moment du farm |
| Nombre de combats | 100 |
| Monstres combattus | total de monstres affrontés pendant les sessions de la zone (facultatif) |
| Sessions | une ligne par session, durée en minutes |
| Kamas ramassés en combat | total des kamas gagnés pendant les combats |
| Prospection des 8 persos | facultatif : à remplir seulement si la prospection a changé (dans l'ordre de la team) |
| Drops | une ligne par ressource : nom, monstres qui la droppent, taux de base DofusDB, quantité totale droppée, prix unitaire HDV Brial, ventes sur 30 jours |

**Éklâmes** : la ligne Éklâme du bon palier (inférieure, ordinaire, supérieure, majestueuse ou suprême, selon le niveau de la zone) est ajoutée **automatiquement** au tableau des ressources de chaque fiche, avec un taux indicatif de 2,5 % (le taux réel varie de 1 à 4 % selon le monstre — source DofusDB). Après ton relevé, ajoute une ligne « Éklâme … » dans **Drops** avec la quantité et le prix mesurés : elle remplacera la ligne automatique et comptera dans le K.P.I.

Le K.P.I. (Kamas Par Itération = kamas moyens par combat), les kamas/heure, le classement (projections de B1 à B8), la cartographie, le podium et le simulateur sont **calculés tout seuls**.

Pour une zone pas encore tournée : statut **WIP**, avec juste le nom, la région, le niveau et les monstres. Elle s'affiche avec « WIP : attendre la sortie de l'épisode sur YouTube ! ».

## 4. Bonnes pratiques pour les prochains rapports

- Dans l'Atlas de Tenma, remets le stock à zéro avant chaque zone, puis note le stock et la durée de chaque zone.
- La date du relevé des prix = le jour où tu exportes les prix de l'Atlas.
- Si la prospection d'un perso change, mets-la à jour dans **La team** avant de publier le rapport.
- Si le niveau d'un perso change, mets à jour son **Niveau affiché** dans **La team**.

## 5. Pour les curieux (technique)

- Site statique **Astro** ; données en YAML dans `src/content/zones/` et `src/data/`.
- Calculs partagés dans `src/lib/farm.js` (formule de prospection : `m(PP) = max(1 ; 0,74 + 1,755 / (1 + e^((150 − PP) / 85)))`).
- Paliers d'Éklâme dans `src/lib/data.js` (source : DofusDB, objets 31518 à 31522).
- En local : `npm install`, puis `npm run dev` (aperçu) ou `npm run build`.

---

Certaines illustrations sont la propriété d'Ankama Studio et de Dofus — Tous droits réservés. Données issues de DofusDB. Utilisation soumise à la LPNC-IA 1.0. Site de fan non officiel.
