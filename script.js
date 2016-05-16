var experience = [{
    "position": "Computer Lab Assistant",
    "employer": "Queens Borough Public Library",
    "location": "Queens, NY",
    "start": "2013",
    "end": "2014",
    "bulletpoints": [
        "Assist computer lab patrons with any computer questions or problems they may have",
        "Assist patrons with rented Google Nexus 7 tablets and laptops",
        "Answer phone calls that are received and respond or transfer calls accordingly",
        "Help patrons with setting up Microsoft Office documents, such as Word, Powerpoint, and Excel"
    ]
}, {
    "position": "Brand Ambassador",
    "employer": "Banana Republic",
    "location": "Queens, NY",
    "start": "2013",
    "end": "2014",
    "bulletpoints": [
        "Greet customers at the door with a positive attitude and determine what their needs are",
        "Recommend merchandise to customers based on individual taste, requirements, or needs",
        "Answer customers’ queries and concerns about Banana Republic and/or it's merchandise",
        "Maintaining the sales floor and keeping it clean and appropriately stocked"
    ]
}]

var positionsHTML = "";
for (let i = 0; i < experience.length; i++) {
    positionsHTML += `<div class="panel panel-info">
                <div class="panel-heading">${experience[i].position}, ${experience[i].employer}</div>
                <div class="panel-body">
                  <p>${experience[i].location} ${experience[i].start}-${experience[i].end}</p>
                </div>
                <ul class="list-group">`;
    for (let o = 0; o < experience[i].bulletpoints.length; o++) {
        positionsHTML += `<li class="list-group-item">${experience[i].bulletpoints[o]}</li>`;
    }
    positionsHTML += `</ul></div></br>`;
}

var skills = ["Microsoft Office: Word, PowerPoint, Excel, and Outlook",
    "Adobe: Photoshop, Illustrator, Flash, Acrobat and Indesign",
    "HTML, CSS, and Javascript",
    "Windows XP/Vista/7/8 and Mac OS X",
    "Digital Illustration, drawing, conceptual sketching, logo design, and graphic design"
];

var skillsHTML = "";
for (let i = 0; i < skills.length; i++) {
    skillsHTML += `<li>${skills[i]}</li>`;
}
$(document).ready(function() {
    $("#positions").append(positionsHTML);
    $("#skills-list").append(skillsHTML);
})
