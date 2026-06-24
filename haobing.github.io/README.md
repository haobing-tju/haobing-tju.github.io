# Bing Hao Academic Homepage

This repository contains a static academic homepage for GitHub Pages.

## Repository name

For the URL `https://haobing.github.io`, the GitHub repository should be named:

```text
haobing.github.io
```

If your actual GitHub username is different, rename the repository to:

```text
<your-github-username>.github.io
```

and your URL will be:

```text
https://<your-github-username>.github.io
```

## File structure

```text
.
├── index.html
├── style.css
├── main.js
└── assets
    ├── files
    │   └── Bing_Hao_CV.pdf
    └── img
        └── profile.jpeg
```

## Deployment steps

1. Create a public GitHub repository named `haobing.github.io`.
2. Upload all files in this folder to the root of the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/root`.
6. Wait for GitHub Pages to finish deployment.
7. Visit `https://haobing.github.io`.

## Notes

- The site is a lightweight static homepage inspired by the AcadHomepage style.
- The language switch is implemented with plain JavaScript and uses English as the default language.
- Replace placeholder links such as GitHub, Google Scholar, paper project links, or code links when available.
- The CV PDF is stored at `assets/files/Bing_Hao_CV.pdf`.
