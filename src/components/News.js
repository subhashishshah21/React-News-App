import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 20
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }
    constructor() {
        super();
        this.state = {
            article: [],
            page: 1,
            totalResult: 0

        }

    }
    async update() {
        this.props.setprogress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f702cc98ec9140359dee3581eacbcd7e&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        this.props.setprogress(30)
        let finaldata = await data.json();
        this.props.setprogress(50)
        console.log(finaldata);
        this.setState({
            article: finaldata.articles,
            totalResult: finaldata.totalResults,
            

        })
        this.props.setprogress(100)
    }
    async componentDidMount() {

        this.update();
    }

    fetchMoreData = async () =>{
        this.setState({page: this.state.page + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f702cc98ec9140359dee3581eacbcd7e&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let finaldata = await data.json();
        console.log(finaldata);
        this.setState({
            article: this.state.article.concat(finaldata.articles),
            totalResult: finaldata.totalResults,
           

        })
        
    }
   


    render() {
        return (
            <>
                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData} 
                    hasMore={this.state.article.length!==this.state.totalResult}
                    loader={<Spinner />}
                >
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>

                        {

                            this.state.article.map((e) => {
                                return <div key={e.url}>
                                    <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsURL={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                </div>

                            })
                        }
                    </div>
                    </InfiniteScroll>
                </>
                )
    }
}
