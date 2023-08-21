import Image from 'next/image';
import styles from './page.module.css';
import underConstruction from '../../public/underconstruction.svg';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>
          <strong>Thank you for visiting www.kenzietechsolutions.com.</strong>
        </p>
        <p>Currently the site is being built as we speak.</p>
        <p>
          Please come back at a different time to see how to interact with the
          business!
        </p>
        <p>
          Any questions, please contact:{' '}
          <span className={styles.hyperlink}>
            <a href='mailto:contact@kenzietechsolutions.com'>
              contact@kenzietechsolutions.com
            </a>
          </span>
        </p>
        <div className={styles.center}>
          <Image
            src={underConstruction}
            width={300}
            height={300}
            alt='construction logo'
          />
        </div>
      </div>
    </main>
  );
}

