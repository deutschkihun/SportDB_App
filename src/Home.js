import React,{useState,useEffect} from 'react';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import sport from './images/sport.png';
import { useGlobalContext } from './context';
import {reviews} from './data'

const Home = () => {
  const { closeSubmenu } = useGlobalContext();
  const [CustomerReviews] = useState(reviews)
  const [index, setIndex] = useState(0)

  const prevhandler = () => {
    setIndex(index-1)
  }

  const nexthandler = () => {
    setIndex(index+1)
  }

  useEffect(() => {
    const lastIndex = CustomerReviews.length-1
    if(index < 0) {
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  }, [index,CustomerReviews])


  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index+1)
    },3000)
    return () => {
      clearInterval(slider)
    }
  },[index])

  return (
    <>
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            One of the best sport database application
            <br />
          </h1>
          <p>
            Many users are satified with our sport database application.
            This application is providing sport team and player data. 
            Just experience how easy to find sport team and player through our service.
          </p>
        </article>
        <article className='hero-images'>
          <img src={sport} className='phone-img' alt='phone'/>
        </article>
      </div>
    </section>

     <section className="section">
         <div className='title-review'>
            <h2>
              Reviews
            </h2>
          </div>
          <div className="section-center">
            {CustomerReviews.map((review,reviewIndex) => {
              const {id,image,name,title,quote} = review

              let position = 'nextSlide'
              if(reviewIndex === index){
                position = 'activeSlide'
              }

              if( reviewIndex === index-1 || (index === 0 && reviewIndex === CustomerReviews.length-1)){
                position = 'lastSlide'
              }

              return (
                <div className='reviews'>
                <article key={id} className={position}>
                  <img src={image} alt={name} className='person-img'/>
                  <h4>{name}</h4>
                  <p className='title-review'>{title}</p>
                  <p className='text'>{quote}</p>
                </article>
                </div>
              )
            })}
            <button className='prev' onClick={prevhandler}>
              <FiChevronLeft/>
            </button>
            <button className='next'onClick={nexthandler}>
              <FiChevronRight/>
          </button>
          </div>
          </section>
    </>
  );
};

export default Home;
