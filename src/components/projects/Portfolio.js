import React, { useState, useEffect } from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio_1.png';
import IMG2 from '../../assets/portfolio_2.png';
import IMG3 from '../../assets/portfolio_3.png';
import IMG4 from '../../assets/portfolio_4.png';
import IMG5 from '../../assets/portfolio_5.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Docker and CI/CD based Web Application',
    technology: ['JavaScript', 'Python', 'React', 'Django', 'HTML', 'Tailwind CSS'],
    github: 'https://github.com/spatil1697/Docker-and-CI-CD-based-web-application-with-a-friendly-and-intuitive-user-interface',
  },
  {
    id: 2,
    image: IMG4,
    title: 'Food Waste Reduction Platform',
    technology: ['JavaScript', 'Java', 'React', 'Spring Boot', 'HTML', 'CSS'],
    github: 'https://github.com/spatil1697/food-waste-reduction-platform',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Travel and Lifestyle based Website',
    technology: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/spatil1697/Travel-Lifestyle-Website',
  },
  {
    id: 4,
    image: IMG2,
    title: 'E-commerce Rest Service using Node.js',
    technology: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    github: 'https://github.com/spatil1697/Ecommerce-api',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Keeper Application using React',
    technology: ['JavaScript', 'React', 'HTML', 'CSS', 'Material UI'],
    github: 'https://github.com/spatil1697/Keeper-app-using-React.js',
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Use effect to manage the showModal state based on selectedImage
  useEffect(() => {
    if (selectedImage !== null) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [selectedImage]);

  // Open the slider and set the selected image and slide index
  const openSlider = (index) => {
    setSelectedImage(data[index]);
    setSlideIndex(index);
  };

  // Close the slider and clear the selected image
  const closeSlider = () => {
    setSelectedImage(null);
  };

  // Change slide by updating the slide index
  const changeSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= data.length) newIndex = 0;
    if (newIndex < 0) newIndex = data.length - 1;
    setSelectedImage(data[newIndex]);
    setSlideIndex(newIndex);
  };

  return (
    <section id="portfolio" className="full-width-background">
      <h5 className="portfolio_sub_header">Get an overview of my latest projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, technology }, index) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={image} alt={title} onClick={() => openSlider(index)} />
            </div>
            <h3>{title}</h3>
             <div className="portfolio_item_technology">
              {technology.map((tech, i) => (
                <span key={i} className="tech-button">{tech}</span>
              ))}
            </div>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
            </div>
          </article>
        ))}
          
      </div>
      <div className="view-more-container">
        <a href='https://github.com/spatil1697?tab=repositories' className="btn btn-primary" target="_blank" rel="noreferrer">View More</a>
      </div>
      {/* Modal */}
      {selectedImage && (
        <div className={`modal-overlay ${showModal ? 'show' : ''}`} onClick={closeSlider}>
          <div className={`modal ${showModal ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeSlider}>&times;</span>
            <div className="mySlides show">
              <div className="numbertext">{slideIndex + 1} / {data.length}</div>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="caption-container">
                <p>{selectedImage.description}</p>
              </div>
            </div>
            <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
            <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
