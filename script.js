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
}]

var html = "";
for (let i = 0; i < experience.length; i++) {
  html += `<div class="panel panel-default">
                <div class="panel-heading">${experience[i].position}, ${experience[i].employer}</div>
                <div class="panel-body">
                  <p>${experience[i].location} ${experience[i].start}-${experience[i].end}</p>
                </div>
                <ul class="list-group">`;
  for (let o = 0; o < experience[i].bulletpoints.length; o++) {
    html += `<li class="list-group-item">${experience[i].bulletpoints[o]}</li>`;
  }
  html += `</ul></div>`
}

$(document).ready(function() {
  $("#positions").append(html);
})
