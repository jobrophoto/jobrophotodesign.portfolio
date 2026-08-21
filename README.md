# JOBRO PHOTO DESIGN — website

Plain HTML, CSS, and JavaScript. No build step, no frameworks. Upload the
whole folder to any web host and it works.

--------------------------------------------------------------------------
## FILES

  index.html      Home
  work.html       Portfolio grid + lightbox
  about.html      About / bio
  design.html     Publications (EPUBs)
  contact.html    Résumé + contact
  web-dev.html    Web/dev projects  (NOT linked in the menu yet — see below)

  style.css       All styling, shared by every page
  script.js       All behaviour (menu, carousel, typewriter, lightbox, filters)

  *.jpg / *.png   Images
  Joseph Boucher - Resume.pdf

--------------------------------------------------------------------------
## PUBLISHING

Upload everything in this folder, keeping the files together. `index.html`
is the home page — most hosts serve it automatically at your domain.
Works on Netlify, GitHub Pages, cPanel/Bluehost, Namecheap, etc.

The site needs an internet connection to load its fonts (Google Fonts).
That is automatic for any normal visitor.

--------------------------------------------------------------------------
## RESPONSIVE / EDGE-TO-EDGE

It adapts to phones, tablets, and desktops automatically. Backgrounds span
the full screen; text keeps a small side margin that grows on bigger
screens. On phones the menu collapses into a ☰ button.

To change the side margin, edit `--pad` near the top of `style.css`.

--------------------------------------------------------------------------
## EDITING — THE COMMON THINGS

### Change a colour (whole site at once)
Open `style.css`, top section “Design tokens”. Change `--pk` (the yellow-
green accent) or `--bg` (background) and every page updates.

### Change text
Open any `.html` file and edit the words between the tags. For example:
    <div class="fB" style="font-size:30px">UMBRELLA CORP.</div>
Change `UMBRELLA CORP.` to whatever you like.

### Add a photo to the Work page
1. Put your image file in this folder (same place as work.html).
2. Open `work.html`, find the gallery (marked "GALLERY GRID").
3. Copy one whole `<div class="cell" ...> ... </div>` block.
4. Paste it, then change FOUR things in the copy:
     - src="YOUR-FILE.jpg"          (twice: the <img> src AND data-img)
     - data-title="YOUR TITLE"
     - data-cat="portrait"          (one of: product portrait brand
                                      graphic web album — controls filtering)
     - data-cat-label="PORTRAIT"    (the label shown on hover/lightbox)
   Update the number in <div class="tcorner">08</div> and the caption too.
The category filter buttons and the click-to-enlarge lightbox pick it up
automatically.

### Fill an EPUB / spread slot (Design page)
In `design.html` the empty boxes look like:
    <div class="slot pub-cover ph"><b>EPUB 01 — COVER</b><i>FIG.01</i></div>
Replace the whole box with an image:
    <div class="slot pub-cover"><img src="my-cover.jpg" alt="Cover"></div>
Then set the download button’s link:  <a ... href="my-book.epub" download>

### Add your social / résumé links
Search any page for  href="#"  and replace `#` with your real URL
(LinkedIn, GitHub, Instagram, etc.). The résumé button on contact.html
already points at the PDF in this folder.

--------------------------------------------------------------------------
## TURNING ON THE WEB/DEV PAGE

`web-dev.html` exists but is not in the menu yet. When you’re ready:
1. In `web-dev.html`, delete the `<div class="draftbar">…</div>` line.
2. In every page’s menu (`<nav class="nav-links">`), add:
       <a class="nswipe" href="web-dev.html">WEB</a>

--------------------------------------------------------------------------
## NOTE ON UPLOADING IMAGES FROM THE WEBSITE ITSELF

A plain static site like this has no server, so there is no built-in
“upload” button that saves photos for every visitor. Adding a photo means
editing the code as above and re-uploading — which is free and works on
any host. If you ever want a real upload dashboard, that needs a CMS or
backend (e.g. WordPress), which is a different kind of setup.
