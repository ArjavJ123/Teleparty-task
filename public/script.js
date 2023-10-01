import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: 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
  });

function filterResults() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('.search-box');
    filter = input.value.toUpperCase();
    ul = document.getElementById("results-list");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
