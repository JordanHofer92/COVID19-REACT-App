import React, {useState} from 'react'
import './TopNews.css'


const LocalNews = (props) => {
    const [page, setPage] = useState([0,1,2,3,4]);
    function nextPage() {
        if(page[4] === 19){
            alert("This is the last page.")
        } else {
            setPage(page.map(element => element + 5))
        }
    }
    function previousPage() {
        if(page[0] === 0){
            alert("This is the first page.")
        } else {
            setPage(page.map(element => element - 5))
        }
    }
    console.log(page)
    return (
        <section className="currentPage components-topnews">
            <h1>Latest News on COVID-19</h1>
            <span>News is powered by <a href="https://newsapi.org/">newsapi.org</a></span>
            <div className="components-topnews-newsboxs">
                <div className="components-topnews-newsbox">
                    <a target="_blank" rel="noopener noreferrer" href={props.newsData[page[0]].url}>{props.newsData[page[0]].title}</a>
                    <span>Author: {props.newsData[page[0]].author}</span>
                    <article>{props.newsData[page[0]].description}</article>
                    <img src={props.newsData[page[0]].urlToImage}></img>
                </div>
                <div className="components-topnews-newsbox">
                    <a target="_blank" rel="noopener noreferrer" href={props.newsData[page[1]].url}>{props.newsData[page[1]].title}</a>
                    <span>Author: {props.newsData[page[1]].author}</span>
                    <article>{props.newsData[page[1]].description}</article>
                    <img src={props.newsData[page[1]].urlToImage}></img>
                </div>
                <div className="components-topnews-newsbox">
                    <a target="_blank" rel="noopener noreferrer" href={props.newsData[page[2]].url}>{props.newsData[page[2]].title}</a>
                    <span>Author: {props.newsData[page[2]].author}</span>
                    <article>{props.newsData[page[2]].description}</article>
                    <img src={props.newsData[page[2]].urlToImage}></img>
                </div>
                <div className="components-topnews-newsbox">
                    <a target="_blank" rel="noopener noreferrer" href={props.newsData[page[3]].url}>{props.newsData[page[3]].title}</a>
                    <span>Author: {props.newsData[page[3]].author}</span>
                    <article>{props.newsData[page[3]].description}</article>
                    <img src={props.newsData[page[3]].urlToImage}></img>
                </div>
                <div className="components-topnews-newsbox">
                    <a target="_blank" rel="noopener noreferrer" href={props.newsData[page[4]].url}>{props.newsData[page[4]].title}</a>
                    <span>Author: {props.newsData[page[4]].author}</span>
                    <article>{props.newsData[page[4]].description}</article>
                    <img src={props.newsData[page[4]].urlToImage}></img>
                </div>
            </div>
            <div className="components-topnews-buttons">
                <button onClick={previousPage} className="components-topnews-button">Previous Page</button>
                <button onClick={nextPage} className="components-topnews-button">Next Page</button>
            </div>
        </section>
    )
}

export default LocalNews