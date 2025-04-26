function onScanSuccess(decodedText, decodedResult) {
    let eventName = decodedText;

    try {
        const parsed = JSON.parse(decodedText);
        if (parsed.event) {
            eventName = parsed.event;
        }
    } catch (e) {
        // JSON değilse olduğu gibi kullan
    }

    document.getElementById('result').innerText = `Katılım Kaydı: ${eventName}`;

    // Google Sheets'e veri gönder
    fetch('https://script.google.com/macros/s/AKfycbzvQoH1iKvozwpddeTwj0h2WnzsXT-IdC6ouCuxEmzkUGIRuS8Sw5o7f7qJL_9sT6w/exec', {
        method: 'POST',
        body: JSON.stringify({ qr: decodedText }),
        headers: { 'Content-Type': 'application/json' }
    });
}

const html5QrCode = new Html5Qrcode("reader");
html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, onScanSuccess);