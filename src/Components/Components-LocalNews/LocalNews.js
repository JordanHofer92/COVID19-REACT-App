import React from 'react'

const LocalNews = (props) => {
    return (
        <div className="currentPage">
            <h1>Latest News</h1>
            <span>News is powered by <a href="https://newsapi.org/">newsapi.org</a></span>
            <ul>
                <li><a href={props.newsData[0].url}>{props.newsData[0].title}</a></li>
                <li><a href={props.newsData[1].url}>{props.newsData[1].title}</a></li>
                <li><a href={props.newsData[2].url}>{props.newsData[2].title}</a></li>
                <li><a href={props.newsData[3].url}>{props.newsData[3].title}</a></li>
                <li><a href={props.newsData[4].url}>{props.newsData[4].title}</a></li>
                <li><a href={props.newsData[5].url}>{props.newsData[5].title}</a></li>
                <li><a href={props.newsData[6].url}>{props.newsData[6].title}</a></li>
                <li><a href={props.newsData[7].url}>{props.newsData[7].title}</a></li>
                <li><a href={props.newsData[8].url}>{props.newsData[8].title}</a></li>
                <li><a href={props.newsData[9].url}>{props.newsData[9].title}</a></li>
                <li><a href={props.newsData[10].url}>{props.newsData[10].title}</a></li>
            </ul>
        </div>
    )
}

export default LocalNews
