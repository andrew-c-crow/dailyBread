

export async function getQuotes() {
    const options = {
        method: 'GET',
        headers: {
            
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        },
    };
    try {
        const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.error(error)
    }
}