# Project Brief – Climb.

## Overview

"Climb." is a modern, minimalistic fitness/lifestyle/self-improvement brand. It sells inspirational and motivational products such as:

- Stickers
- T-Shirts
- Caps
- Water Bottles
- Stationery

The brand’s identity is inclusivity, inspiration, momentum, and the desire to be a genuine, positive force for the world. We live in an AI age where people increasingly shoot for the hustle culture, without stopping to appreciate the beauty of the world around them or the beauty that is inside of them. Climb wants to bridge the gap between those two aspects of life in a positive, fun-loving and colorful way.

The period at the end of the name ("Climb.") is intentional and should always be preserved in text and logo.

---

## Tone & Style

- Minimalistic but expressive, think Nike meets AirBnB
- Light and neutral color palette with a focus on imagery
- Inspiring, bold typography
- Subtle but satisfying motion (Framer Motion)
- Mission-first design — emotionally driven, purpose focused

---

## Tech Stack

- Framework: Vite + React
- Styling: TailwindCSS
- Animations: Framer Motion
- Eventually: Shopify or Stripe integration

---

## Sections to Include

1. **Hero Section**

   - Logo and tagline
   - Short one-liner like: "Climb toward your best self."
   - Background image or color block

2. **Mission Statement**

   - A few inspirational lines about self-betterment, growth, and purpose
   - Possibly animated fade-ins

3. **Product Preview Grid**

   - Images of sticker packs, shirts, bottles, etc.
   - Just placeholder images for now

4. **Core Values**

   - Cards or blocks like "Discipline", "Momentum", "Growth"

5. **Mailing List Signup**

   - Just a simple email field + CTA (can integrate Formspree or Mailchimp later)

6. **Footer**
   - Instagram / social links
   - Logo & brand name

---

## Design Notes

- Use Tailwind for layout and spacing
- Use Framer Motion for entrance effects and scroll triggers
- Try to keep component files small and modular
- Keep the entire site on a single page for now (scrollable landing page)

---

## To Do Later

- Shopify or Snipcart integration
- Blog/Articles section
- About/Team page

---

## Structure

```css
src/
├─ components/
│  ├─ Navbar.jsx
│  ├─ HeroSection.jsx
│  ├─ MissionStatement.jsx
│  └─ ProductShowcase.jsx
├─ pages/
│  ├─ Home.jsx
│  └─ About.jsx (optional for now)
├─ App.jsx
├─ main.jsx
```
