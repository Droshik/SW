import { FC, useEffect, useState } from 'react';
import { SpecieInfo } from './SpecieInfo';
import { getSinglePerson } from '../../../../webAPI';
//
import type { IPerson } from '../../../../webAPI/schema';
//
import styles from './PersonInfo.module.scss';
import { useParams } from 'react-router-dom';

export const PersonInfo = () => {
  const params = useParams();
  const id: number | null = params.detailsId ? +params.detailsId : null;
  console.log(params);

  const [person, setPerson] = useState<IPerson | null>(null);

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const personInfo: IPerson = await getSinglePerson(id);
        setPerson(personInfo);
      };
      //
      getData().catch((e) => {
        console.log(e);
      });
    }
  }, [params.detailsId]);
  //

  return (
    <>
      {person && (
        <div className={styles.PersonalInfo}>
          {/*<div className={styles.Name}>*/}
          {/*  <span>{person.name}</span>*/}
          {/*</div>*/}

          <div className={styles.Species}>
            {person.species && <SpecieInfo links={person.species} />}
          </div>

          <div className={styles.InfoList}>
            <span>Birth year: {person.birth_year}</span>
            <span>Height: {person.height}</span>
            <span>Mass: {person.mass}</span>
            <span>Hair color: {person.hair_color}</span>
            <span>Skin color: {person.skin_color}</span>
          </div>
        </div>
      )}
    </>
  );
};
