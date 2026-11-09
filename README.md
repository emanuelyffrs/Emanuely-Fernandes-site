# Emanuely Fernandes — Portfolio

A bilingual (English / Brazilian Portuguese), single-page portfolio built with plain HTML, CSS and JavaScript. No frameworks, no build step, no API keys.

## Files

```
index.html        page structure and content (English by default)
styles.css        all styling and the color palette
script.js         EN / PT-BR dictionary, language switch, mobile menu
assets/
  favicon.svg     pixel heart icon
  profile-photo.jpg   <- YOU ADD THIS (see below)
.nojekyll         tells GitHub Pages to serve the files as they are
README.md         this file
```

## Publish with GitHub Pages

1. On GitHub, create a new **public** repository (for a personal site you can name it `emanuelyffrs.github.io`, or use any name such as `portfolio`).
2. Upload **everything in this folder**: `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README.md` and the `assets` folder (with your photo inside). Keep the structure exactly as above, with `index.html` at the root of the repository.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose the branch **main** and the folder **/ (root)**, then click **Save**.
6. Wait one or two minutes. The address appears at the top of the Pages screen:
   - `https://emanuelyffrs.github.io/` if the repository is called `emanuelyffrs.github.io`
   - `https://emanuelyffrs.github.io/<repository-name>/` for any other name

All paths in the project are relative, so it works in both cases.

## What you need to do manually

- **Add your photo.** Save it as `assets/profile-photo.jpg` (square crop, at least 400 × 400 px works well). Until then, the About section shows a circle with your initials. If your file is a PNG or has another name, change the `src` in `index.html` (search for `profile-photo`).
- **Mackenzie (ADS).** The entry is already written but hidden. After your enrollment is confirmed, open `index.html`, find the comment above the Mackenzie item and delete the word `hidden` from that `<li>`. Once classes begin, edit `education.ads.status` in `script.js` (both languages) to say "In progress" / "Em andamento".
- **Experience dates.** No dates were added because none were provided. If you want them, add a line inside each timeline item in `index.html` and its two translations in `script.js`.

## How to edit text

Every visible text lives in the `translations` object at the top of `script.js`, once for `en` and once for `pt-BR`. Elements in `index.html` point to those texts with `data-i18n="key"`. When you change a text, change it in both languages. Texts for `alt` and `aria-label` use `data-i18n-attr="attribute:key"`.

The chosen language is remembered with `localStorage`. If the browser blocks storage, the site still works and just starts in English.

## Preview on your computer

Open `index.html` by double-clicking it. Everything works from a local file.
