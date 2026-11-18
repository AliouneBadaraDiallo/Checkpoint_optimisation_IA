function Carte(titre, prix, caracteristiques, options = {}) {
  const { libelleBouton = "Démarrer l'essai", recommande = false, onAction } = options;

  const article = document.createElement("article");
  article.className = recommande ? "carte recommandee" : "carte";

  if (recommande) {
    const badge = document.createElement("p");
    badge.className = "carte-badge";
    badge.textContent = "Recommandé";
    article.appendChild(badge);
  }

  const titreEl = document.createElement("h2");
  titreEl.className = "carte-titre";
  titreEl.textContent = titre;

  const prixEl = document.createElement("p");
  prixEl.className = "carte-prix";
  prixEl.textContent = prix;

  const liste = document.createElement("ul");
  liste.className = "carte-features";
  caracteristiques.forEach((texte) => {
    const item = document.createElement("li");
    item.textContent = texte;
    liste.appendChild(item);
  });

  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.className = "carte-btn";
  bouton.textContent = libelleBouton;
  if (onAction) bouton.addEventListener("click", onAction);

  article.append(titreEl, prixEl, liste, bouton);
  return article;
}

const forfaits = document.querySelector("#forfaits");

forfaits.append(
  Carte("Forfait de base", "9,99 $/mois", [
    "1 Go de stockage",
    "Assistance de base",
    "Toutes les fonctionnalités principales",
  ]),
  Carte(
    "Forfait Pro",
    "19,99 $/mois",
    [
      "50 Go de stockage",
      "Assistance prioritaire",
      "Toutes les fonctionnalités principales",
      "Export des données",
    ],
    { recommande: true }
  ),
  Carte(
    "Forfait Équipe",
    "49,99 $/mois",
    [
      "Stockage illimité",
      "Assistance dédiée",
      "Gestion des rôles",
      "Facturation centralisée",
    ],
    { libelleBouton: "Contacter l'équipe" }
  )
);