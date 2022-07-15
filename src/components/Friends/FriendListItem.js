import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <>
      <span
        className={css.status}
        style={{ background: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
