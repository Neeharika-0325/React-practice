import '../styles/cars.css'
import Car from './Car'


function Cars() {

    const data = [
        {
            name: 'Mercedes',
            price: 40000,
            color: 'blue',
            mileage: '10'
        },
        {
            name: 'BMW',
            price: 70000,
            color: 'red',
            mileage: '20'
        },
        {
            name: 'Maruti',
            price: 5000,
            color: 'white',
            mileage: '15'
        },
        {
            name: 'Hyundai',
            price: 7000,
            color: 'black',
            mileage: '12'
        }
    ]

    return <>
        <h3>Cars</h3>
        <ul className='car-list'>
            {data.map((car) => {
                return <Car {...car} />
            })}
        </ul>
    </>
}

export default Cars;
