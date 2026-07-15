# 🤖 AI Chat Assistant

Un assistant conversationnel moderne inspiré de ChatGPT, développé avec **Next.js**, **React**, **Django REST Framework** et une architecture REST sécurisée. Le projet offre une interface fluide, une authentification des utilisateurs, la gestion des conversations, ainsi que l'intégration de modèles d'intelligence artificielle.

---

## 📸 Aperçu

![Preview](./public/preview.png)

> Remplacez `preview.png` par une capture d'écran de votre application.

---

## ✨ Fonctionnalités

- 💬 Conversations en temps réel
- 🤖 Intégration d'un modèle d'IA (OpenAI, Gemini, Claude ou autre)
- 👤 Authentification utilisateur (JWT)
- 🔒 Routes sécurisées
- 📝 Historique des conversations
- 📂 Gestion des discussions
- 🌙 Mode sombre / clair
- 📱 Interface responsive
- ⚡ Streaming des réponses IA (optionnel)
- 📎 Support futur des pièces jointes
- 🔍 Recherche dans les conversations
- ❤️ Sauvegarde automatique

---

## 🛠️ Stack technique

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Axios
- React Hook Form
- Zod

### Backend

- Django
- Django REST Framework
- Simple JWT
- PostgreSQL
- Django CORS Headers
- Pillow

### Intelligence Artificielle

- OpenAI API
- Gemini API
- Claude API

*(Choisissez le fournisseur que vous utilisez.)*

---

## 📁 Architecture

```
chat-ai/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── types/
│   └── public/
│
├── backend/
│   ├── users/
│   ├── chats/
│   ├── ai/
│   ├── config/
│   └── requirements.txt
│
└── README.md
```

---

## 🚀 Installation

### Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/chat-ai.git

cd chat-ai
```

---

# Frontend

```bash
cd frontend

npm install

npm run dev
```

Le frontend sera accessible sur

```
http://localhost:3000
```

---

# Backend

Créer un environnement virtuel

```bash
python -m venv env
```

Activation

Windows

```bash
env\Scripts\activate
```

Linux / Mac

```bash
source env/bin/activate
```

Installer les dépendances

```bash
pip install -r requirements.txt
```

Effectuer les migrations

```bash
python manage.py migrate
```

Créer un super utilisateur

```bash
python manage.py createsuperuser
```

Lancer le serveur

```bash
python manage.py runserver
```

Backend disponible sur

```
http://127.0.0.1:8000
```

---

## ⚙️ Variables d'environnement

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api

NEXT_PUBLIC_OPENAI_API_KEY=

NEXT_PUBLIC_GEMINI_API_KEY=
```

### Backend (.env)

```env
SECRET_KEY=

DEBUG=True

ALLOWED_HOSTS=localhost,127.0.0.1

DATABASE_URL=

OPENAI_API_KEY=

GEMINI_API_KEY=

CORS_ALLOWED_ORIGINS=http://localhost:3000
```

---

## 📚 API

### Authentification

| Méthode | Endpoint |
|----------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| POST | /api/auth/refresh |
| GET | /api/auth/profile |

---

### Conversations

| Méthode | Endpoint |
|----------|----------|
| GET | /api/chats |
| POST | /api/chats |
| GET | /api/chats/:id |
| DELETE | /api/chats/:id |

---

### Messages

| Méthode | Endpoint |
|----------|----------|
| GET | /api/messages |
| POST | /api/messages |
| DELETE | /api/messages/:id |

---

## 🔒 Authentification

Le projet utilise :

- JWT Access Token
- Refresh Token
- Protected Routes
- Authentication Middleware

---

## 📱 Responsive

Compatible avec :

- Desktop
- Tablette
- Mobile

---

## 🧪 Fonctionnalités prévues

- [ ] Streaming des réponses IA
- [ ] Génération d'images
- [ ] Upload de fichiers
- [ ] Reconnaissance vocale
- [ ] Synthèse vocale
- [ ] Support Markdown
- [ ] Export PDF
- [ ] Export Word
- [ ] Recherche intelligente
- [ ] Conversations partagées
- [ ] Notifications

---

## 🤝 Contribution

Les contributions sont les bienvenues.

1. Fork
2. Créer une branche

```bash
git checkout -b feature/nouvelle-fonction
```

3. Commit

```bash
git commit -m "Ajout d'une nouvelle fonctionnalité"
```

4. Push

```bash
git push origin feature/nouvelle-fonction
```

5. Ouvrir une Pull Request

---

## 📄 Licence

Distribué sous la licence MIT.

---

## 👨‍💻 Auteur

Développé avec ❤️ par **Ulrich LeBlack**

GitHub :
https://github.com/54blackghost
