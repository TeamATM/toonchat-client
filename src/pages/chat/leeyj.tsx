import Footer from '@/components/chat/Footer';
import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import styles from './leeyj.module.css';

const leeyj = () => (
  <main className={styles.main}>
    <Header />
    <Main />
    <Footer />
  </main>
);

export default leeyj;
