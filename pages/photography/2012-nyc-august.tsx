import { useState } from 'react';
import Head from 'next/head';
import PhotosetRow from '@components/PhotosetRow';
import photoset from '@data/photosets/2012-nyc-august';
import PhotosetLightbox from '@components/PhotosetLightbox';
import BackToPhotoset from '@components/BackToPhotosets';

import styles from '@css/Photoset.module.css';

const NewYorkCityAugust2012 = (): JSX.Element => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

    const selectPhoto = (index: number) => {
        setPhotoIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            <Head><title>New York City (August 2012) - Keith Wagner</title></Head>
            <main className={styles.photoset}>
                <BackToPhotoset />

                <h1>New York City</h1>
                <div className={styles.meta}>August 10 - 11, 2012</div>

                <div className={styles.description}>
                    <p>
                        It was a hot weekend in New York City. We were able to go to Grand Central Station,
                        Top of the Rock, and the Intrepid Air & Space Museum.
                    </p>
                </div>

                <PhotosetRow
                    images={[
                        photoset[0],
                        photoset[1],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[2],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[3],
                        photoset[4],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[5],
                    ]}
                    onSelect={selectPhoto}
                />

                <PhotosetRow
                    images={[
                        photoset[6],
                        photoset[7],
                    ]}
                    onSelect={selectPhoto}
                />

                <div className={styles.description}>
                    <p>
                        I was finally able to see a Space Shuttle up close.
                    </p>
                </div>

                <PhotosetRow
                    images={[
                        photoset[8],
                    ]}
                    onSelect={selectPhoto}
                />
            </main>
            <PhotosetLightbox
                photoset={photoset}
                index={photoIndex}
                visible={isLightboxOpen}
                setIndex={setPhotoIndex}
                setVisible={setIsLightboxOpen}
            />
        </>
    );
};

export default NewYorkCityAugust2012;
