function onScanSuccess(decodedText, decodedResult) {
    document.getElementById('result').innerText = `Katılım Kaydı: ${decodedText}`;

    // Google Sheets'e veri gönder
    fetch('https://YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        body: JSON.stringify({ qr: decodedText }),
        headers: { 'Content-Type': 'application/json' }
    });
}

const html5QrCode = new Html5Qrcode("reader");
html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, onScanSuccess);