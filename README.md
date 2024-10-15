## Frontend Ma ville et moi

## 🌞 Description
**Ma Ville et Moi** est une application frontend conçue pour encourager la participation citoyenne. Développée en **React.js** avec **Vite**, l'application permet aux utilisateurs de :

- Proposer des idées pour la ville.
- Voter sur des projets locaux.
- Discuter des problématiques municipales dans un forum communautaire.

L'objectif est de favoriser la transparence, l'inclusion et la collaboration entre les citoyens et la municipalité.

---

## 🚀 Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 21.7.3 recommandée)
- [npm](https://www.npmjs.com/) (fourni avec Node.js)

---

## ⚙️ Installation
### 1. Cloner le dépôt
```bash
git clone https://github.com/timothedepoorter/ma-ville-et-moi-frontend.git
```
### 2.Accéder au répertoire du projet 
```bash
d ma-ville-et-moi-frontend
```
### 3.Installation des dépendances
```shell
npm install
```

# Lancement du projet
### 1.En mode développement
```shell
npm run dev
```
Acceder a l'application via : http://locahost:5173/
### 2. Build pour la production
Les fichiers de production seront générés dans le dossier dist/.
```shell
npm run build
```
---

# 🐳 Docker
### 1.Construire l'image Docker
```shell
docker build -t timothedepoorter/ma-ville-et-moi-frontend .
```
### 2.Lancer le conteneur Docker
```shell
docker run -p 80:80 timothedepoorter/ma-ville-et-moi-frontend
```
---

# 📜 Script Npm
npm run dev : Lancer le serveur de développement avec Vite
npm run build : Compiler le projet pour la production
npm run preview : Prévisualiser le build de production

---
# 🛠️ Technologies utilisées

- **React.js** - Bibliothèque pour construire l'interface utilisateur
- **Vite** - Outil de build rapide pour le développement front-end
- **Tailwind CSS** - Framework CSS utilitaire 

---

# ⚡CI/CD avec GitHub Actions
Le projet utilise GitHub Actions pour l'intégration continue et le déploiement avec Docker. Le fichier de workflow CI/CD est configuré pour :

1. Installer les dépendances
2. Compiler le projet
3. Construire et pousser l'image Docker vers Docker Hub

---

# 👥 Auteurs
Timothe Depoorter , Justine Wallet , Antoine Valenduc
