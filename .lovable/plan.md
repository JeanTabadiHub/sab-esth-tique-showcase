
# Plan — Site vitrine Sab' Esthétique

## Compréhension du projet
Site vitrine complet pour un institut de beauté à Lomé, déjà bien noté (4.2/5, 50 avis Google) mais sans présence web. Objectif : refléter la qualité perçue (hygiène, professionnalisme, accueil) et pousser à la prise de RDV via un CTA "Réserver" dominant et un WhatsApp flottant (canal local majeur). Mobile-first strict (375px prioritaire).

## Stack
- **TanStack Start** (React 19 + Vite + Tailwind v4) — stack déjà en place, équivalent fonctionnel de Next.js App Router pour ce projet (SSR/SSG natifs, routing fichier, images optimisées).
- Framer Motion pour le sticky header animé et micro-interactions.
- Pas de librairie lourde ajoutée.

## Éléments manquants — placeholders explicites
- **Tarifs** → "Tarif sur demande" partout, avec `{/* À COMPLÉTER : tarifs en attente du client */}`
- **Slogan/accroche hero** → je propose 3 options dans le code en commentaire, une active à valider :
  1. "L'art du détail, au bout des doigts."
  2. "Votre institut de confiance à Lomé."
  3. "Prenez soin de vous, on s'occupe du reste."
- **Photos réelles** → placeholders élégants générés (hero, galerie) marqués `À REMPLACER : photo réelle du salon`
- **Backend formulaire** → simulation propre avec toast de confirmation + `{/* À CONNECTER : service d'envoi */}`

## Direction artistique
**Palette champagne & bronze** (choix validé) — luxe discret, cohérent avec un positionnement institut haut de gamme, distinctif sur le marché local sans tomber dans le rosé attendu.
- `--background: #FAF6EF` (crème)
- `--foreground: #1F1A14` (brun profond)
- `--primary: #8C6A3F` (bronze — CTA, accents)
- `--primary-glow: #B08A5C`
- `--secondary: #E4D3B0` (champagne clair — surfaces douces)
- `--muted: #EFE6D3`
- Ombres chaudes teintées bronze, radius `0.75rem`, beaucoup d'air.

