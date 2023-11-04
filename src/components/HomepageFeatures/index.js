import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        Додаток був створенний максимально просто для кожного користувача. Незалежно
        від віку та рівня обізнаності в технологіях.
      </>
    ),
  },
  {
    title: 'Практичність',
    Svg: require('@site/static/img/target.svg').default,
    description: (
      <>
        Всі функції в боті були вибрані згідно опитуваннь учнів та вчителів. Згідно цього
        було враховано всі побажання з двох сторін для організації гарної комунікації.
      </>
    ),
  },
  {
    title: 'Функціональність',
    Svg: require('@site/static/img/innovation.svg').default,
    description: (
      <>
        Мета проєкту покращити максимально комунікування у навчальних класах та роблячи це все в одному додатку.
        Тому всі функції доступні з одного бота.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
