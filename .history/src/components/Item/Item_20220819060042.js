import {Link} from 'react-router-dom';
import './Item.css';

export const Item = ({ item }) => {
  return (
    <div className='cardFormat' key={item.id}>
      <div className='cardTitle'>
        <h3 className='objectTitle'>{item.title}</h3>
      </div>
      <div className='cardImg container'>
        <img className='formatImg' src={item.thumbnail} alt={item.title}/>
      </div>
      <div className='moreData'>
          <span>{item.description}</span>
          <span className='price'> ${item.price}</span>
      </div>
      <div className='moreBtn'>
        <Link
          to={`/detail/${item.id}`}>
          <button className='detailBtn'>Mostrar Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item