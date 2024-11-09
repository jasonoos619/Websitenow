# Websitenow

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/jasonoos619/Websitenow)

## Overview
Websitenow is a React-based web application that provides a chatbot interface for users to interact with. The application includes various pages such as Home, Residents, Property Owners, Available Rentals, Contact, and a FAQ section (QA). The chatbot can answer questions based on a predefined set of Q&A data.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Database**: Supabase (for storing chat messages and Q&A data)
- **Utilities**: DOMPurify (for sanitizing HTML), clsx (for conditional class names), tailwind-merge (for merging Tailwind CSS classes)
- **Icons**: Lucide React

## Step-by-Step Instructions
###Use Git Bash###
### 1. Clone the Repository
To get started, clone the repository to your local machine:
git clone https://github.com/jasonoos619/Websitenow.git
cd Websitenow

### 2. Install Dependencies
Make sure you have Node.js installed. Then, install the required dependencies:
npm install

### 3. Set Up Environment Variables
Create a `.env` file in the root of the project and add your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start the Development Server
Run the following command to start the local development server:
```
npm run dev
```
This will start the application, and you can access it at `http://localhost:3000`.

### 5. Explore the Application
- **Home Page**: Displays the hero section and features of the application.
- **Residents Page**: Information for residents.
- **Property Owners Page**: Information for property owners.
- **Available Rentals Page**: Lists available rental properties.
- **Contact Page**: Contact form for inquiries.
- **QA Page**: Frequently Asked Questions section with a search bar and category filter.
- **Chatbot**: Click the chatbot icon to open the chat interface and ask questions.

### 6. Interacting with the Chatbot
- Type your question in the input field and hit enter or click the send button.
- The chatbot will respond based on the predefined Q&A data stored in Supabase.

## Deployment
To deploy the application on a local server, follow these steps:

1. **Build the Application**:
   ```bash
   npm run build
   ```

2. **Serve the Build**:
   You can use a static server to serve the build files. Install `serve` globally if you haven't already:
   ```bash
   npm install -g serve
   ```

3. **Run the Server**:
   Navigate to the `dist` folder and run:
   ```bash
   serve -s build
   ```

4. **Access the Application**:
   Open your browser and go to `http://localhost:5000` (or the port specified by the serve command).

## Conclusion
Websitenow is a powerful tool for providing information and assistance through a chatbot interface. With the ability to filter FAQs and interact with users, it enhances the user experience significantly. Feel free to explore the code and customize it to fit your needs!