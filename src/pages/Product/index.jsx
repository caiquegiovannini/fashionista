import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseURL } from '../../services/api';
import { formatParamUrlToName } from '../../services/utils';
import { getProduct, setSelectedSize } from '../../actions/product';

import './styles.css';
import { addItem } from '../../actions/cart';

const Product = (props) => {
  const dispatch = useDispatch();
  const { product, selectedSize } = useSelector(state => state.product);

  useEffect(() => {
    const param = props.match.params.name;

    fetch(baseURL)
      .then(res => res.json())
      .then(data => {
        const selectedProduct = data.find(item => 
          item.name === formatParamUrlToName(param)
        );

        dispatch(getProduct(selectedProduct));
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
      dispatch(setSelectedSize(sku));
    }

    return;
  }

  const handleAddToCart = (product, size) => {
    if (!size) {
      alert('Selecione um tamanho')
      return;
    }

    const productInfo = {
      ...product, 
      size,
    };

    dispatch(addItem(productInfo));
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
          <p className="product__price">{product.actual_price}</p>
          <p className="product__payment">em até {product.installments}</p>
        </div>

        <div className="product__size">
          <p className="product__size__title">Escolha o tamanho</p>
          <div className="product__sizes">
            {sizes}
          </div>
        </div>

        <button
          type="button" 
          className="product__button"
          onClick={() => handleAddToCart(product, selectedSize)}
        >
          Adicionar à Sacola
        </button>
      </div>

    </main>
  );
}

export default Product;