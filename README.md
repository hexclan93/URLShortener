A modern URL Shortener web application that converts long links into short, shareable URLs. Built with fast performance and a clean user interface, it allows users to generate, manage, and access shortened links easily using modern web technologies and database integration.
# 🔗 URLShortner

A modern, fast, and responsive URL Shortener built with **Next.js**, allowing users to convert long URLs into short, easy-to-share links.

## 🚀 Features

- ✨ Generate short URLs instantly
- 🔗 Redirect short links to original URLs
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎨 Clean and modern UI
- 🗄️ MongoDB database integration
- 🔒 Duplicate URL handling
- 🌐 Easy deployment on Vercel

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- HTML5
- CSS3
- Tailwind CSS

### Backend
- Next.js API Routes

### Database
- MongoDB

### Tools
- Git
- GitHub
- Vercel

---

## 📂 Project Structure

```
URLShortner/
│
├── app/
│   ├── api/
│   ├── shorten/
│   ├── [shorturl]/
│   └── page.tsx
│
├── components/
│
├── lib/
│
├── public/
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/URLShortner.git
```

### 2. Navigate to project

```bash
cd URLShortner
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
MONGODB_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```

### 5. Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 📸 Screenshots

> Add screenshots of your application here.

Example:

```
Home Page
URL Generation
Redirect Page
```

---

## 🌍 Deployment

Deploy easily using **Vercel**.

```bash
npm run build
```

---

## 💡 How It Works

1. User enters a long URL.
2. The application generates a unique short code.
3. The original URL and short code are stored in MongoDB.
4. Visiting the short URL redirects users to the original website.

---

## 🔮 Future Improvements

- User authentication
- Custom short URLs
- QR Code generation
- Click analytics
- Dashboard
- Expiration dates for links
- Password-protected URLs
- Link management

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Shubham Kumar**

B.Tech Computer Science & Engineering Student

Aspiring Full Stack Developer & Cybersecurity Enthusiast

---

## 📜 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to star the repository!
