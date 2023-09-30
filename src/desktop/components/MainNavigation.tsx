import { Link } from 'react-router-dom';
import account from '../images/account.png';
import added from '../images/added.png';
import api from '../images/api.png';
import docs from '../images/docs.png';
import exams from '../images/exams.png';
import search from '../images/search.png';
import tests from '../images/tests.png';
import { buttonsId } from '../MainDesktop';
export default function MainNavigation({
  func,
  selectedButton,
}: {
  func: (selected: buttonsId) => void;
  selectedButton: buttonsId;
}) {
  return (
    <div className="main__navigation">
      <div className="main__navigation-wrapper">
        <div
          className={
            selectedButton === 'tests' ? 'main__navigation-item active' : 'main__navigation-item'
          }
          onClick={() => func('tests')}
        >
          <img src={tests} />
          <div>Сливы кр</div>
        </div>
        <div
          className={
            selectedButton === 'exams' ? 'main__navigation-item active' : 'main__navigation-item'
          }
          onClick={() => func('exams')}
        >
          <img src={exams} />
          <div>Сливы экзаменов</div>
        </div>
        <div
          className={
            selectedButton === 'docs' ? 'main__navigation-item active' : 'main__navigation-item'
          }
          onClick={() => func('docs')}
        >
          <img src={docs} />
          <div>Документы</div>
        </div>
        <Link to="/api" className="main__navigation-item">
          <img src={api} />
          <div>API</div>
        </Link>
        <div className="main__navigation-item ondev">
          <img src={account} />
          <div>Аккаунт</div>
        </div>
        <div className="main__navigation-item ondev">
          <img src={search} />
          <div>Общий поиск</div>
        </div>
        <div className="main__navigation-item ondev">
          <img src={added} />
          <div>Добавление</div>
        </div>
      </div>
    </div>
  );
}
