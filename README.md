# Frontend zadanie

Tento projekt je jednoduchá aplikácia pre výpis produktov a detail produktu, vytvorená v Next.js s použitím TanStack Query a Tailwind CSS + shadcn.ui.

## Spustenie projektu

1. Nainštaluj závislosti:
   ```bash
   npm install
   ```
2. Spusti vývojový server:
   ```bash
   npm run dev
   ```
3. Otvor [http://localhost:3000](http://localhost:3000) vo svojom prehliadači.

## Použité technológie

- **Next.js** – React framework pre server-side rendering a routing
- **TanStack Query** – Na získavanie a cachovanie dát z API, s pomocou axios knižnice
- **Tailwind CSS** – Na rýchle a jednoduché štýlovanie komponentov
- **Shadcn.ui** – Knižnica moderných a prispôsobiteľných React komponentov

## Funkcionalita

- Výpis produktov na hlavnej stránke (/products)
- Detail produktu po kliknutí na produkt (/products/:id)
- Základné ošetrenie chýb a loading stavov
- Responzívny dizajn
- Mock API pre produkty (dáta sú simulované, dummyjson.com)

## Stručný popis riešenia

Aplikácia využíva TanStack Query na získavanie dát z mock API. Komponenty sú rozdelené na znovupoužiteľné časti. Štýly sú riešené pomocou Tailwind CSS + Shadcn.ui. Dôraz bol kladený na jednoduchosť, prehľadnosť a základnú responzivitu.

## Demo
[https://symmy-zadanie.netlify.app/products](https://symmy-zadanie.netlify.app/products)