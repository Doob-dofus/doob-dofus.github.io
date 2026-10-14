# F.A.R.M. | par Doob

Site du **Fichier d'Analyse de la Rentabilité des Maps** — la rentabilité des zones de farm Dofus, mesurée sur 100 combats en B8 sur le serveur Brial.

Adresse prévue : **https://doob-dofus.github.io**

---

## 1. Mettre le site en ligne (une seule fois)

1. Sur GitHub (compte **Doob-dofus**), crée un dépôt **public** nommé exactement **`doob-dofus.github.io`**.
2. Dépose tout le contenu de ce dossier dans le dépôt (bouton *Add file → Upload files*, puis glisser-déposer). Le dossier caché `.github` doit bien être envoyé : sinon, crée le fichier `.github/workflows/deploy.yml` à la main en copiant son contenu.
3. Dans le dépôt : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. Va dans l'onglet **Actions** : la publication « Publier le site » tourne (1 à 2 minutes). Le site est ensuite en ligne sur https://doob-dofus.github.io.

À chaque modification enregistrée sur la branche `main`, le site se republie tout seul.

## 2. Modifier le site sans code : Pages CMS

1. Va sur **https://app.pagescms.org** et connecte-toi avec ton compte GitHub.
2. Autorise l'accès au dépôt `doob-dofus.github.io`.
3. Tu verras 4 rubriques :
   - **Zones (rapports)** : une fiche par zone ;
   - **La team** : noms, classes, rôles, prospection des 8 persos ;
   - **Régions de l'atlas** : la liste des grandes régions et leurs niveaux ;
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
| Sessions | une ligne par session, durée en minutes |
| Kamas ramassés en combat | total des kamas gagnés pendant les combats |
| Prospection des 8 persos | facultatif : à remplir seulement si la prospection a changé (dans l'ordre de la team) |
| Drops | une ligne par ressource : nom, monstres qui la droppent, taux de base DofusDB, quantité totale droppée, prix unitaire HDV Brial, ventes sur 30 jours |

Le K.P.I. (Kamas Par Itération = kamas moyens par combat), les kamas/heure, le classement, l'atlas, le podium et le simulateur sont **calculés tout seuls**.

Pour une zone pas encore tournée : statut **WIP**, avec juste le nom, la région, le niveau et les monstres. Elle s'affiche avec « WIP : attendre la sortie de l'épisode sur YouTube ! ».

## 4. Avant l'ouverture officielle

- [ ] Les zones d'Incarnam actuelles contiennent des **chiffres d'exemple** : remplace-les par les vrais relevés (ou repasse-les en WIP).
- [ ] Mets à jour la **prospection** réelle des 8 persos (rubrique *La team*).
- [ ] Renseigne les liens **YouTube**, **Discord** et l'**e-mail** (rubrique *Réglages du site*).
- [ ] Décoche **« Afficher la bannière données d'exemple »** quand tout est réel.

## 5. Pour les curieux (technique)

- Site statique **Astro** ; données en YAML dans `src/content/zones/` et `src/data/`.
- Calculs partagés dans `src/lib/farm.js` (formule de prospection : `m(PP) = max(1 ; 0,74 + 1,755 / (1 + e^((150 − PP) / 85)))`).
- En local : `npm install`, puis `npm run dev` (aperçu) ou `npm run build`.

---

Certaines illustrations sont la propriété d'Ankama Studio et de Dofus — Tous droits réservés. Données issues de DofusDB. Utilisation soumise à la LPNC-IA 1.0. Site de fan non officiel.
