import styles from './styles.module.scss';


interface FeedbackMessageProps {
  message: string;
  success?: boolean | null;
}

export function FeedbackMessage({ message, success = true }: FeedbackMessageProps) {
  return (
    <div className={
      `${styles.messageWrapper} ${success ? styles.success : styles.error}`
    }>
      <p>{message}</p>
    </div>
  );
}