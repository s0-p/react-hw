import styles from './Card.module.css';
function Card({ id, name, price, brand }) {
  return (
    <article className={styles['card']} key={id}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{brand}</p>
    </article>
  );
}
export default Card;
