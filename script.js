import {
    getResults,
    generateResults,
    initSeekr
}
    from './navexsearchlib/seekr.js'

//Initialize Seekr JS

initSeekr()


$('#searchbutton').on('click', (e) => {

    let query = $('#searchfield').val()
    let results = generateResults(getResults(query))
    $('#resultslist').append(results)

})

