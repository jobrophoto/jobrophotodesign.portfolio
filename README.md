# JOBRO PHOTO DESIGN — website

Plain HTML, CSS, and JavaScript. No build step, no frameworks. Upload the
whole folder (keeping the folder structure) to any web host and it works.

--------------------------------------------------------------------------
## FILE STRUCTURE

    index.html            Home
    work.html             Portfolio grid + lightbox
    about.html            About / bio
    design.html           Publications (EPUBs)
    contact.html          Résumé + contact
    web-dev.html          Web/dev projects (NOT in the menu yet — see below)
    README.md             This file

    assets/
      css/style.css       All styling, shared by every page
      js/script.js        All behaviour (menu, carousel, typewriter, lightbox, filters)
      docs/
        joseph-boucher-resume.pdf
      images/
        photography/      Portraits and product shots
        design/           Posters, album covers, EPUB covers and spreads
        web/              Website screenshots

Pages stay at the top level so URLs remain short (yoursite.com/work.html).
Everything that isn't a page lives in assets/.

### File naming rules
- lowercase, words separated by hyphens: `blue-hour-portrait.jpg`
- describe what's in the image, not the camera/export name
- no spaces, capitals, or special characters (they break links on many hosts)

--------------------------------------------------------------------------
## PUBLISHING

Upload everything, keeping the folders intact. `index.html` is the home page —
most hosts serve it automatically at your domain. Works on Netlify, GitHub
Pages, cPanel/Bluehost, Namecheap, etc.

Fonts load from Google Fonts, so visitors need an internet connection
(automatic for any normal visitor).

--------------------------------------------------------------------------
## EDITING — THE COMMON THINGS

### Change a colour (whole site at once)
Open `assets/css/style.css`, top section "Design tokens". Change `--pk`
(the yellow-green accent) or `--bg` (background).

To change the side margin, edit `--pad` in the same section.

### Change text
Open any `.html` file and edit the words between the tags.

### Add a photo to the Work page
1. Put the image in the right folder, e.g. `assets/images/photography/`.
2. Open `work.html`, find the gallery (marked "GALLERY GRID").
3. Copy one whole `<div class="cell" ...> ... </div>` block and paste it.
4. In the copy, change:
     - src="assets/images/photography/YOUR-FILE.jpg"   (the <img> src AND data-img)
     - data-title="YOUR TITLE"
     - data-cat="portrait"          (one of: product portrait brand
                                      graphic web album — controls filtering)
     - data-cat-label="PORTRAIT"    (label shown on hover/lightbox)
   Update the number in <div class="tcorner">08</div> and the caption too.

### Fill an EPUB / spread slot (Design page)
Replace a placeholder box such as
    <div class="slot pub-cover ph"><b>EPUB 01 — COVER</b><i>FIG.01</i></div>
with
    <div class="slot pub-cover"><img src="assets/images/design/my-cover.jpg" alt="Cover"></div>
Put EPUB files in `assets/docs/` and link the button:
    <a ... href="assets/docs/my-book.epub" download>

### Add your social links
Search every page for  href="#"  and replace `#` with the real URL.

--------------------------------------------------------------------------
## TURNING ON THE WEB/DEV PAGE

1. In `web-dev.html`, delete the `<div class="draftbar">…</div>` line.
2. In every page's menu (`<nav class="nav-links">`), add:
       <a class="nswipe" href="web-dev.html">WEB</a>
