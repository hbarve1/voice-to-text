import styles from './react-svg.module.css';

/* eslint-disable-next-line */
export interface ReactSvgProps {}

export function ReactSvg(props: ReactSvgProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactSvg!</h1>
    </div>
  );
}

export default ReactSvg;
