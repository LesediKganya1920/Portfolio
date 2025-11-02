        let uploadedFile = null;
        let qrCodeInstance = null;

        document.getElementById('resumeFile').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                uploadedFile = file;
                
                // Create a URL for the file
                const fileURL = URL.createObjectURL(file);
                
                // Update file info
                document.getElementById('fileInfo').innerHTML = `
                    <p>✅ File uploaded: ${file.name}</p>
                    <p>Size: ${(file.size / 1024 / 1024).toFixed(2)} MB</p>
                `;
                
                // Show download link
                const downloadLink = document.getElementById('downloadLink');
                downloadLink.href = fileURL;
                downloadLink.download = 'Katlego_Matlhoko_Resume.pdf';
                downloadLink.style.display = 'inline-block';
                
                // Generate QR code
                const qrDiv = document.getElementById('qrcode');
                qrDiv.innerHTML = ''; // Clear previous QR code
                
                qrCodeInstance = new QRCode(qrDiv, {
                    text: fileURL,
                    width: 180,
                    height: 180,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
            } else {
                alert('Please upload a PDF file');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll animation for timeline items
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.timeline-item, .skill-card, .project-card').forEach(el => {
            observer.observe(el);
        });
