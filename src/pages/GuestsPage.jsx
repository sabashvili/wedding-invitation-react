import React, { useEffect, useState } from "react";
import heroPic from "../images/img_bg_2.jpg";
import footerPic from "../images/footer.jpeg";
import bridePic from "../images/bride.jpg";
import groomPic from "../images/groom.jpg";
import circlePic from "../images/img_bg_3.jpg";
import gallery1 from "../images/gallery-1.jpg";
import gallery2 from "../images/gallery-2.jpg";
import gallery3 from "../images/gallery-3.jpg";
import gallery4 from "../images/gallery-4.jpg";
import gallery5 from "../images/gallery-5.jpg";
import gallery6 from "../images/gallery-6.jpg";
import heartPic from "../images/gallery-8.jpg";
import heartIcon from "../images/heart-outline.svg";
import tamoProfilePic from "../images/tamo-profile-picture.jpg";
import ditoProfilePic from "../images/profile-photo-dito.png";
import shotaProfilePic from "../images/profile-photo-shota.jpeg";
import clockIcon from "../images/time-outline.svg";
import calendarIcon from "../images/calendar-outline.svg";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

function GuestsPage() {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("10/12/2024 5:00:00 PM").getTime();

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const timeRemaining = countdownDate - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimer({ days, hours, minutes, seconds });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadScript("js/jquery.min.js")
      .then(() => loadScript("js/jquery.easing.1.3.js"))
      .then(() => loadScript("js/bootstrap.min.js"))
      .then(() => loadScript("js/jquery.waypoints.min.js"))
      .then(() => loadScript("js/owl.carousel.min.js"))
      .then(() => loadScript("js/jquery.countTo.js"))
      .then(() => loadScript("js/jquery.stellar.min.js"))
      .then(() => loadScript("js/jquery.magnific-popup.min.js"))
      .then(() => loadScript("js/magnific-popup-options.js"))
      .then(() => loadScript("js/simplyCountdown.js"))
      .then(() => loadScript("js/main.js"))
      .catch((err) => console.error("Failed to load script", err));
  }, []);
  return (
    <div id="page">
      <div className="fh5co-loader"></div>

      <nav
        className="fh5co-nav"
        role="navigation"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <div id="fh5co-logo">
                <a>
                  Wedding<strong>.</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header
        id="fh5co-header"
        className="fh5co-cover"
        role="banner"
        style={{ backgroundImage: `url(${heroPic})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t">
                <div
                  className="display-tc animate-box"
                  data-animate-effect="fadeIn"
                >
                  <h1>Sophio &amp; Tornike</h1>
                  <h2>We Are Getting Married</h2>
                  <div className="simply-countdown simply-countdown-one">
                    <div className="simply-section simply-days-section">
                      <div>
                        <span className="simply-amount">{timer.days}</span>
                        <span className="simply-word">day</span>
                      </div>
                    </div>
                    <div className="simply-section simply-hours-section">
                      <div>
                        <span className="simply-amount">{timer.hours}</span>
                        <span className="simply-word">hour</span>
                      </div>
                    </div>
                    <div className="simply-section simply-minutes-section">
                      <div>
                        <span className="simply-amount">{timer.minutes}</span>
                        <span className="simply-word">minute</span>
                      </div>
                    </div>
                    <div className="simply-section simply-seconds-section">
                      <div>
                        <span className="simply-amount">{timer.seconds}</span>
                        <span className="simply-word">second</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="fh5co-couple">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2>მოგესალმებით!</h2>
              <p>გეპატიჟებით ჩვენი სიყვარულისა და ქორწინების აღსაღნიშნავად</p>
              <h3>12 ოქტომბერი 2024, Gori Inn "ცირკი"</h3>
            </div>
          </div>
          <div className="couple-wrap animate-box">
            <div className="couple-half">
              <div className="groom">
                <img
                  src={groomPic}
                  alt="groom"
                  className="img-responsive"
                />
              </div>
              <div className="desc-groom">
                <h3 className="couple-name">თორნიკე კარიჭაშვილი</h3>
              </div>
            </div>
            <p className="heart text-center">
              <img
                className="heart-icon"
                src={heartIcon}
              />
            </p>
            <div className="couple-half">
              <div className="bride">
                <img
                  src={bridePic}
                  alt="bride"
                  className="img-responsive"
                />
              </div>
              <div className="desc-bride">
                <h3 className="couple-name">სოფიო დავითიძე</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="fh5co-event"
        className="fh5co-bg"
        style={{ backgroundImage: `url(${circlePic})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <span>Our Special Events</span>
              <h2>Wedding Events</h2>
            </div>
          </div>
          <div className="row">
            <div className="display-t">
              <div className="display-tc">
                <div className="col-md-10 col-md-offset-1">
                  <div className="col-md-6 col-sm-6 text-center">
                    <div className="event-wrap animate-box">
                      <h3>მთავარი ღონისძიება</h3>
                      <div className="event-col">
                        <img
                          src={clockIcon}
                          alt="clock"
                          style={{ width: "25px" }}
                        />
                        <span>17:00 სთ.</span>
                        <span>24:00 სთ.</span>
                      </div>
                      <div className="event-col">
                        <img
                          src={calendarIcon}
                          alt="clock"
                          style={{ width: "25px" }}
                        />
                        <span>შაბათი</span>
                        <span>12 ოქტომბერი, 2024</span>
                      </div>
                      <p>
                        გაგვიხარდება თუ ჩვენთვის ყველაზე მნიშვნელოვან დღეს ჩვენს გვერდით გაატარებთ! ქორწინების მთავარი ცერემონია რესტორან ცირკში
                        საღამოს 5 საათიდან დაიწყება, სადაც ერთად ვიზეიმებთ ჩვენს სიყვარულს და ბედნიერებას. დღის ბოლოს კი, 21:30 საათზე, დაგეგმილია
                        ტორტის გაჭრის ცერემონია, რაც კიდევ უფრო დაატკბობს ამ განსაკუთრებულ დღეს. გვსურს, რომ ეს სიყვარულით სავსე დღე თქვენთან ერთად
                        გავატაროთ!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="fh5co-gallery"
        className="fh5co-section-gray"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <span>Our Memories</span>
              <h2>ჩვენი ბედნიერი წუთები</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12">
              <ul id="fh5co-gallery-list">
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{ backgroundImage: `url(${gallery1})` }}
                ></li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{ backgroundImage: `url(${gallery2})` }}
                ></li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{ backgroundImage: `url(${gallery3})` }}
                ></li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{ backgroundImage: `url(${gallery4})` }}
                ></li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{ backgroundImage: `url(${gallery5})` }}
                ></li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{ backgroundImage: `url(${gallery6})` }}
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        id="fh5co-counter"
        className="fh5co-bg fh5co-counter"
        style={{ backgroundImage: `url(${heartPic})` }}
      >
        <div className="overlay"></div>
      </div>

      <div id="fh5co-testimonial">
        <div className="container">
          <div className="row">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <span>Best Wishes</span>
                <h2>Friends Wishes</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <div className="wrap-testimony">
                  <div className="owl-carousel-fullwidth">
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <figure>
                          <img
                            className="friends-pic"
                            src={tamoProfilePic}
                            alt="user"
                          />
                        </figure>
                        <span>
                          თამუნა უროტაძე
                          <span className="twitter">მეჯვარე</span>
                        </span>
                        <blockquote>
                          <p>
                            "სოფი და თორნიკე დღეს თქვენთვის ყველაზე მნიშვნელოვანი დღეა და მიხარია, რომ თქვენს გვერდით დგომის ბედნიწრება მხვდა წილად.
                            გისურვებთ უსასრულო ბედნიერებას და ბევრ ბედნიერ წუთს ჩვენ 3თან ერთად!! "
                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <figure>
                          <img
                            className="friends-pic"
                            src={ditoProfilePic}
                            alt="user"
                          />
                        </figure>
                        <span>
                          დემეტრე ტეტუნაშვილი
                          <span className="twitter">მეჯვარე</span>
                        </span>
                        <blockquote>
                          <p>
                            "სოფი და თოკო, გილოცავთ ამ განსაკუთრებულ დღეს! გისურვებთ, რომ მუდამ სითბოთი და სიყვარულით ყოფილიყავით სავსე. ბედნიერება და
                            სიყვარული ყოფილიყოს თქვენი თანამგზავრი მუდამ."
                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-slide active text-center">
                        <figure>
                          <img
                            className="friends-pic"
                            src={shotaProfilePic}
                            alt="user"
                          />
                        </figure>
                        <span>
                          შოთა საბაშვილი
                          <span className="twitter">უბრალოდ მეგობარი</span>
                        </span>
                        <blockquote>
                          <p>
                            "სოფი და თოკო მიხარია, რომ თქვენი მოსაწვევის საიტის დამზადება მე მხვდა წილად. მინდა ძალიან ბედნიერები იყოთ, ჩემთან ერთად."
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="fh5co-started"
        className="fh5co-bg"
        style={{ backgroundImage: `url(${footerPic})` }}
      >
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default GuestsPage;
