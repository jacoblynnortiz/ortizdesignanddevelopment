$.getJSON('../app/js/metaInformation.json', function (metaInfomration) {
    let copyrightHeader = document.getElementById('copyrightHeader');

    for (let i = 0; i < metaInfomration.length; i++) {
        copyrightHeader.innerText = metaInfomration[i].copyright;
    }
});