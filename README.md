# 📚 Book Shop.com

A modern book shop / book listing web application built with **React**, **Vite**, **React Router**, **Tailwind CSS**, and **DaisyUI**.

The app displays a collection of books, shows detailed information for each book, and allows users to add books to a read list using browser local storage.

---

## 🚀 Live Demo

https://resonant-boba-b43903.netlify.app/

---



---

## ✨ Features

* 📚 Display books from JSON data
* 🏠 Home page with a clean book banner
* 📖 Book cards with title, author, category, tags, and rating
* 🔍 Dynamic book details page using React Router params
* 📝 Add books to a read list
* 💾 Save selected read books in local storage
* 🔔 SweetAlert notification after adding a book
* ⚠️ Duplicate book alert if the book is already added
* 📋 Listed books page with Read Books and Wishlist Books tabs
* 🔐 Sign Up and Sign In routes
* 🎨 Responsive UI using Tailwind CSS and DaisyUI
* ⚡ Fast development experience with Vite

---

## 🛠️ Technologies Used

* React.js
* Vite
* React Router
* Tailwind CSS
* DaisyUI
* React Icons
* SweetAlert
* JavaScript
* JSON Data
* Local Storage

---

## 📁 Project Structure

```bash
Book-Shop.com/
├── public/
│   └── booksData.json
├── src/
│   ├── assets/
│   ├── Comopenets/
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── Hoom/
│   │   │   └── Hoome.jsx
│   │   └── Utility/
│   │       └── addToDB.js
│   ├── Pages/
│   │   ├── Abouts/
│   │   ├── BookDetails/
│   │   │   └── BookDetails.jsx
│   │   ├── Books/
│   │   │   └── BooksData.jsx
│   │   ├── Booksingel/
│   │   │   └── Book.jsx
│   │   ├── ListedBooks/
│   │   │   └── ListedBooks.jsx
│   │   ├── PageToRead/
│   │   ├── Root/
│   │   ├── SinUp/
│   │   └── sinin/
│   ├── Routers/
│   │   └── Routes.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Antor-Adhikary1216/Book-Shop.com.git
```

### 2. Go to the project folder

```bash
cd Book-Shop.com
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Now open the local server URL in your browser.

---

## 📦 Available Scripts

### Run development server

```bash
npm run dev
```

### Create production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run lint check

```bash
npm run lint
```

---

## 🧠 How the App Works

The app uses `booksData.json` as the main data source. The home page loads this data and displays book cards.

When a user clicks on a book card, React Router opens a dynamic details page based on the book ID. On the details page, the user can view the book image, author, category, review, tags, total pages, publisher, publishing year, and rating.

The **Read** button stores the selected book ID in local storage. If the same book is added again, the app shows an alert message instead of adding a duplicate.

---

## 🧩 Main Routes

| Route                 | Description                         |
| --------------------- | ----------------------------------- |
| `/`                   | Home page with banner and book list |
| `/bookdetails/:booId` | Dynamic book details page           |
| `/listedbook`         | Listed books page                   |
| `/pagetoread`         | Page to read route                  |
| `/singUp`             | Sign up page                        |
| `/sinIn`              | Sign in page                        |

---

## 📚 Book Data Fields

Each book item contains:

```js
{
  bookId,
  bookName,
  author,
  image,
  review,
  totalPages,
  rating,
  category,
  tags,
  publisher,
  yearOfPublishing
}
```

---

## 📌 Future Improvements

* Add real authentication system
* Complete wishlist functionality
* Improve sorting by pages and rating
* Add search and category filter
* Add backend and database support
* Add responsive mobile improvements
* Add deployment link
* Add project screenshots

---

## 👨‍💻 Author

**Antor Adhikary**

GitHub: [Antor-Adhikary1216](https://github.com/Antor-Adhikary1216)

---

## 📄 License

This project is open source and available for learning and practice purposes.
