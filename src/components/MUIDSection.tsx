import React, { useState } from 'react';
import FloatingIcon from './FloatingIcon';

interface Badge {
  id: number;
  name: string;
  icon: string;
  color: string;
  description: string;
}

const badges: Badge[] = [
  { id: 1, name: 'First Steps', icon: '🚀', color: '#4facfe', description: 'Completed orientation' },
  { id: 2, name: 'Team Player', icon: '🤝', color: '#43e97b', description: 'Joined a learning circle' },
  { id: 3, name: 'Code Warrior', icon: '⚔️', color: '#f5576c', description: 'Completed coding tasks' },
  { id: 4, name: 'Innovator', icon: '💡', color: '#fee140', description: 'Built a unique project' },
  { id: 5, name: 'Mentor', icon: '🎓', color: '#a8edea', description: 'Helped fellow learners' },
  { id: 6, name: 'Explorer', icon: '🔍', color: '#667eea', description: 'Explored 5+ IGs' },
];

const BadgeCard: React.FC<{ badge: Badge; isHovered: boolean; onHover: () => void; onLeave: () => void }> = ({
  badge,
  isHovered,
  onHover,
  onLeave,
}) => (
  <div
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${badge.color}33, ${badge.color}11)`,
      border: `2px solid ${badge.color}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '40px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
      boxShadow: isHovered ? `0 0 30px ${badge.color}66` : 'none',
    }}
  >
    {badge.icon}
  </div>
);

const MUIDSection: React.FC = () => {
  const [hoveredBadge, setHoveredBadge] = useState<Badge | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <FloatingIcon icon="🆔" size={50} top="5%" left="5%" delay={0} />
      <FloatingIcon icon="✨" size={35} top="15%" right="10%" delay={0.5} />
      <FloatingIcon icon="🏆" size={45} bottom="10%" left="8%" delay={1} />

      {/* MUID Card Preview */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'linear-gradient(135deg, rgba(102,126,234,0.2), rgba(118,75,162,0.2))',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(102,126,234,0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(102,126,234,0.3), transparent)',
            borderRadius: '50%',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
            }}
          >
            👤
          </div>
          <div>
            <h4 style={{ color: 'white', fontSize: '18px', fontWeight: 700 }}>Your Name</h4>
            <p style={{ color: 'var(--muted-text)', fontSize: '14px' }}>MUID: CET-2024-XXXX</p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '16px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--accent)', fontSize: '24px', fontWeight: 700 }}>1,250</p>
            <p style={{ color: 'var(--muted-text)', fontSize: '12px' }}>Karma Points</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--accent)', fontSize: '24px', fontWeight: 700 }}>12</p>
            <p style={{ color: 'var(--muted-text)', fontSize: '12px' }}>Badges</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--accent)', fontSize: '24px', fontWeight: 700 }}>5</p>
            <p style={{ color: 'var(--muted-text)', fontSize: '12px' }}>IGs Joined</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {[
          {
            icon: '📊',
            title: 'Track Progress',
            desc: 'Monitor your learning journey with detailed analytics and karma points',
          },
          {
            icon: '🎖️',
            title: 'Earn Badges',
            desc: 'Collect digital badges for achievements and showcase your skills',
          },
          {
            icon: '📁',
            title: 'Build Portfolio',
            desc: 'Create a professional portfolio of your projects and contributions',
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              padding: '28px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>{item.icon}</span>
            <h4 style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h4>
            <p style={{ color: 'var(--muted-text)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Digital Badges */}
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <h3
          style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          Collect Digital Badges 🏅
        </h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {badges.map((badge) => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              isHovered={hoveredBadge?.id === badge.id}
              onHover={() => setHoveredBadge(badge)}
              onLeave={() => setHoveredBadge(null)}
            />
          ))}
        </div>
        <div
          style={{
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '24px',
          }}
        >
          {hoveredBadge && (
            <div
              style={{
                textAlign: 'center',
                animation: 'fadeIn 0.3s ease',
              }}
            >
              <p style={{ color: hoveredBadge.color, fontWeight: 600, fontSize: '16px' }}>{hoveredBadge.name}</p>
              <p style={{ color: 'var(--muted-text)', fontSize: '14px' }}>{hoveredBadge.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MUIDSection;
