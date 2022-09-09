import type { FC } from 'react';
import type { IPerson } from '../../../../webAPI/schema';
//
import styles from './PersonsListItem.module.scss';
import { Link } from 'react-router-dom';

export const PersonsListItem: FC<IPerson> = (person) => {
  const personId = getIdFromPerson(person);
  console.log(person, personId);
  return (
    <div className={styles.Card}>
      <Link to={`details/${personId}`}>
        <span className={styles.Title}>{person.name}</span>
      </Link>
      <span className={styles.InfoRow}>Birth year: {person.birth_year}</span>
      <span className={styles.InfoRow}>Height: {person.height}</span>
      <span className={styles.InfoRow}>Mass: {person.mass}</span>
      <span className={styles.InfoRow}>Hair color: {person.hair_color}</span>
      <span className={styles.InfoRow}>Skin color: {person.skin_color}</span>
    </div>
  );
};

function getIdFromPerson(person: IPerson) {
  let str = person.url;
  if (str.charAt(str.length - 1) === '/') {
    str = person.url.slice(0, -1);
  }

  return str.substring(str.lastIndexOf('/') + 1);
}
