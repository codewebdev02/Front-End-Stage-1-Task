import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <div className="header">
        <button>
          <svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class="sc-gKsewC iPWGYb"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill="currentColor"></path></svg>
        </button>
      </div>
      <div className="profileDetails">
        <div className="profileImg">
          <img
            id="profile__img"
            src="https://ca.slack-edge.com/T042F7V19Q8-U048FNHNQB0-8efb94b0e78c-512"
            alt=""
          />
        </div>
        <h1 id="twitter">@eaxysunshine_te</h1>
        <h1 id="slack">@Eaxysunshine</h1>
      </div>
      <div className="link-section">
        <div className="tooltip">
          <a id="btn__zuri" href="https://training.zuri.team/">
            Zuri Team
          </a>
          <span className="tooltiptext">Meet the Zuri Family</span>
        </div>
        <div className="tooltip">
          <a id="books" href="https://books.zuri.team/">
            Zuri Books Store
          </a>
          <span className="tooltiptext">
            You can buy all kinds of tech related books right here on the Zuri
            store
          </span>
        </div>
        <div className="tooltip">
          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=Eaxysunshine"
          >
            Python Books Store
          </a>
          <span className="tooltiptext">
            Get in here to get your beginner friendly Python books
          </span>
        </div>
        <div className="tooltip">
          <a id="pitch" href="https://background.zuri.team/">
            Learn and earn
          </a>
          <span className="tooltiptext">
            Learn & Earn Remotely Like Never Before.
          </span>
        </div>
        <div className="tooltip">
          <a id="book__design" href="https://books.zuri.team/design-rules">
            UI/UX Design Books
          </a>
          <span className="tooltiptext">
            The HNG Design Rules Book gives you the tips & guidelines you need
            to create truly professional designs, by addressing errors that
            could you get you disqualified.
          </span>
        </div>
      </div>

      <footer>
        <img src="https://iili.io/bxixta.png" alt="" />
        <span>HNG Internship 9 Frontend Task </span>
        <img src="https://training.zuri.team/logo.svg" alt="" />
      </footer>
    </div>
  );
}

export default App;
