import React, { useRef, useEffect, useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  type: string;
}

const events: Event[] = [
  { id: 1, title: 'Hackathon 2024', date: 'Jan 2024', type: 'Hackathon' },
  { id: 2, title: 'AI/ML Workshop', date: 'Feb 2024', type: 'Workshop' },
  { id: 3, title: 'Web Dev Bootcamp', date: 'Mar 2024', type: 'Bootcamp' },
  { id: 4, title: 'Cloud Computing Session', date: 'Apr 2024', type: 'Session' },
  { id: 5, title: 'Open Source Day', date: 'May 2024', type: 'Event' },
  { id: 6, title: 'Cyber Security Talk', date: 'Jun 2024', type: 'Talk' },
  { id: 7, title: 'Flutter Fest', date: 'Jul 2024', type: 'Workshop' },
  { id: 8, title: 'Design Sprint', date: 'Aug 2024', type: 'Sprint' },
];

const EventCard: React.FC<{ event: Event; index: number }> = ({ event, index }) => {
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  ];

  return (
    <div
      style={{
        minWidth: '280px',
        height: '380px',
        background: colors[index % colors.length],
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '80px',
          opacity: 0.2,
        }}
      >
        📸
      </div>
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'rgba(0,0,0,0.3)',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          color: 'white',
          fontWeight: 600,
        }}
      >
        {event.type}
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3
          style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '8px',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          {event.title}
        </h3>
        <p
          style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '14px',
          }}
        >
          {event.date}
        </p>
      </div>
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
          <EventCard key={`${event.id}-${index}`} event={event} index={index} />
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
