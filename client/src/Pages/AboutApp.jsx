import React from "react";
import "./AboutApp.css";

import IntroImg from "../Images/appImg/aboutapp.svg";
import playstore from "../Images/playstore.svg";
import appstore from "../Images/appstore.svg";
import webportal from "../Images/webportal.svg";
import sec1 from "../Images/appImg/sec1.svg";
import sec2 from "../Images/appImg/sec2.svg";
import sec3 from "../Images/appImg/sec3.svg";
import sec4 from "../Images/appImg/sec4.svg";
import sec5 from "../Images/appImg/sec5.svg";
import sec6 from "../Images/appImg/sec6.svg";
import sec7 from "../Images/appImg/sec7.svg";
import Footer from "../Components/Footer";

const AboutApp = () => {
  return (
    <div className=" AboutApp">
      <header className="aboutapp-header">
        <div>
          <div>
            <h1>
              EMS ACADEMY COMPLETE STUDENT PERFORMANCE TRACKING AND LIVE LECTURE
              APPLICATION
            </h1>
            <div className="flex-display">
              <button
                onClick={() =>
                  window.location.assign(
                    "https://play.google.com/store/apps/details?id=co.classplus.ems"
                  )
                }
              >
                <img src={playstore} alt="" />
                <div>
                  <p>Download on the</p>
                  <span>Play Store</span>
                </div>
              </button>

              <button
                onClick={() =>
                  window.location.assign(
                    "https://apps.apple.com/in/app/myinstitute/id1472483563"
                  )
                }
              >
                <img src={appstore} alt="" />
                <div>
                  <p>Download on the</p>
                  <span>App Store</span>
                </div>
              </button>

              <button
                onClick={() =>
                  window.location.assign("https://web.classplusapp.com/login")
                }
              >
                <img src={webportal} alt="" />
                <div>
                  <p>For</p>
                  <span>Web Portal</span>
                </div>
              </button>
            </div>
          </div>

          <img src={IntroImg} alt="about-app" />
        </div>
      </header>

      <section>
        <div className="center-div flex-display">
          <div>
            <h2>Perks of joining EMS Academy</h2>
            <ul>
              <li>Learn at your own pace, from anywhere in the world.</li>
              <li>
                Access to live and recorded lectures, online study material, and
                discussion forums.
              </li>
              <li>Take computer-based tests to assess your progress.</li>
              <li>Get help from experienced teachers and peers.</li>
            </ul>
          </div>
          <img
            src={sec1}
            alt="Perks of joining EMS Academy"
            style={{ width: "80%" }}
          />
        </div>
      </section>

      <section style={{ background: "#D4E9F7" }}>
        <div className="center-div flex-display">
          <div>
            <h2>Batches</h2>
            <ul>
              <li>
                Choose from a variety of batches, each tailored to a different
                level of learning.
              </li>
              <li>
                Register for a batch that fits your schedule and learning needs.
              </li>
              <li>
                Work with a dedicated teacher and group of peers to achieve your
                academic goals.
              </li>
            </ul>
          </div>
          <img src={sec2} alt="iphone" style={{ marginTop: "1rem" }} />
        </div>
      </section>

      <section>
        <div className="center-div flex-display invert">
          <div>
            <h2>Assignments</h2>
            <ul>
              <li>
                Get access to a wide range of assignments, quizzes, and tests.
              </li>
              <li>
                Track your progress and receive feedback from your teacher.
              </li>
              <li>Use the assignments to prepare for exams and assessments.</li>
            </ul>
          </div>
          <img src={sec3} alt="extra" style={{ marginTop: "1rem" }} />
        </div>
      </section>

      <section style={{ background: "#D4E9F7" }}>
        <div className="center-div flex-display">
          <div>
            <h2>Announcements</h2>
            <ul>
              <li>
                Stay up-to-date on the latest news and events at the institute.
              </li>
              <li>
                Learn about new features and resources that are available.
              </li>
              <li>Get information about upcoming events and deadlines.</li>
            </ul>
          </div>
          <img src={sec4} alt="iphone" style={{ marginTop: "1rem" }} />
        </div>
      </section>

      <section>
        <div className="center-div flex-display invert">
          <div>
            <h2>Online Test</h2>
            <ul>
              <li>Take computer-based tests to assess your progress.</li>
              <li>Get feedback on your performance from your teacher.</li>
              <li>
                Use the tests to identify areas where you need to improve.
              </li>
            </ul>
          </div>
          <img src={sec5} alt="extra" style={{ marginTop: "1rem" }} />
        </div>
      </section>

      <section style={{ background: "#D4E9F7" }}>
        <div className="center-div flex-display">
          <div>
            <h2>Pre-recorded Videos</h2>
            <ul>
              <li>
                Access a library of pre-recorded lectures on a variety of
                topics.
              </li>
              <li>
                Watch the lectures at your own pace, from anywhere in the world.
              </li>
              <li>Pause, rewind, and fast-forward as needed.</li>
            </ul>
          </div>
          <img src={sec6} alt="extra" style={{ marginTop: "1rem" }} />
        </div>
      </section>

      <section>
        <div className="center-div flex-display invert">
          <div>
            <h2>Live Lectures</h2>
            <ul>
              <li>Attend live lectures with your teacher and classmates.</li>
              <li>Ask questions and get help in real time.</li>
              <li>
                Participate in discussions and collaborate with your peers.
              </li>
            </ul>
          </div>
          <img src={sec7} alt="iphone" style={{ marginTop: "1rem" }} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutApp;
