# Node-SQLi-Scanner

Mini SQL Injection scanner feito em Node.js para **laboratórios de teste**.  
Esta ferramenta permite testar URLs e detectar possíveis vulnerabilidades SQLi usando payloads básicos.

## ⚠️ Aviso

Este projeto é **apenas para aprendizado e testes em ambientes controlados** (labs, DVWA, bWAPP, Juice Shop).  
Não use em sites reais sem autorização, pois isso é **ilegal**.

---

## 🛠️ Requisitos

- Node.js >= 14
- npm
- Dependências:
  ```bash
  npm install axios colors fs readline

---

## 🚀 Como usar
1. Coloque suas URLs vulneráveis no arquivo urls.txt, uma por linha:
   ```bash
   http://testphp.vulnweb.com/listproducts.php?cat=1
   http://demo.testfire.net/bank/login.aspx?uid=1

2. Rode o script:
   ```bash
   node index.js

3. Confira o resultado colorido no terminal:
- Vermelho → possível vulnerabilidade
- Verde → seguro
- Amarelo → erro ao testar
