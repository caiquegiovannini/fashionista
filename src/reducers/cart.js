import { ADD_ITEM, INCREASE_ITEM, DECREASE_ITEM,REMOVE_ITEM } from '../actionTypes/cart';

const cartInitialState = {
  items: [],
  itemsInCart: 0,
  subtotal: 0,
}

const cartReducer = (state = cartInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM: {
      let newItem = {
        id: payload.id,
        image: payload.image,
        name: payload.name,
        size: payload.size,
        actual_price: payload.actual_price,
        installments: payload.installments,
        quantity: payload.quantity,
      };
      const subtotalValue = payload.actual_price + Number(state.subtotal);

      return {
        ...state,
        items: [
          ...state.items,
          newItem,
        ],
        itemsInCart: state.itemsInCart + 1,
        subtotal: subtotalValue,
      }
    }

    case INCREASE_ITEM: {
      let itemPrice = 0;
      const newItems = state.items.map(item => {
        itemPrice = item.actual_price;
        if (item.id === payload) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      })
      const subtotalValue = state.subtotal += itemPrice;

      return {
        ...state,
        items: newItems,
        itemsInCart: state.itemsInCart + 1,
        subtotal: subtotalValue,
      }
    }

    case DECREASE_ITEM: {
      let itemPrice = 0;
      let newItens = [];

      if (state.itemsInCart !== 1) {  // Se houver mais de um item no carrinho

        if (state.items.length === 1) {   // Se os itens no carrinho forem duplicados
          newItens = state.items.map(item => {
            itemPrice = item.actual_price;
            return {...item, quantity: item.quantity - 1}
          })
        }

        if (state.items.length !== 1) {   // Se os itens no carrinho não forem duplicados
          newItens = state.items.filter(item => item.id !== payload);

          state.items.map(item => {
            if (item.id === payload) {
              itemPrice = item.actual_price;
            }
            return '';
          });
        }

      } else {
        itemPrice = state.subtotal;
      }

      return {
        ...state,
        items: newItens,
        itemsInCart: state.itemsInCart - 1,
        subtotal: state.subtotal - itemPrice,
      }
    }

    case REMOVE_ITEM: {
      let itemPrice = 0;
      const numberOfItemsRemoved = state.items.map(item => {
        if (item.id === payload) {
          return item.quantity;
        }
        return '';
      });

      state.items.map(item => {
        if (item.id === payload) {
          itemPrice = item.actual_price;
        }
        return '';
      })
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        itemsInCart: state.itemsInCart - numberOfItemsRemoved[0],
        subtotal: state.subtotal - itemPrice,
      }
    }

    default:
      return state;
  }
}

export default cartReducer;