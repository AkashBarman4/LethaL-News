console.log(Date())
/*--------------Variables-----------------*/
const generalLink = document.getElementById('general')
const businessLink = document.getElementById('business')
const sportsLink = document.getElementById('sports')
const technologyLink = document.getElementById('technology')
const entertainmentLink = document.getElementById('entertainment')
const searchButton = document.getElementById('searchBtn')
const newsFind = document.getElementById('newsFind')
const newsType = document.getElementById('type')
const newsDetails = document.getElementById('details')


// Array
var newsDataArr = []

/*-----------------------API's-------------------*/

const API_KEY = '21515ec6938e436b96518772389ac645'
const HEADLINE_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='
const GENERAL_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey='
const BUSINESS_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey='
const SPORTS_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey='
const ENTERTAINMENT_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey='
const TECHNOLOGY_NEWS = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey='
const SEARCH_NEWS = 'https://newsapi.org/v2/everything?q='


window.onload = function(){
    newsType.innerHTML = `<h4>Headlines</h4>`
    fetchHeadlines()
}

generalLink.addEventListener('click', function(){
    newsType.innerHTML = `<h4>General News</h4>`
    fetchGeneralNews()
})

businessLink.addEventListener('click', function(){
    newsType.innerHTML = `<h4>Business News</h4>`
    fetchBusinessNews()
})

sportsLink.addEventListener('click', function(){
    newsType.innerHTML = `<h4>Sports News</h4>`
    fetchSportsNews()
})

technologyLink.addEventListener('click', function(){
    newsType.innerHTML = `<h4>Technology News</h4>`
    fetchTechnologyNews()
})

entertainmentLink.addEventListener('click', function(){
    newsType.innerHTML = `<h4>Entertainment News</h4>`
    fetchEntertainmentNews()
})

searchButton.addEventListener('click', function(){
    newsType.innerHTML = `<h4>Search : ${newsFind.value}</h4>`
    fetchFindNews()
})



const fetchHeadlines = async()=>{
    const response = await fetch(HEADLINE_NEWS+API_KEY)
    newsDataArr = []
    if(response.status >= 200 && response.status<300){
        const myJson = await response.json()
        newsDataArr = myJson.articles
    }
    else{
        // handle errors
        console.log(response.status, response.statusText)
    }

    displayNews()
}


const fetchGeneralNews = async()=>{
    const response = await fetch(GENERAL_NEWS+API_KEY)
    newsDataArr = []
    if(response.status >= 200 && response.status<300){
        const myJson = await response.json()
        newsDataArr = myJson.articles
    }
    else{
        // handle errors
        console.log(response.status, response.statusText)
    }

    displayNews()
}

const fetchBusinessNews = async()=>{
    const response = await fetch(BUSINESS_NEWS+API_KEY)
    newsDataArr = []
    if(response.status >= 200 && response.status<300){
        const myJson = await response.json()
        newsDataArr = myJson.articles
    }
    else{
        // handle errors
        console.log(response.status, response.statusText)
    }

    displayNews()
}

const fetchSportsNews = async()=>{
    const response = await fetch(SPORTS_NEWS+API_KEY)
    newsDataArr = []
    if(response.status >= 200 && response.status<300){
        const myJson = await response.json()
        newsDataArr = myJson.articles
    }
    else{
        // handle errors
        console.log(response.status, response.statusText)
    }

    displayNews()
}

const fetchTechnologyNews = async()=>{
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY)
    newsDataArr = []
    if(response.status >= 200 && response.status<300){
        const myJson = await response.json()
        newsDataArr = myJson.articles
    }
    else{
        // handle errors
        console.log(response.status, response.statusText)
    }

    displayNews()
}

const fetchEntertainmentNews = async()=>{
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY)
    newsDataArr = []
    if(response.status >= 200 && response.status<300){
        const myJson = await response.json()
        console.log(myJson)
        newsDataArr = myJson.articles
    }
    else{
        // handle errors
        console.log(response.status, response.statusText)
    }

    displayNews()
}

const fetchFindNews = async()=>{
    if(newsFind.value==null){
        return
    }
    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsFind.value)+'&apiKey='+API_KEY)
    newsDataArr = []
    if(response.status >= 200 && response.status<300){
        const myJson = await response.json()
        newsDataArr = myJson.articles
    }
    else{
        // handle errors
        console.log(response.status, response.statusText)
    }

    displayNews()
}

//----------------------- Function to display news-----------------------
function displayNews(){
    newsDetails.innerHTML = ''
    if(newsDataArr.length == 0){
        newsDetails.innerHTML = `<h5>No content found</h5>`
        return
    }

    newsDataArr.forEach(news =>{
        var date = news.publishedAt.split('T')

        var col = document.createElement('div')
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card"

        var card = document.createElement('div')
        card.className = "p-2"

        var image = document.createElement('img')
        image.setAttribute('height', 'matchparent')
        image.setAttribute('width', '100%')
        image.src = news.urlToImage

        var cardBody = document.createElement('div')

        var newsHeading = document.createElement('h5')
        newsHeading.className = "card-title"
        newsHeading.innerHTML = news.title

        var dateHeading = document.createElement('h6')
        dateHeading.className = "text-primary"
        dateHeading.innerHTML = date[0]

        var description = document.createElement('p')
        description.className = "text-muted"
        description.innerHTML = news.description

        var link  = document.createElement('a')
        link.className = "btn btn-dark"
        link.setAttribute('target', '_blank')
        link.href = news.url
        link.innerHTML = 'Read More..'

        cardBody.appendChild(newsHeading)
        cardBody.appendChild(dateHeading)
        cardBody.appendChild(description)
        cardBody.appendChild(link)

        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card)

        newsDetails.appendChild(col)
    })
}