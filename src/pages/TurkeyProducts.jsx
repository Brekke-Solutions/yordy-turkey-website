import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './TurkeyProducts.module.css';

function CategorySection({ label, items }) {
  return (
    <section className={styles.category}>
      <h2 className={styles.categoryTitle}>{label}</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            size={item.size}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

function TurkeyProducts() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Turkey Products</h1>
        <p className={styles.heroCopy}>
          All of our turkeys are all-hen flocks raised right here on the farm.
          Plan on approximately <strong>1&nbsp;lb per person</strong> when
          ordering. Walk-ins are always welcome — pre-orders are encouraged to
          guarantee your bird. Payment is due upon pickup.
        </p>
        <p className={styles.heroCopy}>
          Need a large quantity order or interested in gift certificates?{' '}
          <a href="tel:3092632891" className={styles.phone}>
            Call us at 309-263-2891
          </a>
          .
        </p>
      </header>

      <main className={styles.main}>
        {Object.values(products).map((category) => (
          <CategorySection
            key={category.label}
            label={category.label}
            items={category.items}
          />
        ))}
      </main>

      <div className={styles.ctaWrapper}>
        <p className={styles.ctaText}>Ready to place your order?</p>
        <Link to="/order-form" className={styles.ctaButton}>
          Place an Order
        </Link>
      </div>
    </div>
  );
}

export default TurkeyProducts;
