import { useEffect, useState } from 'react';
import { PersonsListItem } from './PersonsListItem';
import { getPersonsList } from '../../../../webAPI';
//
import styles from './PersonsList.module.scss';
//
import type { IPerson } from '../../../../webAPI/schema';
//

export const PersonsList = () => {
  //
  const [personsList, setPersonsList] = useState<IPerson[]>([]);

  //
  useEffect(() => {
    const fetchList = async () => {
      try {
        const list = await getPersonsList(1);

        list.results && setPersonsList(list.results);
      } catch (e) {
        console.log(e);
      }
    };

    fetchList().catch((e) => {
      console.log(e);
    });
  }, []);
  //

  return (
    <main>
      <div className={styles.List}>
        {personsList.length > 0 &&
          personsList.map((person) => {
            return <PersonsListItem {...person} key={person.url} />;
          })}
      </div>
    </main>
  );
};
