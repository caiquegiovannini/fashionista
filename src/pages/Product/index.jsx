import React, { useState, useEffect } from 'react';
import { formatParamUrlToName } from '../../services/utils';
import { baseURL } from '../../services/api';

import './styles.css';

const Product = (props) => {
  const [product, setProduct] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const param = props.match.params.name;

    fetch(baseURL)
      .then(res => res.json())
      .then(data => {
        const selectedProduct = data.find(item => 
          item.name === formatParamUrlToName(param)
        );
        
        setProduct(selectedProduct);
      })
  }, []);

  const sizes = product.sizes && product.sizes.map(size => {
        if (size.available) {
          return (
            <div 
              key={size.sku}
              className={`product__sizes__selection ${selectedSize === size.sku ? 'product__sizes__selection--active' : ''}`} 
              onClick={() => handleSelectSize(size.sku)}
            >
              {size.size}
            </div>
          );
        }
      })
    
  

  const handleSelectSize = (sku) => {  
    if (selectedSize !== sku) {
      setSelectedSize(sku);
    }

    return;
  }

  return (
    <main className="product">
      
      <figure className="product__image">
        <img 
          src={product.image
            ? product.image
            : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
          } 
          alt={product.name}
        />
        {product.discount_percentage &&
          <span className="product__discount">
            -
            {product.discount_percentage}
          </span>
        }
      </figure>

      <div className="product__info">
        <h2 className="product__name">{product.name}</h2>
        <div className="product__prices">
          {product.actual_price !== product.regular_price &&
            <p className="product__old-price">{product.regular_price}</p> 
          } 
          <p className="product__price">{product.regular_price}</p>
          <p className="product__payment">em até {product.installments}</p>
        </div>

        <div className="product__size">
          <p className="product__size__title">Escolha o tamanho</p>
          <div className="product__sizes">
            {sizes}
          </div>
        </div>

        <button type="button" className="product__button">Adicionar à Sacola</button>
      </div>

    </main>
  );
}

export default Product;