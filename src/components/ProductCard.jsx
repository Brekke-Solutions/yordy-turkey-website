import styles from './ProductCard.module.css';

function ProductCard({ name, price, size, description }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{price}</p>
      {size && <p className={styles.detail}>Size: {size}</p>}
      {description && <p className={styles.detail}>{description}</p>}
    </article>
  );
}

export default ProductCard;
