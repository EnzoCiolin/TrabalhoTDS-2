import styles from './GameBanner.module.css';

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className={styles.container}>
      <img src={props.bannerUrl} alt="" className={styles.image} />
      <div className={styles.overlay}>
        <strong className={styles.title}>{props.title}</strong>
        <span className={styles.adsCount}>{props.adsCount} anúncio(s)</span>
      </div>
    </a>
  );
}
