import PropTypes from 'prop-types';
import s from './Stats.module.css';


export default function Stats (props) {
    const { id, label, percentage} = props;
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return (  
      <li className={s.item} key={id} style={{backgroundColor: randomColor}}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    )
}

Stats.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,

};
