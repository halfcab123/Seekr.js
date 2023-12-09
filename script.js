import {
    getResults,
    generateResults,
    initSeekr
}
    from './seekr.js'

//Initialize Seekr JS

initSeekr()


$('#searchbutton').on('click', (e) => {

    let query = $('#searchfield').val()
    let results = generateResults(getResults(query))
    $('#resultslist').append(results)

})

