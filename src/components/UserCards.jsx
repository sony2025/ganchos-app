import { useFetch } from '../hooks/useFetch';
import UserCard from './UserCard';
import './UserCards.css';

const UserCards = () => {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <div className="loading">Cargando usuarios...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-cards-container">
      <div className="user-cards-header">
        <h1>Lista de Usuarios</h1>
      </div>
      
      <div className="user-cards-grid">
        {users && users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserCards;
