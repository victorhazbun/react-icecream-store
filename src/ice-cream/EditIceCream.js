import React, { useEffect, useState, useRef } from 'react';
import Helmet from 'react-helmet';
import LoaderMessage from '../structure/LoaderMessage';
import { getMenuItem } from '../data/iceCreamData';
import PropTypes from 'prop-types';

const EditIceCream = ({ match, history }) => {
  const isMounted = useRef(true);
  const [menuItem, setMenuItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);
  
  useEffect(() => {
    setIsLoading(true);
    getMenuItem(match.params.menuItemId).then(
      ({ id, price, inStock, quantity, description, iceCream }) => {
        if (isMounted.current) {
          setMenuItem({
            id,
            price: price.toFixed(2),
            inStock,
            quantity: quantity.toString(),
            description,
            iceCream
          });
          setIsLoading(false);
        }
      }
    )
    .catch(error => {
      if (error.response.status === 404 && isMounted.current) {
        history.replace("/");
      }
    });
  }, [match.params.menuItemId, history]);

  return (
    <main>
      <Helmet>
        <title>Edit Ice Cream</title>
      </Helmet>
      <h2 className="main-heading">Edit Ice Cream</h2>
      <LoaderMessage
        loadingMessage="Loading ice cream"
        doneMessage="Ice cream loaded."
        isLoading={isLoading} />
    </main>
  )
};

EditIceCream.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired
  })
};

export default EditIceCream;