block('news-feed')({
    tag: 'main',
    content: function () {
        const news = this.data.newsFeed;
        return news.map(newsItem => {
            return {
                block: 'feed-item',
                ...newsItem
            }
        })
    }
});
