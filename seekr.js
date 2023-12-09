import {conf} from "./conf.js";

let sectionContent = [],
    queryPosition = -1,
    resultPreview = '',
    results = [],
    ajaxCalls = []

//push a separate ajax call to an array for each web page that needs to be indexed
conf.pages.forEach((url) => {
    ajaxCalls.push(
        $.ajax({
            url: conf.baseUrl + url,
            success: function (rawHtml) {

                let fullUrl = conf.baseUrl + url
                let tempEl = document.createElement('tempelement')
                $(tempEl).append(rawHtml)

                $(tempEl).find(conf.sectionID).each((i, el) => {

                    sectionContent.push({
                        pageTitle: $('tempElement').find(conf.pageID).text().trim(),
                        sectionTitle: $(el).find('h3').text(),
                        content: $(el).val(),
                        url: fullUrl + '#' + $(el).find('h3').attr('id')
                    })

                })
            }
        })
    )
})

const getResults = (query) => {

    sectionContent.forEach((fullText) => {

        queryPosition = fullText.content.indexOf(query)

        //If query position is -1 it means it wasn't found
        //Anything greater than -1 is the position in the text
        if (queryPosition >= 0) {

            resultPreview = fullText.content
                .substring(queryPosition, queryPosition + conf.previewSize)

            //Add dot leaders to the end of the preview
            resultPreview = resultPreview.concat('...')

            results.push({
                pageTitle: fullText.pageTitle,
                sectionTitle: fullText.sectionTitle,
                preview: resultPreview,
                url: fullText.url
            })

        }

    })

    //If there are no results then display error message
    //With nothing for preview or url
    if (!results.length) {
        results.push({
            pageTitle: 'Oops.',
            sectionTitle: 'Your search did not return any results, please try again.',
            preview: '',
            url: ''
        })
    }

    return results
}


const generateResults = (results) => {

    let resultDivs = []

    results.forEach((result) => {

        resultDivs.push(`
          <div class="container">
            <h4><a href=${result.url} class="href">${result.pageTitle}</a></h4>
            <h6><a href=${result.url} class="href">${result.sectionTitle}</a></h6>
            <p><a href=${result.url}>${result.preview}</a></p>
          </div>
        `)

    })

    return resultDivs
}

const initSeekr = () => {
    $.when.apply(undefined, ajaxCalls).then(() => {
        $(conf.searchField).attr('placeholder', 'Search')
        $(conf.searchField).removeAttr('disabled')
    })
}


export {
    initSeekr,
    getResults,
    generateResults
}