JOBRO PHOTO DESIGN — STATIC SITE
================================

WHAT THIS IS
------------
Six self-contained web pages, ready to upload to any web host
(Netlify, GitHub Pages, Namecheap, Bluehost, cPanel, etc.).
No build step, no server needed.

  index.html    -> Home
  work.html     -> Work / portfolio
  about.html    -> About
  design.html   -> Design (EPUBs)
  contact.html  -> Contact + resume download
  web-dev.html  -> Web/Dev projects (not linked in the menu yet)

HOW TO PUBLISH
--------------
Upload the ENTIRE contents of this folder to your host, keeping all
files together in the same directory. index.html is your home page —
most hosts serve it automatically at your domain root.

Keep the image files (.jpg / .png) and the PDF next to the HTML files.
The Work page loads its photos from those files by name, so don't move
or rename them.

NOTE: the pages need an internet connection to load their fonts and
rendering scripts. That's automatic for any normal website visitor.

ADDING MORE WORK PHOTOS LATER
-----------------------------
These .html files are compiled/minified and not meant to be hand-edited.
The clean, editable source lives in your design project. To add a photo:

  1. Drop the new image into the project.
  2. Add one line to the Work list (title + filename).
  3. Re-export this folder and re-upload.

Easiest path: just ask and it'll be added + re-exported for you.
