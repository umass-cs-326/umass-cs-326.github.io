import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        In this course we examine the important problems in operating system
        design and implementation. The operating system provides a well-known,
        convenient, and efficient interface between user programs and the bare
        hardware of the computer on which they run. The operating system is
        responsible for allowing resources (e.g., disks, networks, and
        processors) to be shared, providing common services needed by many
        different programs (e.g., file service, the ability to start or stop
        processes, and access to the printer), and protecting individual
        programs from one another. The course will start with a brief historical
        perspective of the evolution of operating systems over the last fifty
        years, and then cover the major components of most operating systems.
        This discussion will cover the tradeoffs that can be made between
        performance and functionality during the design and implementation of an
        operating system. Particular emphasis will be given to three major OS
        subsystems: process management (processes, threads, CPU scheduling,
        synchronization, and deadlock), memory management (segmentation, paging,
        swapping), file systems, and operating system support for distributed
        systems. This course counts as a CS Elective toward the CS Major.
        Prerequisites: COMPSCI 230. 4 credits.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--12')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        {/* <h3>{title}</h3> */}
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
