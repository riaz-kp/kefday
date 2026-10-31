import Image from 'next/image';
import Lines from './Lines';
import { delay, site, unsplash } from '@/lib/site';

// Replace these with photos from @kefday_cafe
const photos = [
  { id: '1501339847302-ac426a4a7cbb', alt: 'Café interior with a glowing sign', sizes: '(max-width: 640px) 100vw, 42vw' },
  { id: '1497935586351-b67a49e012bf', alt: 'Coffee brewing tools on a wooden table', sizes: '(max-width: 640px) 50vw, 25vw' },
  { id: '1525351484163-7529414344d8', alt: 'Egg on toast with avocado', sizes: '(max-width: 640px) 50vw, 33vw' },
  { id: '1514432324607-a09d9b4aefdd', alt: 'Latte art in a ceramic cup', sizes: '(max-width: 640px) 50vw, 25vw' },
  { id: '1567620905732-2d1ec7ab7445', alt: 'A stack of pancakes', sizes: '(max-width: 640px) 50vw, 33vw' },
];

export default function Gallery() {
  return (
    <section className="gallery section section--cream" id="gallery">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="label" data-reveal>
              <span>04</span> Gallery
            </p>
            <h2 className="display" data-reveal="lines">
              <Lines lines={[<>Follow the <em>good days.</em></>]} />
            </h2>
          </div>
          <a className="btn btn--dark" href={site.links.instagram} target="_blank" rel="noopener" data-reveal>
            @kefday_cafe <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mosaic">
          {photos.map((photo, i) => (
            <a
              key={photo.id}
              className={`mosaic__item m${i + 1}`}
              href={site.links.instagram}
              target="_blank"
              rel="noopener"
              data-reveal="mask"
              style={delay(i * 0.08)}
            >
              <span className="zoom">
                <Image src={unsplash(photo.id)} alt={photo.alt} fill sizes={photo.sizes} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
