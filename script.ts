document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement &&experienceElement && skillsElement){
        const name = nameElement.value;
        const email= emailElement.value;
        const phone= phoneElement.value;
        const education= educationElement.value;
        const experience= experienceElement.value;
        const skills= skillsElement.value;

        const resumeGenerated =`
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span id='edit-name' class='editable'>${name}</span></p>
        <p><strong>Email:</strong> <span id='edit-email' class='editable'>${email}</span></p>
        <p><strong>Phone No.:</strong> <span id='edit-phone' class='editable'>${phone}</span></p>

        <h3>Education :</h3>
        <p <span id='edit-education' class='editable'>${education}</p>

        <h3>Experience :</h3>
        <p <span id='edit-experience' class='editable'>${experience}</p>

        <h3>Skills :</h3>
        <p <span id='edit-skills' class='editable'>${skills}</p>
        `;
        const resumeGeneratedElement =document.getElementById('resumeGenerated');
        if(resumeGeneratedElement){
            resumeGeneratedElement.innerHTML = resumeGenerated;
        makeEditable();
        }
    }
        else {
            console.error('Elements are missing')
        }
    });

        function makeEditable(){
            const editableElements = document.querySelectorAll('.editable');
            editableElements.forEach(element =>{
                element.addEventListener('click',function(){
                    const currentElement = element as HTMLElement
                    const currentValue = currentElement.textContent|| "";
        
                    if(currentElement.tagName === "P" || currentElement.tagName ==="SPAN"){
                        const input =document.createElement('input')
                        input.type = 'text';
                        input.value = currentValue;
                        input.classList.add('editing-input')
        
                        input.addEventListener('blur',function(){
                            currentElement.textContent=input.value;
                            currentElement.style.display='inline';
                            input.remove()
                        })
                        currentElement.style.display ='none';
                        currentElement.parentNode?.insertBefore(input,currentElement)
                        input.focus()
                    }
        
                })
            
            })
}

// Function to generate unique URL
function generateUniqueURL(inputText: string): string {
    const baseURL = window.location.href.split('?')[0];
    return `${baseURL}?text=${encodeURIComponent(inputText)}`;
}

// Function to enable sharing buttons
function enableSharingButtons() {
    const copyBtn = document.getElementById('copyBtn') as HTMLButtonElement;
    const shareTwitterBtn = document.getElementById('shareTwitter') as HTMLButtonElement;
    const shareFacebookBtn = document.getElementById('shareFacebook') as HTMLButtonElement;

    copyBtn.disabled = false;
    shareTwitterBtn.disabled = false;
    shareFacebookBtn.disabled = false;
}

// Event listener for form submission
document.getElementById('urlForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputText = (document.getElementById('inputText') as HTMLInputElement).value;
    const uniqueURL = generateUniqueURL(inputText);

    const urlDisplay = document.getElementById('generatedURL');
    if (urlDisplay) {
        urlDisplay.innerHTML = `<a href="${uniqueURL}" target="_blank">${uniqueURL}</a>`;
    }

    enableSharingButtons();
});

// Copy URL functionality
document.getElementById('copyBtn')?.addEventListener('click', function () {
    const urlText = document.getElementById('generatedURL')?.innerText || '';
    navigator.clipboard.writeText(urlText).then(() => {
        alert('URL copied to clipboard!');
    });
});

// Share on Twitter
document.getElementById('shareTwitter')?.addEventListener('click', function () {
    const urlText = document.getElementById('generatedURL')?.innerText || '';
    const twitterShareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlText)}`;
    window.open(twitterShareURL, '_blank');
});

// Share on Facebook
document.getElementById('shareFacebook')?.addEventListener('click', function () {
    const urlText = document.getElementById('generatedURL')?.innerText || '';
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlText)}`;
    window.open(facebookShareURL, '_blank');
});
// Resume download functionality
document.getElementById('downloadBtn')?.addEventListener('click', () => {
    // Replace 'resume.pdf' with the path to your actual resume file
    const resumeUrl = 'resume.pdf';
    const link = document.createElement('a');
    
    // Set the download attribute and href
    link.href = resumeUrl;
    link.download = 'My_Resume.pdf';
    
    // Append link to body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Import jsPDF
const { jsPDF } = window.jspdf;

// Function to download the resume as a PDF
document.getElementById('downloadBtn')?.addEventListener('click', async () => {
    const resumeGenerated = document.getElementById('resumeGenerated');
    
    if (resumeGenerated) {
        // Use html2canvas to capture the resume content as an image
        const canvas = await html2canvas(resumeGenerated);
        const imgData = canvas.toDataURL('image/png');
        
        // Create a new PDF document
        const pdf = new jsPDF();

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);  // Adjust positioning and scaling as needed
        
        // Save the generated PDF
        pdf.save('resume.pdf');
    }
});