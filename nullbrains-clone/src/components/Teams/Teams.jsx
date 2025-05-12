import React from 'react';
import './Teams.css';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
    {
      name: 'Freddy Smith',
      role: 'CEO and Founder',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      color: '#4682B4',
      lightColor: '#B0C4DE'
    },
    {
      name: 'Carl Jones',
      role: 'CTO and Co-Founder',
      image: 'https://randomuser.me/api/portraits/men/20.jpg',
      color: '#2E8B57',
      lightColor: '#98FB98'
    },
    {
      name: 'Susan Peterson',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      color: '#8B0000',
      lightColor: '#F4A9A8'
    },
    {
      name: 'Tommy Barnes',
      role: 'Designer',
      image: 'https://randomuser.me/api/portraits/men/30.jpg',
      color: '#4B0082',
      lightColor: '#D8BFD8'
    },
    {
      name: 'Linda Green',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/20.jpg',
      color: '#6A5ACD',
      lightColor: '#E6E6FA'
    },
    {
      name: 'Mike Andrews',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/40.jpg',
      color: '#FF8C00',
      lightColor: '#FFDAB9'
    },
    {
      name: 'Jessica Lee',
      role: 'UX Researcher',
      image: 'https://randomuser.me/api/portraits/women/30.jpg',
      color: '#20B2AA',
      lightColor: '#AFEEEE'
    },
    {
      name: 'Robert White',
      role: 'Full Stack Engineer',
      image: 'https://randomuser.me/api/portraits/men/50.jpg',
      color: '#A52A2A',
      lightColor: '#F5DEB3'
    }
  ];
  

const Teams = () => {
  return (
    <section className="teams-container">
  <p className="teams-label">OUR TEAM</p>
  <h2 className="teams-heading">
    An incredible team of amazing individuals
  </h2>
  <div className="teams-grid">
    {teamMembers.map((member, index) => (
      <div className="team-card" key={index}>
        <div className="team-image-wrapper">
  <div
    className="background-arc"
    style={{ backgroundColor: member.lightColor }}
  >
    <div
      className="outer-circle"
      style={{ backgroundColor: member.color }}
    >
      <div className="inner-circle">
        <img src={member.image} alt={member.name} />
      </div>
    </div>
  </div>
</div>


        <p className="team-name">{member.name}</p>
        <p className="team-role">
          <a href="#">{member.role}</a>
        </p>
        <div className="team-icons">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Teams;
