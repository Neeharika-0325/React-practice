

function Car({name, price, color, mileage}) {
    return <li className="car">{name} | ${price} | {color} | {mileage} km/litre</li>
}


export default Car