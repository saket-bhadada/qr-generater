document.getElementById('your-link').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    const url = document.getElementById("urlinput").value;

    // Send the URL to the backend
    const response = await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `url=${encodeURIComponent(url)}`
    });

    if (response.ok) {
        // Show the output div and update the image source (with cache busting)
        const output = document.querySelector('.output');
        output.style.display = 'block';
        document.querySelector('.qr-photo').src = './qr_img.png?' + new Date().getTime();
    } else {
        alert('Failed to generate QR code.');
    }
});