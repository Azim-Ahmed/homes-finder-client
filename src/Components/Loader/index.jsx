import styles from '../../styles/loader.module.scss';
import Image from 'next/image';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div>
        <Image src="/load.gif" width={200} height={200} alt="logo image" />
      </div>
    </div>
  );
}
