import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

const App = () => {
  const linkRef = useRef(null);

  const goto = (param) => {
    window.scrollTo({
      top: param.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          onClick={() => {
            goto(linkRef.current);
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          voluptate in laborum deserunt laborum labore eu sunt eiusmod ex veniam
          esse aute aliqua ipsum dolore labore nulla. ullamco minim dolor enim
          pariatur mollit non ad eiusmod incididunt laborum deserunt consequat
          cupidatat deserunt est incididunt qui. ut incididunt consectetur
          officia non Duis non anim sunt reprehenderit sunt ex ut laboris sunt
          officia exercitation ea. mollit amet eu sint veniam eu id aute id quis
          fugiat lorem officia nulla aliqua sunt. sed consequat velit culpa sunt
          aute pariatur in fugiat consectetur exercitation dolor in fugiat est
          exercitation nisi eiusmod sint. minim in proident irure qui cillum
          aliqua ex exercitation id minim veniam culpa dolor anim consectetur
          incididunt non. cupidatat cillum in sint esse cupidatat sint nostrud
          consectetur sed veniam esse cillum et lorem qui. tempor Excepteur et
          do irure anim deserunt minim do ipsum Duis amet incididunt sint id sed
          amet ad. elit velit mollit ex ea pariatur lorem est sunt do minim
          tempor exercitation est ex deserunt mollit. amet sint amet incididunt
          ea nisi non mollit elit velit mollit tempor ipsum ipsum do ad. ullamco
          ullamco dolore Duis laborum culpa non cupidatat esse mollit occaecat
          anim mollit ut quis mollit consequat enim proident. nulla laborum
          pariatur est reprehenderit laborum occaecat laboris ex consequat dolor
          quis ipsum labore occaecat exercitation anim. do Excepteur dolor ea
          magna Duis est commodo lorem ex quis anim esse fugiat eu non irure
          eiusmod. lorem nisi cupidatat id aliquip aliqua et consequat lorem
          laboris dolor sunt sed proident id proident. dolore eiusmod adipiscing
          ad ad sint nulla cillum proident laboris id reprehenderit consequat
          aliqua nostrud non id. cupidatat Duis aliquip sit adipiscing aliquip
          aliquip anim dolor amet qui exercitation quis deserunt dolore lorem
          culpa dolore sint. nostrud et nostrud veniam consectetur ullamco
          Excepteur id sint ipsum nulla enim labore aliquip eu nisi. est do et
          reprehenderit lorem fugiat eiusmod Duis ad nisi lorem quis id
          consectetur labore nulla et incididunt. laborum sunt voluptate
          proident labore laborum id enim est tempor nisi pariatur consequat in
          aliquip veniam et tempor. nostrud consequat voluptate ut id sit
          adipiscing Duis laboris exercitation lorem reprehenderit eu sed
          deserunt voluptate. aute cillum id fugiat consectetur anim incididunt
          eu sunt exercitation sit ullamco do elit esse Duis labore. culpa qui
          id ea dolore culpa aute commodo ipsum velit irure ex Excepteur
          deserunt dolore quis laboris ullamco. sed quis consequat ad laboris
          nisi aliquip amet laborum veniam laborum amet tempor laboris pariatur
          et labore. esse est anim adipiscing ut lorem officia Duis elit laboris
          voluptate culpa reprehenderit ipsum esse ullamco anim. do exercitation
          sint aliquip culpa irure laborum ex irure adipiscing cupidatat lorem
          ut labore dolore commodo aute. amet mollit dolor dolor ad nisi nulla
          mollit nulla Excepteur irure sed tempor culpa non occaecat sunt. non
          pariatur enim qui occaecat et officia exercitation labore dolore
          consequat Duis ullamco Excepteur velit amet ullamco elit deserunt.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          ref={linkRef}
        >
          Learn React
        </a>
        <p>
          voluptate in laborum deserunt laborum labore eu sunt eiusmod ex veniam
          esse aute aliqua ipsum dolore labore nulla. ullamco minim dolor enim
          pariatur mollit non ad eiusmod incididunt laborum deserunt consequat
          cupidatat deserunt est incididunt qui. ut incididunt consectetur
          officia non Duis non anim sunt reprehenderit sunt ex ut laboris sunt
          officia exercitation ea. mollit amet eu sint veniam eu id aute id quis
          fugiat lorem officia nulla aliqua sunt. sed consequat velit culpa sunt
          aute pariatur in fugiat consectetur exercitation dolor in fugiat est
          exercitation nisi eiusmod sint. minim in proident irure qui cillum
          aliqua ex exercitation id minim veniam culpa dolor anim consectetur
          incididunt non. cupidatat cillum in sint esse cupidatat sint nostrud
          consectetur sed veniam esse cillum et lorem qui. tempor Excepteur et
          do irure anim deserunt minim do ipsum Duis amet incididunt sint id sed
          amet ad. elit velit mollit ex ea pariatur lorem est sunt do minim
          tempor exercitation est ex deserunt mollit. amet sint amet incididunt
          ea nisi non mollit elit velit mollit tempor ipsum ipsum do ad. ullamco
          ullamco dolore Duis laborum culpa non cupidatat esse mollit occaecat
          anim mollit ut quis mollit consequat enim proident. nulla laborum
          pariatur est reprehenderit laborum occaecat laboris ex consequat dolor
          quis ipsum labore occaecat exercitation anim. do Excepteur dolor ea
          magna Duis est commodo lorem ex quis anim esse fugiat eu non irure
          eiusmod. lorem nisi cupidatat id aliquip aliqua et consequat lorem
          laboris dolor sunt sed proident id proident. dolore eiusmod adipiscing
          ad ad sint nulla cillum proident laboris id reprehenderit consequat
          aliqua nostrud non id. cupidatat Duis aliquip sit adipiscing aliquip
          aliquip anim dolor amet qui exercitation quis deserunt dolore lorem
          culpa dolore sint. nostrud et nostrud veniam consectetur ullamco
          Excepteur id sint ipsum nulla enim labore aliquip eu nisi. est do et
          reprehenderit lorem fugiat eiusmod Duis ad nisi lorem quis id
          consectetur labore nulla et incididunt. laborum sunt voluptate
          proident labore laborum id enim est tempor nisi pariatur consequat in
          aliquip veniam et tempor. nostrud consequat voluptate ut id sit
          adipiscing Duis laboris exercitation lorem reprehenderit eu sed
          deserunt voluptate. aute cillum id fugiat consectetur anim incididunt
          eu sunt exercitation sit ullamco do elit esse Duis labore. culpa qui
          id ea dolore culpa aute commodo ipsum velit irure ex Excepteur
          deserunt dolore quis laboris ullamco. sed quis consequat ad laboris
          nisi aliquip amet laborum veniam laborum amet tempor laboris pariatur
          et labore. esse est anim adipiscing ut lorem officia Duis elit laboris
          voluptate culpa reprehenderit ipsum esse ullamco anim. do exercitation
          sint aliquip culpa irure laborum ex irure adipiscing cupidatat lorem
          ut labore dolore commodo aute. amet mollit dolor dolor ad nisi nulla
          mollit nulla Excepteur irure sed tempor culpa non occaecat sunt. non
          pariatur enim qui occaecat et officia exercitation labore dolore
          consequat Duis ullamco Excepteur velit amet ullamco elit deserunt.
        </p>
      </header>
    </div>
  );
};

export default App;
