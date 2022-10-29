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
          <img id="profile__img" src="https://d1fdloi71mui9q.cloudfront.net/wrHdK1pfQGys8605zDrM_v2jhjgLLe2EYZv37" alt="" />
        </div>
        <h1 id="twitter">@eaxysunshine_te</h1>
        <h1 id="slack">@Eaxysunshine</h1>
      </div>
      <div className="link-section">
        <a id="btn__zuri" href="https://training.zuri.team/">Zuri Team </a>
        <a id="books" href="https://books.zuri.team/">Zuri Books </a>
        <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=Eaxysunshine">Python Books </a>
        <a id="pitch" href="https://background.zuri.team/">Background Check for Coders</a>
        <a id="book__design" href="https://books.zuri.team/design-rules">Design Books</a>
      </div>
    </div>
  );
}

export default App;
