function App() {
  return (
    <div className="App clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center headerLeft">
          <img
            width={40}
            height={40}
            src="/img/logo.png"
          />
          <div>
            <h3>SNEAKERS SHOP</h3>
            <p className="opacity-5">Best sneakers shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img
              width={18}
              height={18}
              src="/img/Card.svg"
            />
            <span>1205$</span>
          </li>
          <li>
            <img
              width={18}
              height={18}
              src="/img/Profile.svg"
            />
          </li>
        </ul>
      </header>

      <div className="content p-40 ">
        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers1.jpg"
              alt="Sneakers1"
            />
            <h5>Men's sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>12 999$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/Plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers2.jpg"
              alt="Sneakers2"
            />
            <h5>Men's sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>12 999$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/Plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers3.jpg"
              alt="Sneaker3"
            />
            <h5>Men's sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>12 999$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/Plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers4.jpg"
              alt="Sneakers4"
            />
            <h5>Men's sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>12 999$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/Plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
