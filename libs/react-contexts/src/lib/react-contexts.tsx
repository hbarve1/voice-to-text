import styles from './react-contexts.module.css';

/* eslint-disable-next-line */
export interface ReactContextsProps {}

export function ReactContexts(props: ReactContextsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactContexts!</h1>
    </div>
  );
}

export default ReactContexts;
