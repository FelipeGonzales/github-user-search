import { useState } from 'react';
import ButtonIcon from '../../core/components/ButtonIcon';
import UserCardLoader from '../../core/components/UserCardLoader';
import { User } from '../../core/types/User';
import { makeRequest } from '../../core/utils/request';
import UserCard from './components/UserCard';
import './styles.scss';

type FormState = {
  name: string;
}

const Search = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormState>({ name: '' });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    setIsLoading(true);
    makeRequest({ url: formData.name })
      .then(response => setUser(response.data))
      .finally(() => { setIsLoading(false) })
  };

  return (<>
    <div className="search-container" >
      <div className="search-card">
        <div className="search-title"><b>Encontre um perfil GitHub</b></div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                value={formData.name}
                className="form-control"
                type="text"
                name="name"
                placeholder="Usuário Github"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <br />
          <ButtonIcon text="Encontrar" />
        </form>
      </div>
    </div>

    {isLoading ? <UserCardLoader /> : user?.id && <UserCard user={user} />}

  </>
  );
}

export default Search;