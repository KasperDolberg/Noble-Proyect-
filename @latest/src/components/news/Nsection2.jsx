import React from 'react'
import '/src/stylesheets/news/Nsection2.css'
import CardNew from './cardNew';


const Nsection2 = () => {

const cardData = [
    { imgSrc: '/src/img/news/Nsection1/brakes-img.avif', date: '10.23.2023', title: 'How does breaks work?', shortInfo: "The concept of braking is, in all honesty, pretty straightforward. Simply put, it's the art of making a moving vehicle stop or slow down. In this beginner's guide, we will delve a little deeper, explaining how this is done and learning what separates good brakes from world-class brakes. So, without further ado, let's get into it." },
    { imgSrc: '/src/img/news/Nsection1/M12.avif', date: '09.24.2023', title: '20 years ago, the Noble M12 slayed the supercar dynasty', shortInfo: 'A decade ago Noble launched the M10, which had been praised for the way it drove and damned for the way it looked. Within two years the M12 emerged from the company’s new premises in Barwell, Leicestershire. In the middle of the steel, spaceframe chassis was a relatively new and tunable Duratec V-6 with twin turbochargers—taking power to 314 hp' },
    { imgSrc: '/src/img/news/Nsection1/suspention.avif', date: '08.10.2023', title: 'E300: How does car suspension work?', shortInfo: "The world of car suspension systems can be intimidating.But you don't need to be a car connoisseur to fully appreciate these engineering masterpieces – and their impact on a car's handling and control. In this beginner's guide, we'll unpack one of the most critical components for our unique Polestar driving experience, while also letting you know how to get the most out of your car. " },
    { imgSrc: '/src/img/news/Nsection1/google-event.avif', date: '07.29.2023', title: 'Google I/O: developer reactions', shortInfo: "We're excited about the E-Target for a lot of reasons. One of the biggest is its operating system: Android Automotive with Google Maps, the Google Assistant, and Google Play Store, standard in every Polestar car from here on out." },
    { imgSrc: '/src/img/news/Nsection1/racing.jpg', date: '07.13.2023', title: 'Noble M600 Nitro Takes de first and second place in Macau Grand Prix', shortInfo: 'The British car completed a stunning ‘clean sweep’ victory in its international race debut at the Macau Grand Prix in China. TORO Racing drivers Luo Kailuo and Adam Christodoulou took first and second positions, holding a commanding 12-second lead over the third-place finisher.' },
    { imgSrc: '/src/img/news/Nsection1/m500.webp', date: '05.13.2023', title: "Noble M500 review - is this the world's simplest supercar?", shortInfo: "That's right. Noble is back with a simple recipe designed to make you reconsider your need for thousands of horsepower, hybrid boost, many driving modes" },
    ];

  return (
    <div className='container-general'>

        <div className="container-all-cards">
        {cardData.map((card, index) => (
          <CardNew
            key={index}
            imgSrc={card.imgSrc}
            date={card.date}
            title={card.title}
            shortInfo={card.shortInfo}
          />
        ))}

        </div>  

    </div>
  )
}

export default Nsection2