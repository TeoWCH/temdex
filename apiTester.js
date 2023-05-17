const fetchApi = async () => {
    const temData = await fetch('https://temtem-api.mael.tech/api/temtems').then(res => {
        res.json().then(data => {
            let noGif = 0
            let gif = 0
            data.map(tem => {
                if (tem.wikiRenderAnimatedUrl) {
                    console.log('Has gif')
                    gif++
                }
                else {
                    console.log(tem.number + ' - Has not git!!!!!!!!!')
                    noGif++
                }
            })
            console.log(gif, noGif)
        })
    })
}

await fetchApi()