var kids = [];

function Submit() {
    var name = [];
    for (var i = 1; i <= 4; i++) {
        var name_of_the_student = document.getElementById("kid" + i).value;
        console.log(name_of_the_student);
        kids.push(name_of_the_student);
    }

    console.log(kids);

    var lenght_of_kids = kids.length;
    console.log(lenght_of_kids);

    for (k = 0; k < lenght_of_kids; k++) {
        name.push("<h4>NAME - " + kids[k] + "</h4>");
    }

    document.getElementById("display_names_with_commas").innerHTML = name;

    var removecommas = name.join(" ");

    document.getElementById("display_names_without_commas").innerHTML = removecommas;

    document.getElementById("submit").style.display = "none";
    document.getElementById("SO").style.display = "inline-block";


}

function sorting() {
    kids.sort();
    console.log(kids);
    var kids_sort = [];
    var lenght_of_kids = kids.length;
    console.log(lenght_of_kids);

    for (k = 0; k < lenght_of_kids; k++) {
        kids_sort.push("<h4>NAME - " + kids[k] + "</h4>");
    }

    document.getElementById("display_names_with_commas").innerHTML = kids_sort;

    var removecommas = kids_sort.join(" ");
    document.getElementById("display_names_without_commas").innerHTML = removecommas;
}