//Config is not changeable during runtime

export const conf = {

    //The URL of the website being searched goes here
    baseUrl: 'https://dridgeway-cocwebsite-dev.s3.amazonaws.com',

    //Jquery identity of your search input field goes here
    searchField: '#searchfield',

    //Here you define all internal pages to be searched
    pages: [
        "/topic1.html",
        "/topic2.html",
        "/topic3.html",
        "/topic4.html"
    ],

    //JQuery query string for section
    sectionID: '.content-inner-page > .row > .col-md-12',

    //Jquery query string for page title div
    pageID: '.slider-content',

    //Set how many characters you want
    //included in the result preview
    previewSize: 250
}