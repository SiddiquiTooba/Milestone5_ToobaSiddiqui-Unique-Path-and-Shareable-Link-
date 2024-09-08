var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c, _d, _e, _f, _g;
var _this = this;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeGenerated = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span id='edit-name' class='editable'>".concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span id='edit-email' class='editable'>").concat(email, "</span></p>\n        <p><strong>Phone No.:</strong> <span id='edit-phone' class='editable'>").concat(phone, "</span></p>\n\n        <h3>Education :</h3>\n        <p <span id='edit-education' class='editable'>").concat(education, "</p>\n\n        <h3>Experience :</h3>\n        <p <span id='edit-experience' class='editable'>").concat(experience, "</p>\n\n        <h3>Skills :</h3>\n        <p <span id='edit-skills' class='editable'>").concat(skills, "</p>\n        ");
        var resumeGeneratedElement = document.getElementById('resumeGenerated');
        if (resumeGeneratedElement) {
            resumeGeneratedElement.innerHTML = resumeGenerated;
            makeEditable();
        }
    }
    else {
        console.error('Elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
// Function to generate unique URL
function generateUniqueURL(inputText) {
    var baseURL = window.location.href.split('?')[0];
    return "".concat(baseURL, "?text=").concat(encodeURIComponent(inputText));
}
// Function to enable sharing buttons
function enableSharingButtons() {
    var copyBtn = document.getElementById('copyBtn');
    var shareTwitterBtn = document.getElementById('shareTwitter');
    var shareFacebookBtn = document.getElementById('shareFacebook');
    copyBtn.disabled = false;
    shareTwitterBtn.disabled = false;
    shareFacebookBtn.disabled = false;
}
// Event listener for form submission
(_b = document.getElementById('urlForm')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputText = document.getElementById('inputText').value;
    var uniqueURL = generateUniqueURL(inputText);
    var urlDisplay = document.getElementById('generatedURL');
    if (urlDisplay) {
        urlDisplay.innerHTML = "<a href=\"".concat(uniqueURL, "\" target=\"_blank\">").concat(uniqueURL, "</a>");
    }
    enableSharingButtons();
});
// Copy URL functionality
(_c = document.getElementById('copyBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var _a;
    var urlText = ((_a = document.getElementById('generatedURL')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    navigator.clipboard.writeText(urlText).then(function () {
        alert('URL copied to clipboard!');
    });
});
// Share on Twitter
(_d = document.getElementById('shareTwitter')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var _a;
    var urlText = ((_a = document.getElementById('generatedURL')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    var twitterShareURL = "https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(urlText));
    window.open(twitterShareURL, '_blank');
});
// Share on Facebook
(_e = document.getElementById('shareFacebook')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    var _a;
    var urlText = ((_a = document.getElementById('generatedURL')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    var facebookShareURL = "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(urlText));
    window.open(facebookShareURL, '_blank');
});
// Resume download functionality
(_f = document.getElementById('downloadBtn')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    // Replace 'resume.pdf' with the path to your actual resume file
    var resumeUrl = 'resume.pdf';
    var link = document.createElement('a');
    // Set the download attribute and href
    link.href = resumeUrl;
    link.download = 'My_Resume.pdf';
    // Append link to body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
// Import jsPDF
var jsPDF = window.jspdf.jsPDF;
// Function to download the resume as a PDF
(_g = document.getElementById('downloadBtn')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var resumeGenerated, canvas, imgData, pdf;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resumeGenerated = document.getElementById('resumeGenerated');
                if (!resumeGenerated) return [3 /*break*/, 2];
                return [4 /*yield*/, html2canvas(resumeGenerated)];
            case 1:
                canvas = _a.sent();
                imgData = canvas.toDataURL('image/png');
                pdf = new jsPDF();
                // Add the image to the PDF
                pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust positioning and scaling as needed
                // Save the generated PDF
                pdf.save('resume.pdf');
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
