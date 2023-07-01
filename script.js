window.addEventListener('DOMContentLoaded', (event) => {
    var url = window.location.href;
    var hash = url.substring(url.indexOf("#")+1);
    
    if (hash != "") {
        var element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView();
        }
    }
});
