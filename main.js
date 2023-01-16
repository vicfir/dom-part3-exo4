let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

let elements = document.querySelectorAll("#liste-competences > h2");
console.log(elements);

let count = 0;
for (const key in competences) {
    elements[count].textContent+=` ${competences[key]}`;

    if (Number(competences[key].slice(0, -1))>50 && Number(competences[key].slice(0, -1))!=100) {
        elements[count].style.backgroundColor = "red";
        
    } else if (Number(competences[key].slice(0, -1))<50) {
        elements[count].style.backgroundColor = "green";
        elements[count].style.color ="white";
        
    } else if (Number(competences[key].slice(0, -1))==100) {
        elements[count].style.backgroundColor = "gold";
    }
    console.log(competences[key].slice(0, -1), elements[count]);
    count++;
}

