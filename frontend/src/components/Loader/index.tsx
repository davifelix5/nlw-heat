import styles from './styles.module.scss';

interface LoaderProps {
  size: number;
  primaryColor: string;
  secondaryColor: string;
}

export function Loader({ size, primaryColor, secondaryColor }: LoaderProps) {
  return (
    <div className={styles.loaderContainer} style={{
      width: size,
      height: size,
      borderColor: primaryColor,
      borderTopColor: secondaryColor,
    }}></div>
  );
}