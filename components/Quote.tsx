import Lines from './Lines';

export default function Quote() {
  return (
    <section className="quote section section--latte">
      <div className="container">
        <blockquote>
          <p data-reveal="lines">
            <Lines
              lines={[
                '“Kefday isn’t a place,',
                <>
                  it’s a <em>state of mind.</em>”
                </>,
              ]}
            />
          </p>
        </blockquote>
      </div>
    </section>
  );
}
