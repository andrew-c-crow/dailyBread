import React, {useEffect, useState} from "react";
import { getQuotes } from "../api/quotes";


const Quote = () => {

    const [quote, setQuote] = useState([])
    const [originator, setOriginator] = useState([])

    console.log(originator)
    
    useEffect(() => {
      async function callGetQuote() {
        const currentQuote = await getQuotes()
        setQuote(currentQuote)
        setOriginator(currentQuote.originator)
      }
      callGetQuote()
    }, [])

    return ( quote && originator ?
        <div>
            <div className="quote">
                {quote.content}
            </div>
            <div>
                {originator.name}
            </div>
        </div>
        : null
    )

}

export default Quote