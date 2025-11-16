### **Setup & Run Instructions**

1. **Create virtual environment**

   ```bash
   py -m venv venv
   ```

2. **Activate the virtual environment**

   ```bash
   venv\Scripts\activate
   ```

3. **Create a `.env` file**

   - In your project root, create a file named `.env`
   - Add any required environment variables, for example:

     ```env
     OPENAI_API_KEY=your_api_key_here
     OTHER_VARIABLE=value
     ```

4. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

5. **Run the server**

   ```bash
   uvicorn main:app --port 3002
   ```
