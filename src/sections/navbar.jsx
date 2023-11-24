const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container px-lg-5">
          <a className="navbar-brand" href="#">
            Minik Kelebek Anaokulu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
              <a className="nav-link active" aria-current="page" href="#">
                Kurumsal
              </a>
              <a className="nav-link" href="#">
                Eğitim Modeli
              </a>
              <a className="nav-link" href="#">
                Etkinlikler
              </a>
              <a className="nav-link" href="#">
                Okullarımız
              </a>
              <a className="nav-link" href="#">
                Medya
              </a>
              <a className="nav-link" href="#">
                Önkayıt
              </a>
              <a className="nav-link" href="#">
                Kadromuz
              </a>
              <a className="nav-link" href="#">
                İletişim
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
