import React from 'react'
import './TopNews.css'

const LocalNews = (props) => {
    console.log(props.newsData[0].description)
    return (
        <section className="currentPage components-topnews">
            <h1>Latest News on COVID-19</h1>
            <span>News is powered by <a href="https://newsapi.org/">newsapi.org</a></span>
            <div>
                <div className="components-topnews-newsbox">
                    <a href={props.newsData[0].url}>{props.newsData[0].title}</a>
                    <span>Author: {props.newsData[0].author}</span>
                    <article>{props.newsData[0].description}</article>
                    <img src={props.newsData[0].urlToImage} alt="News Article"></img>
                </div>
                <div className="components-topnews-newsbox">
                    <a href={props.newsData[1].url}>{props.newsData[1].title}</a>
                    <span>Author: {props.newsData[1].author}</span>
                    <article>{props.newsData[1].description}</article>
                    <img src={props.newsData[1].urlToImage} alt="News Article"></img>
                </div>
                <div className="components-topnews-newsbox">
                    <a href={props.newsData[2].url}>{props.newsData[2].title}</a>
                    <span>Author: {props.newsData[2].author}</span>
                    <article>{props.newsData[2].description}</article>
                    <img src={props.newsData[2].urlToImage} alt="News Article"></img>
                </div>
                <div className="components-topnews-newsbox">
                    <a href={props.newsData[3].url}>{props.newsData[3].title}</a>
                    <span>Author: {props.newsData[3].author}</span>
                    <article>{props.newsData[3].description}</article>
                    <img src={props.newsData[3].urlToImage} alt="News Article"></img>
                </div>
                <div className="components-topnews-newsbox">
                    <a href={props.newsData[4].url}>{props.newsData[4].title}</a>
                    <span>Author: {props.newsData[4].author}</span>
                    <article>{props.newsData[4].description}</article>
                    <img src={props.newsData[4].urlToImage} alt="News Article"></img>
                </div>
            </div>
        </section>
    )
}

export default LocalNews
