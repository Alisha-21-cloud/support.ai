
# 🤖 AI Chatbot SaaS Platform

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Scalekit](https://img.shields.io/badge/Scalekit-4F46E5?style=for-the-badge&logo=auth0&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![SaaS](https://img.shields.io/badge/SaaS-Multi--Tenant-success?style=for-the-badge)
![AI](https://img.shields.io/badge/AI-Powered-blueviolet?style=for-the-badge)

A **production-grade, full-stack SaaS AI chatbot platform** designed to be embedded into any website.  
Built with scalability, security, and real-world SaaS architecture in mind, this project enables businesses and developers to deploy AI-powered customer support chatbots with ease.

---

## 🚀 Overview

This project is a **multi-tenant AI chatbot SaaS** that allows multiple users and organizations to manage chatbots for multiple websites from a single dashboard.

Each chatbot can be embedded into any website using a lightweight script-based widget, making it ideal for SaaS products, startups, agencies, and client-based deployments.

---

## ✨ Key Features

- 🤖 AI-powered customer support chatbot
- 🌐 Embeddable chat widget (script/tag based)
- 🏢 Multi-tenant SaaS architecture  
  - Multiple organizations  
  - Multiple users  
  - Multiple websites per organization
- 🔐 Secure authentication & organization management using Scalekit
- 💬 Persistent chat history storage
- ⚙️ Configurable chatbot behavior per website
- 🧠 AI integration for intelligent responses
- 🎨 Modern, responsive UI using Next.js App Router
- ☁️ Production-ready deployment on Vercel

---

## 🛠 Tech Stack

- **Frontend & Backend:** Next.js (App Router)
- **Database:** MongoDB
- **Authentication & Organizations:** Scalekit
- **AI Layer:** Integrated AI model for conversational responses
- **Widget:** Script-based embeddable chat client
- **Deployment:** Vercel

---

## 🧩 Architecture Highlights

- **SaaS-ready design** with strict tenant isolation
- **Secure APIs** for chat, configuration, and analytics
- **Reusable embeddable widget** for easy client onboarding
- **Scalable database schema** for users, organizations, websites, and conversations
- **Clean separation** between dashboard and widget runtime

---

## 📦 Use Cases

- SaaS customer support systems
- Startup landing pages
- E-commerce websites
- Portfolio & business websites
- Agency client solutions
- Internal product support tools

---

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Create a `.env.local` file and configure:

```env
MONGODB_URI=
SCALEKIT_CLIENT_ID=
SCALEKIT_CLIENT_SECRET=
AI_API_KEY=
NEXT_PUBLIC_APP_URL=
```

---

## 🚢 Deployment

The project is fully optimized for **Vercel** deployment.

```bash
npm run build
npm run start
```

Environment variables should be configured in the Vercel dashboard.

---

## 📈 Future Enhancements

- Analytics dashboard for chatbot performance
- Role-based access control
- Custom AI prompt tuning per website
- Webhook & CRM integrations
- Usage-based billing system

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Syed Ahmad Alisha**  
Full‑Stack Developer | AI & SaaS Engineer  

Built with a focus on real-world SaaS scalability, developer experience, and production readiness.