**Typographie**
- Titres : **Cormorant Garamond** (serif élégant, féminin, luxueux)
- Corps : **Inter** (sans-serif ultra lisible sur mobile)
- Chargés via `<link>` dans `__root.tsx` head (Tailwind v4 : jamais `@import` d'URL dans styles.css).

## Architecture des routes
Site à une seule page longue (institut = one-pager efficace pour ce marché, tout le contenu accessible en 1 scroll depuis un partage WhatsApp), MAIS chaque section a un `id` et un ancrage propre. La home reste `src/routes/index.tsx` avec head() dédié SEO.

```
src/routes/
  __root.tsx        → shell + fonts + WhatsApp flottant global + modale globale
  index.tsx         → landing complète (hero → footer)
```

Si le client demande plus tard des pages dédiées (blog, prestations détaillées), la structure permet la migration.

## Structure du composant Index (dans l'ordre)

```
<StickyHeader />                  ← se masque au scroll ↓, réapparaît au scroll ↑
  <Hero />                        ← image bg + accroche + CTA Réserver
  <WhyUs />                       ← 4 piliers extraits des vrais avis
  <Services />                    ← accordéon 4 catégories
  <Gallery />                     ← grille 6-8 visuels
  <Reviews />                     ← 4.2★ + 50 avis + 6 cartes réelles + lien Google
  <Contact />                     ← 2 colonnes : infos+horaires / formulaire
  <FinalCTA />                    ← bloc bronze plein largeur
  <Footer />                      ← socials + copyright
<WhatsAppFloat />                 ← toujours visible
<ReviewFloat />                   ← visible uniquement quand footer entre en vue
<BookingModal />                  ← portail, ouvert par CTA "Réserver"
```

## Catégorisation des prestations (accordéon, 1 seule ouverte)
1. **Mains & pieds** — Manucure, Pédicure, Onglerie (gel UV, résine, acrygel)
2. **Regard & sourcils** — Microblading, Extensions de cils
3. **Épilation & maquillage** — Épilation à la cire, Services de maquillage
4. **Soins & bien-être** — Soins du visage, Soins du corps, Microneedling, Massage

Chevron animé, transition douce (`height` via Framer Motion), prix `Tarif sur demande`.

## Composants clés — détails techniques

### StickyHeader (comportement type X/Twitter)
- Hook custom `useScrollDirection()` : compare `scrollY` courant vs précédent.
- `translateY(-100%)` + `pointer-events: none` quand `direction === 'down'` ET `scrollY > 80`.
- `translateY(0)` dès que direction inverse.
- Transition CSS `transform 300ms ease`.
- Contient logo + CTA "Réserver" (ouvre modale).

### WhatsAppFloat
- `<a href="https://wa.me/22891494650" target="_blank">`
- Position `fixed bottom-6 right-6`, icône WhatsApp SVG inline, taille secondaire vs CTA principal.
- `aria-label="Contacter sur WhatsApp"`.

### ReviewFloat (Intersection Observer)
- `useInView(footerRef)` → visible uniquement quand footer intersect.
- Quand invisible : `opacity-0 pointer-events-none` (règle absolue respectée).
- Lien vers fiche Google Maps.

### BookingModal + BookingForm (composant partagé)
- Portail React (`createPortal` dans `document.body`).
- Overlay `bg-foreground/60 backdrop-blur-sm`, close sur clic extérieur + touche Échap + croix.
- Focus trap simple, `body { overflow: hidden }` quand ouverte.
- Formulaire = même composant `<BookingForm />` utilisé aussi dans la section Contact.

**BookingForm — champs :**
- Nom complet* (input text)
- Téléphone* (input tel, pattern local)
- Prestation* (select avec les 11 services)
- Date* (input date, JS `onChange` refuse lundi/dimanche → toast d'erreur)
- Créneau* (radio Matin 9h-13h / Après-midi 13h-19h)
- Message (textarea, optionnel)
- Submit : simulation → toast "Merci ! Nous vous recontactons rapidement." + `{/* À CONNECTER */}`

Styles : radius doux, focus ring bronze, aucun style navigateur par défaut, tap-friendly (min 44px height sur mobile).

### Section Reviews
- Header : étoiles remplies × 4 + demi-étoile (4.2/5) + "Basé sur 50 avis Google"
- Grille responsive de 6 cartes (les 6 avis fournis, verbatim, avec nom, note, date)
- Lien "Voir tous les avis sur Google →" vers l'URL Maps fournie

### Section Contact
- Colonne gauche :
  - Icône épinglette dans cercle bronze centré → adresse complète + lien "Voir l'itinéraire sur Google Maps →" (pas d'iframe, choix assumé : perf mobile + esthétique)
  - Icône téléphone dans cercle → `tel:+22891494650` cliquable
  - Bloc horaires : mardi-samedi 9h-19h en normal, Lundi/Dimanche "Fermé" en `text-muted-foreground italic`
- Colonne droite : `<BookingForm />`
- Mobile : stack vertical, colonne gauche d'abord.

### Footer
- Nom Sab' Esthétique en Cormorant
- 3 icônes sociales (Instagram, TikTok, Facebook) avec liens fournis, `target="_blank" rel="noopener"`
- Liens ancre : Prestations, Avis, Contact
- `© 2026 Sab' Esthétique — Tous droits réservés`

## SEO / Head (dans index.tsx)
- `title` : "Sab' Esthétique — Institut de beauté à Lomé | Manucure, soins, microblading"
- `description` : "Institut de beauté à Hedzranawoé, Lomé. Manucure, pédicure, onglerie, microblading, extensions de cils, soins visage et corps. 4,2★ sur Google. Réservez au 91 49 46 50."
- og:title, og:description, og:type=business.business, og:url (relatif), twitter:card
- JSON-LD `BeautySalon` avec adresse, téléphone, horaires, aggregateRating (4.2, 50), sameAs (Instagram/TikTok/Facebook)
- `<link rel="canonical" href="/">` sur la home uniquement

Root : viewport, charSet, og:site_name.

## Responsive & performance
- Mobile-first strict : design pensé à 375px puis élargi.
- Rows critiques : `grid-cols-[minmax(0,1fr)_auto]` avec `min-w-0` / `shrink-0` / `truncate` (règle du kit).
- Toutes les images : `loading="lazy"` (sauf hero), largeurs explicites, formats optimisés.
- Interactions tactiles : `onClick` partout, jamais `:hover` seul.
- Éléments masqués : toujours `pointer-events-none` associé.

## Assets à générer
1. Hero — intérieur d'institut chaleureux tons champagne/bronze, lumière douce
2. 6-8 visuels galerie — détails manucure, mains soignées, produits, ambiance salon
3. (optionnel) og:image — cover Sab' Esthétique branded

Tous via imagegen, sauvés dans `src/assets/`, importés en ES6.

## Livrables — ordre d'exécution
1. Installer Framer Motion (`bun add framer-motion`)
2. Écrire `src/styles.css` — tokens champagne/bronze + typo
3. Charger fonts via `<link>` dans `__root.tsx` head
4. Générer les images (hero + galerie) en parallèle
5. Créer les composants dans `src/components/sab/` :
   `StickyHeader`, `Hero`, `WhyUs`, `Services`, `Gallery`, `Reviews`, `Contact`, `FinalCTA`, `Footer`, `WhatsAppFloat`, `ReviewFloat`, `BookingModal`, `BookingForm`
6. Hook `useScrollDirection`
7. Réécrire `src/routes/index.tsx` avec composition complète + head SEO complet
8. Basculer la preview en mobile pour vérification finale

## Ce que je NE fais PAS
- Pas d'iframe Google Maps (perf mobile)
- Pas d'invention de tarif, slogan définitif, adresse, ou avis
- Pas de dark mode (institut = ambiance claire uniquement)
- Pas de multi-langue (français uniquement, marché local)
- Pas de backend connecté au formulaire (placeholder marqué)

Prêt à passer en build.
