block('app')({
    mix: {
        block: 'font-ys-text',
        mods: {
            bold: true
        }
    },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header'
                },
                {
                    block: 'news-feed'
                }
            ]
        }
    ]
});
