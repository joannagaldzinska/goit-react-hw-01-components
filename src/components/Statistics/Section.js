import PropTypes from 'prop-types';
import s from './Stats.module.css'


export default function Section({title, children}) {
    return(
        <div className={s.section}>
            {title && <h1 className={s.title}>{title}</h1>}
            {children}
            </div>

    )
};

Section.propTypes = {
    title: PropTypes.string,
}