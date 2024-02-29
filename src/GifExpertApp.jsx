import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp= () => {
  
  const [categories, setCategories] = useState(['Rocky']);

  const onAddCategory =( newCategory ) =>{
//      console.log(newCategory);

    if ( categories.includes(newCategory) ) return;

    setCategories([newCategory,...categories]);
//    setCategories(cat =>[...cat,'SuperMan']);
  }

  return (
    <>
        <h1>GIF Expert App</h1>

          
        <AddCategory  onNewCategory = { onAddCategory }  />
        
        { 
            categories.map( (category) => (
              <GifGrid key={ category } category={category}  />
            )) 
        }


    </>
  )
}

