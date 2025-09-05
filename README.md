# Node-SQLi-Scanner

Mini SQL Injection scanner built in Node.js for **test labs**.
This tool allows you to test URLs and detect potential SQLi vulnerabilities using basic payloads.

## ⚠️ Warning

This project is **only for learning and testing in controlled environments** (labs, DVWA, bWAPP, Juice Shop).
Do not use it on real websites without authorization, as this is **illegal**.

---

## 🛠️ Requirements

- Node.js >= 14
- npm
- Dependencies:
```bash
npm install axios colors fs readline

---

## 🚀 How to use
1. Place your vulnerable URLs in the urls.txt file, one per line:
```bash
http://testphp.vulnweb.com/listproducts.php?cat=1
http://demo.testfire.net/bank/login.aspx?uid=1

2. Run the script:
```bash
node index.js

3. Check the colored output in the terminal:
- Red → possible vulnerability
- Green → safe
- Yellow → error while testing