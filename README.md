# DEC-DEX  

**DEC-DEX** is a decentralized finance dashboard that leverages the Okto-SDK and Okto's Web2-to-Web3 APIs to provide a comprehensive user portfolio on the Okto server.  

---

## Features  

### 1. OKTO Authentication and Wallet Creation  
- Seamlessly integrates Okto authentication to enable secure user login.  
- Automatically generates a wallet on the Okto server for users without an existing wallet, enhancing liquidity and usability for decentralized applications.  

### 2. Portfolio Dashboard  
- Displays detailed information about tokens, transactions, and other portfolio elements.  
- Includes a visually intuitive pie chart analysis showcasing the logged-in user’s wallet currency distribution.  

### 3. Decentralized Exchanges Portfolio  
- Offers insights into novel exchange properties for decentralized dashboards, such as epoch data.  
- Extends API data beyond typical displays like STETH to ETH exchanges by platforms like LIDO, providing richer portfolio details.  

---

## Future Ideas  

### 1. AI Agent Integration  
- Explore the use of decentralized AI agents, powered by protocols like Phala, to analyze user behavior on decentralized exchanges.  
- For example, users could view liquidity pool strategies tailored by AI, identifying patterns similar to a "grandmaster" approach.  

### 2. Advanced Analytical Insights  
- Enhance the platform with deeper analytical tools, drawing inspiration from platforms like DefiLlama and Rotki.  
- Identify gaps in user information and deliver innovative insights to enrich the user experience.  

---

## Challenges Faced  

### 1. Okto Integration  
- Initially encountered difficulties integrating Google Login with Okto Authentication.  
- Resolved challenges by understanding the Okto server’s model structure and successfully integrating Okto Embedded Wallets on the first day.  

### 2. API Auth_Token Issue  
- Faced an issue where API calls returned null `auth_token` values.  
- After extensive debugging and collaboration with Okto team members, resolved the issue and integrated APIs to support the decentralized dashboard.  

---

## Project Setup  

Follow these steps to set up and run the project locally:  
 

### Installation  

1. **Clone the Repository**  
   Clone the repository and navigate to the project directory:  
   ```bash
   git clone https://github.com/kaurjasleen240305/DEC-DEX.git
   cd ETHINDIA-2024
  
  ```bash
  npm install
  npm run dev

Open [http://localhost:3000/homePage](http://localhost:3000) with your browser to see the result.
