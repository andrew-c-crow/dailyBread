
export async function getQuotes() {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'eec22e11d0msh1f000820650400ep18faf7jsnec5ff174e350',
            'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
        },
        body: '{"ids":[879890,1]}'
    };
    try {
        const response = await fetch('https://quotel-quotes.p.rapidapi.com/quotes', options)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.error(error)
    }
}