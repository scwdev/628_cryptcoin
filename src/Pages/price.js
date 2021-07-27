import React, {useEffect} from 'react'
const Price = (props) => {
    const apiKey = '18F46673-771C-4588-897B-836B7830A855'
    const symbol = props.match.params.symbol
    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`
    const [coin, setCoin] = React.useState(null)
    const getCoin = async () => {
        const response = await fetch(url);
        const data = await response.json()
        setCoin(data)
    }
    useEffect(() => {
        getCoin()
    }, [])
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>${coin.rate}</h2>
            </div>
        )
    }
    const loading = () => {
        return <h1>LOADING...</h1>
    }
    return  coin ? loaded() : loading()
        // <h2>Price Component</h2>
}

export default Price