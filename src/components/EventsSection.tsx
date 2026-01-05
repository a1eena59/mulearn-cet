import React, { useRef, useEffect, useState } from 'react';
import medhack from '../assets/events/medhack.jpeg';
import mument from '../assets/events/mument.jpeg';
import musprint from '../assets/events/musprint.jpeg';
import beyondhack from '../assets/events/beyondhack.jpeg';
import lc_ai from '../assets/events/lc_ai.jpeg';
import lc_webdev from '../assets/events/lc_webdev.jpeg';
import lc_stock from '../assets/events/lc_stock.jpeg';
import talk1 from '../assets/events/talk1.jpeg';
import talk2 from '../assets/events/talk2.jpeg';
import talk3 from '../assets/events/talk3.jpeg';
import hackathon from '../assets/events/hackathon.jpeg';

interface Event {
  id: number;
  poster: string;
}

const events: Event[] = [
  { id: 1, poster: mument },
  { id: 2, poster: musprint },
  { id: 3, poster: beyondhack },
  { id: 4, poster: lc_ai },
  { id: 5, poster: lc_webdev },
  { id: 6, poster: medhack },
  { id: 7, poster: lc_stock },
  { id: 8, poster: talk1 },
  { id: 9, poster: talk2 },
  { id: 10, poster: talk3 },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div
      style={{
        minWidth: "280px",
        height: "380px",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
      }}
    >
      <img
        src={event.poster}
        alt="Event Poster"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.6s ease",
        }}
      />

      {/* subtle dark fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0))",
        }}
      />
    </div>
  );
};

const EventsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 1;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const duplicatedEvents = [...events, ...events];

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          display: 'flex',
          gap: '24px',
          padding: '20px 0',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {duplicatedEvents.map((event, index) => (
          <EventCard key={`${event.id}-${index}`} event={event} />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(to right, var(--dark-bg), transparent)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(to left, var(--dark-bg), transparent)',
          pointerEvents: 'none',
        }}
      />
      <p
        style={{
          textAlign: 'center',
          color: 'var(--muted-text)',
          marginTop: '24px',
          fontSize: '14px',
          fontStyle: 'italic',
        }}
      >
        Hover to pause • Event posters coming soon!
      </p>
    </div>
  );
};

export default EventsSection;
