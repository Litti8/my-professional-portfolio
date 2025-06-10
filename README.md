# My Professional Portfolio

**Welcome to the source code of my professional online portfolio!**

This project is a single-page application (SPA) designed to showcase my skills, experience, and software development projects. It's built with modern technologies and focused on a clean, responsive user experience.

---

## 🚀 Key Features

* **Hero Section:** An attractive introduction with your name and profession.
* **About Section:** A detailed description of your background and professional goals.
* **Skills Section:** Demonstrates your technical knowledge and tools with visual icons.
* **Projects Section:** Displays your most relevant work with interactive project cards, links to GitHub and live demos (if applicable).
* **Contact Section:** Facilitates communication with a functional form (integrated with Formspree), direct links to professional networks (LinkedIn, GitHub), and email.
* **CV Download:** Quick access to your resume in PDF format.
* **Dynamic Navbar:** Responsive navigation bar with active section highlighting, smooth scrolling, and an adaptive background blur effect on scroll, preventing content jumps on hover.
* **Unique Footer:** An original "Terminal Command" styled footer that presents your contact information in a distinctive way.
* **Internationalization (i18n):** Support for multiple languages (Spanish and English), allowing users to switch the interface language.
* **Responsive Design:** Optimized for seamless viewing across various devices (desktops, tablets, mobiles).
* **Modern Technologies:** Built using current frontend development tools and best practices.

---

## 🛠️ Technologies Used

* **React:** JavaScript library for building user interfaces.
* **TypeScript:** A typed superset of JavaScript that adds static typing.
* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
* **i18next / react-i18next:** For internationalization (multi-language support).
* **Formspree:** A service to handle form submissions without a backend.
* **SVGs:** Scalable Vector Graphics for crisp, customizable icons.
* **Create React App:** (Or Vite, depending on your setup) The development environment used for building the React application.

---

## 💻 How to Run the Project Locally

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

Make sure you have [Node.js](https://nodejs.org/en/) (which includes npm) installed.

### **Installation**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Litti8/my-professional-portfolio.git
    cd my-professional-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### **Environment Variables Configuration**

This project uses environment variables to handle the contact form URL (Formspree).

1.  **Create a `.env` file** in the root of the project (at the same level as `package.json`).
2.  **Add the following line** to the `.env` file, replacing `https://formspree.io/f/YOUR_FORMSPREE_FORM_ID` with your actual Formspree form URL. You can obtain this URL from [Formspree.io](https://formspree.io/) after setting up a new form.
    ```
    REACT_APP_FORMSPREE_URL=[https://formspree.io/f/YOUR_FORMSPREE_FORM_ID](https://formspree.io/f/YOUR_FORMSPREE_FORM_ID)
    ```
3.  **Ensure `.env` is listed in your `.gitignore` file** (it should be already if you followed previous steps).

### **Running the Development Server**

Once dependencies are installed and environment variables are configured:

```bash
npm start
```

### **Project Structure**
- my-professional-portfolio/
  - public/
    - images/
    - icons/
    - cv/
  - src/
    - App.tsx
    - index.css
    - index.tsx
    - components/
      - About.tsx
      - Contact.tsx
      - Footer.tsx
      - Hero.tsx
      - Navbar.tsx
      - ProjectCard.tsx
      - Skills.tsx
    - i18n/
      - locales/
        - en/
          - translation.json
        - es/
          - translation.json
    - hooks/
      - useScrollSpy.ts
  - .env
  - .gitignore
  - package.json
  - README.md
  - tailwind.config.js
  - tsconfig.json
  - ...other configuration files


---

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 🤝 Contributions
Contributions are welcome. If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.

---

## 📧 Contact
* **Email:** [lisandropiatti@gmail.com](mailto:lisandropiatti@gmail.com)
* **LinkedIn:** [https://www.linkedin.com/in/lisandro-piatti/](https://www.linkedin.com/in/lisandro-piatti/)
* **GitHub:** [https://github.com/Litti8](https://github.com/Litti8)
