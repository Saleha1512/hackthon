# 📝 PeerReview+

A simple web application for managing and submitting assignments, and conducting peer reviews for both **Students** and **Teachers**.

## ✨ Features

* [cite_start]**Role-Based Login:** Separate dashboards for 'Teacher' and 'Student' roles[cite: 39, 40, 41].
* **Student Dashboard:**
    * [cite_start]View assigned work and due dates[cite: 8].
    * [cite_start]Upload and submit assignment files[cite: 9].
    * [cite_start]Access the peer reviewing interface[cite: 10].
* **Teacher Panel:**
    * [cite_start]Welcome and dashboard view[cite: 32].
    * [cite_start]Functionality to create new assignments[cite: 33].
    * [cite_start]List of ongoing assignments[cite: 34].
* [cite_start]**Peer Review Interface:** A dedicated page for providing feedback on a peer's work[cite: 44, 45].

## 🚀 Getting Started

### Prerequisites

This is a front-end only application and requires a modern web browser to run.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [Your-Repo-URL]
    ```
2.  **Open the project:** Navigate to the cloned folder and open the `index.html` file in your preferred web browser.

### Usage

1.  Open `index.html` in your browser.
2.  [cite_start]Select your **Role** (`Teacher` or `Student`) and click **Login**[cite: 39].
3.  Based on your selection, you will be redirected:
    * [cite_start]**Teacher** $\rightarrow$ `teacher.html` [cite: 40, 41]
    * [cite_start]**Student** $\rightarrow$ `student.html` [cite: 41, 42]

## 🛠️ Project Structure

The project consists of the following key files:

* [cite_start]`index.html`: The main login page[cite: 35].
* [cite_start]`teacher.html`: The dashboard for the Teacher role[cite: 26].
* [cite_start]`student.html`: The dashboard for the Student role[cite: 3].
* [cite_start]`Rewevw.txt` (or `review.html`): The peer review interface[cite: 44].
* [cite_start]`Script.txt` (or `script.js`): Contains the core `login()` function to handle role-based redirection[cite: 1, 2].
* [cite_start]`Style.txt` (or `style.css`): Contains general and component-specific styling (e.g., login-card, sidebar, buttons)[cite: 11, 13, 17, 21].

## 🎨 Styling

[cite_start]The application uses **Bootstrap 5.3** for responsive components and a custom stylesheet (`style.css`) for specific visual elements[cite: 4, 35]. Key styles include:

* [cite_start]A login page background gradient[cite: 36].
* [cite_start]Customized cards and form controls[cite: 6, 37].
* [cite_start]A fixed sidebar navigation for the Teacher view[cite: 28].

## 🤝 Contributing

(Add information here on how others can contribute, such as reporting bugs, suggesting features, or submitting pull requests.)

---

**Author:** [Your Name/GitHub Username]
