import styles from './react-hooks.module.css';

/* eslint-disable-next-line */
export interface ReactHooksProps {}

export function ReactHooks(props: ReactHooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactHooks!</h1>
    </div>
  );
}

export default ReactHooks;
