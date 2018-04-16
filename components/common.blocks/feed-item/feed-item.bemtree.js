//const addImgSet = require('../../utils/addImgSet');

block('feed-item')({
    tag: 'article',
    addMods: function (data) {
        const size = data.ctx.size;
        const type = data.ctx.image? '' : 'text';
        return { size, type }
    },
    content: function (data) {
        const newsItem = data.ctx;
        const imgUrl = newsItem.image;
        let imgUrl2x;
        let imgUrl3x;
        if (imgUrl){
            //imgUrl2x = addImgSet(imgUrl, '@2x');
            //imgUrl3x = addImgSet(imgUrl, '@3x');
        }
        return [
            {
                elem: 'title',
                elemMods: {
                    type: newsItem.size
                },
                content: {
                    block: 'link',
                    url: '#',
                    content: {
                        block: 'title',
                        attrs: {
                            style: `color: ${newsItem.titleColor}`
                        },
                        mods: {
                            size: newsItem.size
                        },
                        content: newsItem.title
                    }
                }
            },
            newsItem.image? {
                elem: 'image-container',
                content: {
                    block: 'link',
                    url: '#',
                    content: {
                        block: 'image',
                        mix: {
                            block: 'feed-item',
                            elem: 'image'
                        },
                        url: newsItem.image,
                        /*attrs: {
                            srcset: `${imgUrl} 172w, ${imgUrl2x} 344w, ${imgUrl3x} 516w`
                        },*/
                        alt: newsItem.title
                    }
                }
            } : '',
            {
                elem: 'description',
                elemMods: {
                    type: newsItem.size
                },
                content: [
                    {
                        elem: 'text',
                        content: newsItem.description
                    },
                    {
                        elem: 'share',
                        elemMods: {
                            type: newsItem.size
                        },
                        content: [
                            {
                                block: 'icon',
                                mods: {
                                    type: 'actions',
                                    size: 's'
                                }
                            },
                            {
                                block: 'icon',
                                mods: {
                                    type: 'heart',
                                    size: 's'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
});