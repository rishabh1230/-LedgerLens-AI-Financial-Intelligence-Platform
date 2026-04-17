# 🔍 LedgerLens — AI Financial Intelligence Platform

LedgerLens is a full-stack, AI-powered financial intelligence and research platform designed to convert complex corporate filings and ledger data into structured, actionable insights.

It combines **Retrieval-Augmented Generation (RAG)** for intelligent querying with **cryptographic hash chaining** to ensure data integrity.

---

## 🚀 Links

- 💻 Repository  
https://github.com/rishabh1230/LedgerLens  

---

## 🧠 Core Idea

> Transform unstructured financial data into verifiable, queryable intelligence.

---

## ⚙️ System Flowchart

```mermaid
flowchart TD

A[User Uploads Financial Document]
B[Document Parsing Engine]
C[Structured Data Extraction]
D[Store in Database]
E[Embedding Generation]
F[Vector Store Indexing]
G[User Query Input]
H[RAG Pipeline]
I[Context Retrieval]
J[AI Response Generation]
K[Return Insight]

L[Ledger Entry]
M[Generate SHA-256 Hash]
N[Link Previous Hash]
O[Immutable Storage]
P[Verification Engine]

A --> B --> C --> D
C --> E --> F
G --> H --> I --> J --> K
D --> L --> M --> N --> O --> P
```

---

## 🚀 Features

- Intelligent document parsing  
- RAG-based natural language querying  
- SHA-256 tamper-evident ledger  
- Real-time verification system  
- Interactive dashboard  

---

## 🧩 Tech Stack

**Frontend**
- React.js
- TypeScript
- Tailwind CSS

**Backend**
- FastAPI
- SQLModel / SQLAlchemy

**Database**
- SQLite / PostgreSQL

**AI**
- Gemini AI
- LangChain

**DevOps**
- Docker
- GitHub Actions

---

## 📦 Installation

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 Docker

```bash
docker-compose up --build
```

---

## 🧪 Testing

```bash
cd backend
pytest
```

---

## 🔐 Hash Chain Flow

```mermaid
flowchart LR

A[Entry 1] --> B[Entry 2]
B --> C[Entry 3]
C --> D[Entry N]

E[Verification] --> A
E --> B
E --> C
E --> D
```

---

## 👨‍💻 Author

Rishabh Pandey
