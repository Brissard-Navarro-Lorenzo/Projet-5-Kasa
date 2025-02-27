# Projet n°5 : Créer une application web de location immobilière avec React

## Mission confiée :

-   Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives) et ce avec un code de qualité.

## 🛠 Outils et contraintes techniques ⚙️

### 🛠 Outils standards

-   Vite (alternative de Create React App)
-   React Router
-   Styling: Tout le style CSS doit être codé en utilisant Sass.
-   Pas de librairie React externe

### ⚙️ Contraintes techniques

#### React :

-   Découpage en composants modulaires et réutilisables ;
-   Un composant par fichier ;
-   Structure logique des différents fichiers ;
-   Utilisation des props entre les composants ;
-   Utilisation du state dans les composants quand c'est nécessaire ;
-   Gestion des événements ;
-   Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible ;
-   Utilisation de composants fonctionnels recommandée

#### React Router :

-   Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
-   Il existe une page par route.
-   La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
-   La logique du routeur est réunie dans un seul fichier

### Contraintes fonctionnelles

-   Pour le défilement des photos dans la galerie (composant Gallery) : ● Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. ● Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. ● S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
-   La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
-   Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
-   Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer. ● Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Supports à disposition :

### Cours :

-   [Débutez avec React](https://openclassrooms.com/fr/courses/7008001-debutez-avec-react)
-   [Créez une application React complète](https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete)
-   [Créez des animations CSS modernes](https://openclassrooms.com/fr/courses/5919246-creez-des-animations-css-modernes)
-   [Simplifiez-vous le CSS avec Sass](https://openclassrooms.com/fr/courses/8069761-simplifiez-vous-le-css-avec-sass)

### Outils :

-   [Fichiers JSON contenant les 20 dernières annonces de logements](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)
-   [Maquettes Figma du site](https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design&t=1KgUwWWFtuAVbsJ5-0)
-   [Prototypes du site](https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1)
