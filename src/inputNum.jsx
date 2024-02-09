
export const InputNum = ({setQuantity, setCart, quantity, cart, title}) => {

    function addToCart(e){
        e.preventDefault()
        setCart([
            ...cart,
            [title, quantity],
        ])
        setQuantity(1)
    }

    return (
        <>
        <form>
            <label>
                Quantity:<input type="number" min="1" max="10" value={quantity}
                onChange={e => setQuantity(e.target.value)}
                ></input>
            </label>
            <button onClick={(e) => addToCart(e)}>Add to Cart</button>
        </form>
        </>

    )
}