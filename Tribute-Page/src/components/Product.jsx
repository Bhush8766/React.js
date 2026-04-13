import Button from './Button'
import i17pro from '../assets/iphone17promax.jpeg'

import './Product.css'


function Product(){
    return (
        <div>
           <h2 className='productHeading'>Iphone 17 Pro Max</h2>
        <p className='paraDef'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, omnis nemo provident eligendi est reprehenderit voluptatem tempore numquam ullam similique veniam doloribus, maiores at et consequuntur. Non autem similique necessitatibus.</p>
        <img src={i17pro} alt="" className='phoneImg'   />
            <Button>Buy Now</Button>
            <Button />
            

        </div>
    )
}

export default Product


