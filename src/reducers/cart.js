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

      return {
        ...state,
        items: [
          ...state.items,
          newItem,
        ],
        itemsInCart: state.itemsInCart + 1,
        subtotal: state.subtotal,
      }
    }

    case INCREASE_ITEM: {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === payload) {
            return {...item, quantity: item.quantity + 1};

          }
          return item;

        }),
        itemsInCart: state.itemsInCart + 1,
      }
    }

    case DECREASE_ITEM: {
      let newItens = [];

      if (state.itemsInCart !== 1) {  // Se houver mais de um item no carrinho

        if (state.items.length === 1) {   // Se os itens no carrinho forem duplicados
          newItens = state.items.map(item => ({...item, quantity: item.quantity - 1}))
        }

        if (state.items.length !== 1) {   // Se os itens no carrinho não forem duplicados
          newItens = state.items.filter(item => item.id !== payload)
        }

      }

      return {
        ...state,
        items: newItens,
        itemsInCart: state.itemsInCart - 1,
      }
    }

    case REMOVE_ITEM: {
      const numberOfItemsRemoved = state.items.map(item => {
        if (item.id === payload) {
          return item.quantity;
        }
      });
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        itemsInCart: state.itemsInCart - numberOfItemsRemoved[0],
      }
    }

    default:
      return state;
  }
}

export default cartReducer;