import styles from './styles.module.scss';


interface FeedbackMessageProps {
  message: string;
}

export function FeedbackMessage({ message }: FeedbackMessageProps) {
  return (
    <div className={styles.messageWrapper}>
      <p>{message}</p>
    </div>
  );
}