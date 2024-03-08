# Portfolio - Ion Munteanu

## Used packages

-   framer-motion
-   react-icons
-   uuid
-   @react-three/drei
-   @react-three/fiber
-   @types/uuid
-   prettier-plugin-tailwindcss
-   prettier
-   shadcn-ui@latest
-   dropdown-menu

```bash
bun i -D framer-motion react-icons uuid @react-three/drei @react-three/fiber @types/uuid prettier-plugin-tailwindcss prettier
```

```bash
bunx --bun shadcn-ui@latest init
bunx --bun shadcn-ui@latest add dropdown-menu
```

---

## Install on Astro

```bash
bun create astro@latest
bun astro add react
bun astro add tailwind
```

---

## Missing Parts

-   [x] Responsive Design
-   [x] Burger Menu on Phone
-   [x] Light/Dark Mode
-   [x] EN/ES/CAT

```html
<link
    rel="alternate"
    hreflang="en-us"
    href="https://www.example.com/en-us/page"
/>
<link
    rel="alternate"
    hreflang="fr-fr"
    href="https://www.example.com/fr-fr/page"
/>
```

-   [x] Arrow to top
-   [x] Projects Show More...
-   [x] Skills Show by Pagination
-   [ ] When hover over description, show like a ball with negative color
-   [ ] Make my job title write itself
-   [ ] Add more animations / Projects["Hover", "Click", "Scroll"]
