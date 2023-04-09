import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { selectCategories } from '../../store/categories/categories.selector'
import Product from '../../components/product/product'

import {
    CategoryContainer,
    Title,
    ProductContainer
} from './category.styles'

const Category = () => {
    // routes/shop   <Route path=':category' element={<Category />} />
    const params = useParams();
    if ( !params || !params.category ) throw new Error('Category param not received.')
    const title: string = params.category

    const categoriesMap = useSelector(selectCategories);
    const [products, setProducts] = useState(categoriesMap[title]);
  
    useEffect(() => {
        setProducts(categoriesMap[title]);
    }, [title, categoriesMap]);

    return (
        <CategoryContainer>
            <Title>{title.toUpperCase()}</Title>
            <ProductContainer>
                {
                    products?.map( product => (
                        <Product key={product.id} product={product} />
                    ))  
                }
            </ProductContainer>
        </CategoryContainer>
    )
}

export default Category