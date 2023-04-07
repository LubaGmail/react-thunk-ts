import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview'
import Category from '../category/category'
import { fetchCategoriesAsyncStart } from '../../store/categories/categories.actions';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsyncStart());
    }, [dispatch]);
    
    // App: <Route path='shop/*' element={<Shop />} />    
    //
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop