"use strict";
// Change myName to uppercase
var myName = "Shannon Ritenour";
console.log("Name: " + myName.toUpperCase());
console.log("Career: Web Developer");
console.log("Description: STEMinist");
console.log("");
console.log("My Interests:");
console.log("* Coding");
console.log("* Cooking");
console.log("* Concerts");
console.log("* Outdoor activities");
console.log("");
// Function to display previous work experience
function displayPosition(job_title, company_name, description) {
    console.log("* " + job_title + " at " + company_name + " - " + description);
}
displayPosition("Facilities Services Sales Representative", "Cintas Corporation", "Responsible for new business-to-business account development");
displayPosition("Office Manager", "Cintas Corporation", "Ensured audit compliance with corporate policies, maintaining accounts receivable goal percentages each month");
displayPosition("Manager/Graphic Designer", "Printing Plus", "Assisted customers in person and over the phone by determining needs and presenting appropriate products and services");
console.log("");
// Display skills and if it's "cool" put "BAM" in front
function displaySkill(skill_name, isCool) {
    if (isCool) {
        console.log("BAM: " + skill_name);
    }
    else {
        console.log(skill_name);
    }
}
console.log("My Skills:");
displaySkill("Java", false);
displaySkill("C#", false);
displaySkill("JavaScript", true);
displaySkill("Swift", true);
displaySkill("HTML", false);
displaySkill("C++", false);
