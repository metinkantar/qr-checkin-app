function onScanSuccess(decodedText, decodedResult) {
    document.getElementById('result').innerText = `Katılım Kaydı: ${decodedText}`;

    // Google Sheets'e veri gönder
    fetch('https://script.google.com/macros/s/AKfycbzvQoH1iKvozwpddeTwj0h2WnzsXT-IdC6ouCuxEmzkUGIRuS8Sw5o7f7qJL_9sT6w/exec', {
        method: 'POST',
        body: JSON.stringify({ qr: decodedText }),
        headers: { 'Content-Type': 'application/json' }
    });
}

const html5QrCode = new Html5Qrcode("reader");
html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, onScanSuccess);