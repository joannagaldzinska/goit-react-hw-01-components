import PropTypes from 'prop-types';

export default function Stats (props) {
    const { label, percentage} = props;
    
    return (  
    // <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    // </ul>
    )
}

Stats.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,

};
