export const InputNum = ({ handleChange, quantity, product }) => {

    return (
        <>
        <form>
            <label>
                Quantity:<input type="number" min="1" max="10" value={quantity}
                onChange={e => handleChange(e, product)}
                ></input>
            </label>
        </form>
        </>

    )
}