import React, { useState, useEffect } from 'react';
import { getMenu } from '../data/iceCreamData';
import { Helmet} from 'react-helmet';
import IceCreamImage from './IceCreamImage';
import LoaderMessage from '../structure/LoaderMessage';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({history}) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    let isMounted = true;
    getMenu().then(menuData => {
      if (isMounted) {
        setMenu(menuData);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    }
  }, []);

  const onItemClickHandler = to => {
    history.push(to);
  }

  const onLinkClickHandler = e => {
    // This is done to avoid the click handler of the <section>
    // firing and placing two browse entries in browser history.
    e.stopPropagation();
  }

  return (
    <main>
      <Helmet>
        <title>You must try them all!</title>
      </Helmet>
      <h2 className="main-heading">You must try them all!</h2>
      <LoaderMessage 
        loadingMessage="Loading menu.." 
        doneMessage="We are ready!"
        isLoading={isLoading}/>
      {menu.length > 0 ? (
      <ul className="container">
        {menu.map(({id, iceCream, price, description, inStock, quantity}) => 
          <li key={id.toString()}>
            <section 
              className="card"
              onClick={()=> {
                onItemClickHandler(`/menu-items/${id.toString()}`)
              }}>
              <div className="image-container">
                <IceCreamImage iceCreamId={iceCream.id} />
              </div>
              <div className="text-container">
                <h3>
                  <Link to={`/menu-items/${id.toString()}`} 
                  onClick={onLinkClickHandler}>
                    {iceCream.name}
                  </Link>
                </h3>
                <div className="content card-content">
                  <p className="price">{`$${price.toFixed(2)}`}</p>
                  <p className={`stock${inStock ? '' : ' out'}`}>
                    { inStock ? `${quantity} in stock` : 'Out of stock'}
                  </p>
                  <p className="description">{description}</p>
                </div>
              </div>
            </section>
          </li>)}
      </ul>
      ) : (!isLoading && <p>Menu is empty</p>)
      }
    </main>
  );
};

Menu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }) 
}
export default Menu;
