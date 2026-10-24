# webschool.github.io

webschool.github.io est une plateforme francophone pour apprendre HTML, CSS et JavaScript par la pratique. Le projet utilise SvelteKit, Svelte 5, JavaScript natif, HTML sémantique et CSS natif.

## Démarrer

Prérequis : Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

Ouvre l’adresse affichée par Vite, généralement http://localhost:5173.

## État de la plateforme

- Accueil, catalogue de cours et pages de parcours HTML, CSS et JavaScript.
- Les 35 ateliers interactifs existants restent disponibles sur `/apprendre`.
- Trois leçons HTML complètes avec objectifs, exemples exécutables, exercices, indices et corrections.
- Parcours détaillés CSS (14 leçons) et JavaScript (18 leçons), organisés en modules avec exemples et exercices progressifs.
- Recherche locale dans les cours, chapitres, leçons, exercices et références, avec suggestions clavier, filtres et résultats directs.
- Références classées par catégories, avec 78 fiches CSS, JavaScript et APIs Web reliées à MDN.
- Progression par technologie, module et leçon : états commencée/terminée, dernière leçon consultée et reprise du parcours.
- Éditeur HTML/CSS/JavaScript dans une iframe sandboxée (scripts uniquement; pas d’accès same-origin, de formulaires, de navigation supérieure ni de requêtes réseau).
- Les données de progression et les brouillons restent dans le stockage local du navigateur; il n’y a pas encore de compte ni de synchronisation distante. Les anciennes leçons terminées sont migrées depuis `weblab-progress`.

Pour lancer les tests unitaires : `npm test`.

## Référencement en production

Définir `PUBLIC_SITE_URL` avec l’origine HTTPS officielle (par exemple `https://votre-domaine.example`) dans l’environnement de déploiement. Cette valeur alimente les URL canoniques, `robots.txt` et le sitemap XML ; sans elle, les URL absolues ne sont pas émises et le sitemap reste vide. Remplacer l’exemple par le domaine réellement utilisé avant publication.

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` construit et publie le site à chaque push sur `main`. Il configure le préfixe du dépôt `webschool` et génère les canonicals, `robots.txt` et le sitemap pour `https://lemuelbagnan40-lab.github.io/webschool/`. Dans les paramètres du dépôt GitHub, sélectionner **Settings → Pages → Build and deployment → Source → GitHub Actions**.
