import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import ResultItem from '../ResultItem';

import './styles.css';

const Search = ( {close} ) => {
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
          />
        </section>
      </header>
    
      <section className="search__results">
        {/* <p className="search__no-item">Nenhum item econtrado :/</p> */}
        <ResultItem/>
        <ResultItem />
        <ResultItem />
      </section>
      
    </section>
  );
}

export default Search;