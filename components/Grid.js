import React from "react";

import Card from "./Card";

import styles from "./Grid.module.scss";

function Grid() {
  return (
    <article className={styles.gridContainer}>
      <Card
        date="2017-12-17"
        media_type="image"
        url="https://apod.nasa.gov/apod/image/1712/qso2237_wiyn_960.jpg"
        title="The Einstein Cross Gravitational Lens"
        explanation="Most galaxies have a single nucleus -- does this galaxy have four?  The strange answer leads astronomers to conclude that the nucleus of the surrounding galaxy is not even visible in this image.  The central cloverleaf is rather light emitted from a background quasar.  The gravitational field of the visible foreground galaxy breaks light from this distant quasar into four distinct images.  The quasar must be properly aligned behind the center of a massive galaxy for a mirage like this to be evident.  The general effect is known as gravitational lensing, and this specific case is known as the Einstein Cross.  Stranger still, the images of the Einstein Cross vary in relative brightness, enhanced occasionally by the additional gravitational microlensing effect of specific stars in the foreground galaxy.     Free Download: The 2018 APOD Calendar"
      />
      <Card
        date="2017-12-17"
        media_type="image"
        url="https://apod.nasa.gov/apod/image/0002/chimney1_cgps.jpg"
        title="The Einstein Cross Gravitational Lens"
        explanation="Most galaxies have a single nucleus -- does this galaxy have four?  The strange answer leads astronomers to conclude that the nucleus of the surrounding galaxy is not even visible in this image.  The central cloverleaf is rather light emitted from a background quasar.  The gravitational field of the visible foreground galaxy breaks light from this distant quasar into four distinct images.  The quasar must be properly aligned behind the center of a massive galaxy for a mirage like this to be evident.  The general effect is known as gravitational lensing, and this specific case is known as the Einstein Cross.  Stranger still, the images of the Einstein Cross vary in relative brightness, enhanced occasionally by the additional gravitational microlensing effect of specific stars in the foreground galaxy.     Free Download: The 2018 APOD Calendar"
      />
    </article>
  );
}

export default Grid;