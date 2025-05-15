document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        {
            "name": "Flutter",
            "icon": "images/tech/flutter.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Dart",
            "icon": "images/tech/dart.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Android",
            "icon": "images/tech/android-svgrepo-com.svg",
            "type": "mobile-tech"
        },
        {
            "name": "ios",
            "icon": "images/tech/apple-svgrepo-com.svg",
            "type": "mobile-tech"
        },
        {
            "name": "HTML 5",
            "icon": "images/tech/html.svg",
            "type": "web-tech"
        },
        {
            "name": "CSS 3",
            "icon": "images/tech/css.svg",
            "type": "web-tech"
        },
       
        {
            "name": "Javascript",
            "icon": "images/tech/js.svg",
            "type": "web-tech"
        },
        
       
       
        {
            "name": "REST APIs",
            "icon": "images/tech/api.svg",
            "type": "server-tech"
        },
        {
            "name": "Dart Frog",
            "icon": "images/tech/dart_frog.svg",
            "type": "server-tech"
        },
        
        {
            "name": "Firebase",
            "icon": "images/tech/firebase.svg",
            "type": "database-tech"
        }, {
            "name": "Subabase",
            "icon": "images/tech/icons8-supabase.svg",
            "type": "database-tech"
        },
        {
            "name": "Hive",
            "icon": "images/tech/Aniket-Suvarna-Box-Regular-Bx-hive.svg",
            "type": "database-tech"
        },
        {
            "name": "SQL",
            "icon": "images/tech/sql.svg",
            "type": "database-tech"
        },
        {
            "name": "Sqflite",
            "icon": "images/tech/icons8-sqlite.svg",
            "type": "database-tech"
        },
        {
            "name": "GitHub",
            "icon": "images/tech/github.svg",
            "type": "vc-tech"
        },
        {
            "name": "Jira",
            "icon": "images/tech/jira.svg",
            "type": "vc-tech"
        },
        {
            "name": "Notion",
            "icon": "images/tech/notion.svg",
            "type": "vc-tech"
        },
        {
            "name": "Figma",
            "icon": "images/tech/figma.svg",
            "type": "design-tech"
        },
        {
            "name": "Adobe XD",
            "icon": "images/tech/adobexd.svg",
            "type": "design-tech"
        }
    ];

    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        if (tech[i]["name"] == "Node.js" || tech[i]["name"] == "Dart Frog") {
            techIconImg.style.height = "25px";
        }

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
}