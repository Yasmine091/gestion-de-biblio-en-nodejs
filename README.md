# Gestion de bibliothèque en nodejs

Compléter un site web en nodejs permettant de gérer une bibliothèque.

## Contexte du projet
La bibliothèque municipale a fait appel l’année dernière à votre entreprise pour réaliser un site internet. Le site avait 2 objectifs : fournir des informations utiles (horaire d’ouverture, adresse, prix des abonnements...) et permettre à l’utilisateur de consulter les ouvrages présents à la bibliothèque.

Suite à de bons retours de la part des utilisateurs et des agents qui sont moins sollicités par téléphone pour fournir ces renseignements, la bibliothèque a décidé d’étendre cette fonction pour les CD. Un souci technique a malheureusement effacer les informations de la page d'accueil et a propos.

Le code existant se trouve à cette adresse:

[https://gitlab.com/labege_carbonne/gestion-biblio-nodejs]() (Faire un fork ou un nouveau dépot, pas un clone)

A partir du dossier de code fourni, réalisez les éléments suivants, en respectant l’architecture existante :

* Sur la page Accueil, ajouter les informations utiles.
* Sur la page A propos, ajouter la présentation de la bibliothèque.
* Sur la navbar, ajouter le lien de la nouvelle page ‘cd’.
* Créer la page cd en reprenant exactement la même structure que la page livre.
* Tout comme pour les livres, les informations pour les cd seront stockés dans un fichier json. La structure sera exactement la même, seules les informations sont à modifier
* Vérifier que le site est responsive sur mobile.

Technologies à utiliser : Html5 / Bootstrap / Node JS / Express / Ejs / JSON.

## Modalités pédagogiques
* Travail individuel.
* A rendre avant jeudi soir minuit.
* Technologies à utiliser : Html5 / Bootstrap / Node JS / Express / Ejs / JSON.

## Critères de performance
* La page d'accueil affiche toutes les informations souhaitées par le client. Basez vous sur la bibliothèque de votre commune, ou la plus proche.
* La page A propos affiche la présentation de la bibliothèque de votre commune, ou la plus proche.
* La barre de navigation affiche le lien de la page cd, et renvoie bien vers la page cd.
* La page cd affiche correctement tout les cd présent dans le json.
* Le site est responsive sur mobile.
* Le code est correctement indenté (se baser sur le style du code existant).
* Chaque fonction est documentée (JSDoc).

## Modalités d'évaluation
Revue de code avec le formateur.

## Livrables
* Dépôt gitlab.
* Site en ligne sur Heroku.
