# Academic website

Plain HTML and CSS. No installation or build step is required.
Keep index.html, styles.css, interactions.js, and cv.pdf together in the publishing folder.
.nojekyll bypasses Jekyll processing on GitHub Pages.
README.md is documentation and does not appear on the homepage.

Upload extracted files, not the ZIP, to your GitHub Pages publishing folder.
For a standard user website, use repository atinourzad.github.io and publish
main / (root) in Settings > Pages > Deploy from a branch.
If your existing site publishes another branch or /docs, upload to that location
instead, or deliberately change Pages to main / (root).
Keep any existing CNAME if you use a custom domain.

To update the CV, download the PDF from Overleaf, rename it cv.pdf, and replace
cv.pdf in this same folder.
Edit text in index.html and design in styles.css.

interactions.js controls temporary link highlights. Upload it with the HTML and CSS.

font-demos.html compares three optional font pairings. Its companion scripts are included.
The default website typography is unchanged; ?font=editorial, ?font=warm, and ?font=modern enable temporary previews.
Upload interactions.js and font-preview.js with the website.
