import React from "react";

export default function Carosel() {
  return (
    <div id="carouselId" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselId" data-slide-to="0" className="active"></li>
        <li data-target="#carouselId" data-slide-to="1"></li>
        <li data-target="#carouselId" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            src="https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-bien-thien-nhien-dep-nhat-the-gioi_041753368.jpg"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-trong-tu-nhien_041753399.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-dep-nhat-the-gioi-ve-thien-nhien_041753462.jpg"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselId"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselId"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
