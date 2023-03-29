

export async function getQuotes() {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
        },
        body: '{"ids":[879890,1]}'
    };
    try {
        const response = await fetch('https://quotel-quotes.p.rapidapi.com/quotes/qod', options)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.error(error)
    }
}