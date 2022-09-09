import { FC, useEffect, useState } from 'react';
import { getSpecieInfo } from '../../../../webAPI';
//
import { ISpecie } from '../../../../webAPI/schema';
//
import styles from './Specie.module.scss';

export const SpecieInfo: FC<{ links: string[] }> = ({ links }) => {
  const [species, setSpecies] = useState<ISpecie[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const specieArr =
        links.length > 0 ? await Promise.all(links.map((link) => getSpecieInfo(link))) : [];
      //
      setSpecies(specieArr);
    };
    //

    getData().catch((e) => {
      console.log(e);
    });
  }, []);

  if (!species || species.length < 1) {
    return null;
  }

  return (
    <>
      {species.map((item) => {
        return (
          <div key={item.url} className={styles.SpeciesList}>
            <span>Specie name: {item.name}</span>
          </div>
        );
      })}
    </>
  );
};
