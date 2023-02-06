let active_link;
let obj;
graduation_details();

function graduation_details() {
    active_link = document.getElementById("graduation");
    active_link.style.textDecoration = "underline solid #ff004f 4px";
    active_link.style.color = "#ff004f";
    active_link = document.getElementById("higher_secondary");
    active_link.style.color = "#fff"
    active_link.style.textDecoration = "none";
    active_link = document.getElementById("secondary");
    active_link.style.color = "#fff"
    active_link.style.textDecoration = "none";
    
    obj = document.getElementById("graduation_details");
    obj.innerHTML="<p>Year : 2020-2023</p><p>University : Utkal Univaesity</p><p>College : Baxi Jagabandhu Bidyadhara Autonomous College, Bhubaneswar</p><p>Course : B.Sc. Information Technology Management</p><p>Persentage : 80%</p>";
    obj = document.getElementById("higher_secondary_details");
    obj.innerHTML="";
    obj = document.getElementById("secondary_details");
    obj.innerHTML="";
    
}

function higher_secondary_details() {
    active_link = document.getElementById("higher_secondary");
    active_link.style.textDecoration = "underline solid #ff004f 4px";
    active_link.style.color = "#ff004f";
    active_link = document.getElementById("graduation");
    active_link.style.color = "#fff"
    active_link.style.textDecoration = "none";
    active_link = document.getElementById("secondary");
    active_link.style.color = "#fff"
    active_link.style.textDecoration = "none";

    obj = document.getElementById("higher_secondary_details");
    obj.innerHTML="<p>Year : 2018-2020</p><p>Board : Council of Higher Secondary Education, Odisha (CHSE)</p><p>School : Jupiter Higher Secondary School, Bhubaneswar</p><p>Core Subjects : Physics, Chemestry, Math</p><p>Persentage : 70%</p>";
    obj = document.getElementById("graduation_details");
    obj.innerHTML="";
    obj = document.getElementById("secondary_details");
    obj.innerHTML="";
}

function secondary_details() {
    active_link = document.getElementById("secondary");
    active_link.style.textDecoration = "underline solid #ff004f 4px";
    active_link.style.color = "#ff004f";
    active_link = document.getElementById("graduation");
    active_link.style.color = "#fff"
    active_link.style.textDecoration = "none";
    active_link = document.getElementById("higher_secondary");
    active_link.style.color = "#fff"
    active_link.style.textDecoration = "none";

    obj = document.getElementById("secondary_details");
    obj.innerHTML="<p>Year : 2017-2018</p><p>Board : Board Of Secondary Education,<br>Odisha (BSE)</p><p>School : Government High School,<br>Balimela</p><p>Persentage : 67.66%</p>";
    obj = document.getElementById("graduation_details");
    obj.innerHTML="";
    obj = document.getElementById("higher_secondary_details");
    obj.innerHTML="";
}
