import './styles/App.scss'

function App() {
  return (
    <div className="page">
      <header>
        <h1 className="header_title">Owen Wilson's "WOW"</h1>
        <p className="header_border"></p>
      </header>
      <main>
        <form>
          <label  className="form_movie" htmlFor="movie">Movie</label>
          <input
            className="form_search"
            autoComplete="off"
            type="search"
            name="movie"/>
          <label  className="form_age" htmlFor="year">Year</label>
          <select className="form_search" id="yearFilter" placeholder="All">
            <option value="">All</option>
            <option value="2020">2015</option>
            <option value="2021">2016</option>
            <option value="2022">2017</option>
            <option value="2023">2018</option>
            <option value="2024">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
            
        </form>
        <section>
        <ul className="cards">
          <li className="cards_movie">
            <img className="cards_img" src="https://images.ctfassets.net/bs8ntwkklfua/43fOBsgY8iOJL0dijvFnfl/ea361efc5131a859c173ab5dd3fdfe1e/Cars_3_Poster.jpg"></img>
            <p className="cards_movie">"Cars 3"</p>
            <p className="cards_year">2017</p>
            <p className="cards_full_line">"Oh, hey, Mr. Sterling. Wow."</p>
          </li>
        </ul>
        </section>
        </main>
    
    </div>
  )
}

export default App
