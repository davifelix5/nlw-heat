import styles from './styles.module.scss';

import logo from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, vai ser o melhor de todos. Vamo pra cimaa!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/davifelix5.png" alt="Davi Félix" />
            </div>
            <span>Davi Félix</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, vai ser o melhor de todos. Vamo pra cimaa!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/davifelix5.png" alt="Davi Félix" />
            </div>
            <span>Davi Félix</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, vai ser o melhor de todos. Vamo pra cimaa!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/davifelix5.png" alt="Davi Félix" />
            </div>
            <span>Davi Félix</span>
          </div>
        </li>
      </ul>
    </div>
  );
}