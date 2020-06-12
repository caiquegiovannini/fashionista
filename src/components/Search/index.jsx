import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';

import ResultItem from '../ResultItem';

import './styles.css';
import { searchItems } from '../../actions/search';

const Search = ( {close} ) => {
  const dispatch = useDispatch();
  const { items, input } = useSelector(state => state.search);
  const { products } = useSelector(state => state.products);


  const handleInputSearch = input => {
    dispatch(searchItems(input, products));
  }

  return (
    <section className="search">
      <header className="search__header">
        <section className="search__head">
          <button className="cart__button">
            <FiArrowLeft className="cart__back-button" onClick={() => close()}/>
          </button>
          <p className="cart__qunatity">
            Buscar Produtos
          </p>
        </section>

        <section className="search__field">
          <input 
            type="text"
            className="search__input"
            placeholder="Buscar por produto..."
            value={input}
            onChange={(e) => handleInputSearch(e.target.value)}
          />
        </section>
      </header>
    
      <section className="search__results">
        {(items.length > 0 && input !== '')
          ? items.map(item => <ResultItem key={item.sizes[0].sku} item={item} />)
          : <p className="no-item">Nenhum item econtrado :/</p>
        }
      </section>
      
    </section>
  );
}

export default Search;