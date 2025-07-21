import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3 className="user-card__name">{user.name}</h3>
      <p className="user-card__job">{user.company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
