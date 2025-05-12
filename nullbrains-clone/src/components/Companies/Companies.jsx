import React from 'react';
import './Companies.css';

// Importing images from the local assets folder
import DisneyLogo from '../../assets/images/companies/disney.png';
import GoogleLogo from '../../assets/images/companies/google.png';
import HubSpotLogo from '../../assets/images/companies/hubspot.png';
import YouTubeLogo from '../../assets/images/companies/youtube.png';
import SlackLogo from '../../assets/images/companies/slack.svg';
import ShopifyLogo from '../../assets/images/companies/shopify.png';


const Companies = () => {
    const companies = [
        { name: 'Disney', logo: DisneyLogo },
        { name: 'Google', logo: GoogleLogo },
        { name: 'HubSpot', logo: HubSpotLogo },
        { name: 'YouTube', logo: YouTubeLogo },
        { name: 'Slack', logo: SlackLogo },  // Slack as SVG
        { name: 'Shopify', logo: ShopifyLogo },
    ];

    return (
        <section className="companies">
            <div className="container">
                <h2 className="companies-heading">Trusted by 100+ Companies</h2>

                <div className="companies-logos">
                    {companies.map((company, index) => (
                        <div className="company-logo" key={index}>
                            <img
                                src={company.logo}
                                alt={company.name}
                                onError={(e) => {
                                    console.error(`Failed to load image for ${company.name}`);
                                    e.target.src = '/path/to/placeholder-image.png'; // Optional placeholder if the image fails
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Companies;
