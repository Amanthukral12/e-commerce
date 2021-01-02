import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
const products= [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: '₹2500', image: 'https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102'},
    { id: 2, name: 'Macbook', description: 'Apple macbook', price: '₹70000', image: 'https://techcrunch.com/wp-content/uploads/2020/03/00100trPORTRAIT_00100_BURST20200319150819523_COVER.jpg'},
]


const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products
