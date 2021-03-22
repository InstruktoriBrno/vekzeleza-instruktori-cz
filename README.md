Věk železa (Tvrz 2021)
======================
* Webová aplikace, která běží v prohlížeči (na klientském stroji),
  nasazuje se ve formě statických assetů.
* Vytvořeno v [Gatsby](https://www.gatsbyjs.com/).
* Používá React a Typescript.
* Vyžaduje `node` a `yarn`.

Vývoj a build
-------------
* Instalace závislostí: `yarn install`.
* Pro vývoj na devserveru `yarn start`. Aplikace běží na portu 8000.
* Pro produkční verzi `yarn build`. Statické assety jsou ve složce `public`.
* Build a deploy na GitHub Pages je nastavený pomocí GitHub Actions (složka `.github/workflow`).
  Výsledky jsou v branchi `gh-pages`.
