import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/authContext';

import styles from './styles.module.scss';

import { VscSignOut, VscGithubInverted } from 'react-icons/vsc';

import { api } from '../../services/api';

import { FeedbackMessage } from '../FeedbackMessage';
import { Loader } from '../Loader';

const TWO_SECONDS = 2 * 1000;

export function SendMessageForm() {
  
  const { user, signOut } = useContext(AuthContext);
  
  const [message, setMessage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);
  
  async function handleFormSubmit(e: React.FormEvent) {
    let timeout: number | undefined;
    e.preventDefault();
    if (!message.trim()) {
      return;
    }
    setSending(true);
    api.post('messages/', { message })
      .then(() => {
        setFeedbackMessage('Mensagem enviada com sucesso!');
        setSuccess(true);
        setMessage('');
      })
      .catch(() => {
        setFeedbackMessage('Erro ao enviar a mensagem');
        setSuccess(false);
      })
      .finally(() => {
        setSending(false);
        timeout = setTimeout(() => {
          setSuccess(null);
          setFeedbackMessage('');
        }, TWO_SECONDS);
      });
      return () => clearTimeout(timeout);
  }

  return (
    <>
    {!!feedbackMessage && (
      <FeedbackMessage message={feedbackMessage} success={success} />
    )}
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size={32} />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleFormSubmit} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
        />
        <button type="submit">
          {sending ? (
            <Loader size={30} primaryColor="#202024" secondaryColor="#fff"/>
          ) : 'Enviar mensagem'}
        </button>
      </form>
    </div>
    </>
  );
}