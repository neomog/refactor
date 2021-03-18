import React from 'react'

const Main = () => {
    return (
        <main>
        <div className="main-wrapper">
            <div className="profile-banner-large bg-img" data-bg="assets/images/banner/profile-banner.jpg">
            </div>
            <div className="profile-menu-area bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3">
                            <div className="profile-picture-box">
                                <figure className="profile-picture">
                                    <a href="profile.html">
                                        <img src="assets/images/profile/profile-1.jpg" alt="profile picture" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 offset-lg-1">
                            <div className="profile-menu-wrapper">
                                <div className="main-menu-inner header-top-navigation">
                                    <nav>
                                        <ul className="main-menu">
                                            <li className="active"><a href="#">timeline</a></li>
                                            <li><a href="about.html">about</a></li>
                                            <li><a href="photos.html">photos</a></li>
                                            <li><a href="friends.html">friends</a></li>
                                            <li><a href="about.html">more</a></li>
                                            {/* <li class="d-inline-block d-md-none"><a href="profile.html">edit
                                                    profile</a></li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 d-none d-md-block">
                            <div className="profile-edit-panel">
                                <button className="edit-btn">edit profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 order-2 order-lg-1">
                        <aside className="widget-area profile-sidebar">
                            {/* widget single item start */}
                            <div className="card widget-item">
                                <h4 className="widget-title">kate palson</h4>
                                <div className="widget-body">
                                    <div className="about-author">
                                        <p>I Don’t know how? But i believe that it is possible one day if i stay with my
                                            dream all time</p>
                                        <ul className="author-into-list">
                                            <li><a href="#"><i className="bi bi-office-bag" />Graphic Designer</a></li>
                                            <li><a href="#"><i className="bi bi-home" />Melbourne, Australia</a></li>
                                            <li><a href="#"><i className="bi bi-location-pointer" />Pulshar,
                                                    Melbourne</a></li>
                                            <li><a href="#"><i className="bi bi-heart-beat" />Travel, Swimming</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* widget single item end */}
                            {/* widget single item start */}
                            <div className="card widget-item">
                                <h4 className="widget-title">Sweets Memories</h4>
                                <div className="widget-body">
                                    <div className="sweet-galley img-gallery">
                                        <div className="row row-5">
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-1.jpg">
                                                            <img src="assets/images/gallery/gallery-1.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-2.jpg">
                                                            <img src="assets/images/gallery/gallery-2.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-3.jpg">
                                                            <img src="assets/images/gallery/gallery-3.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-4.jpg">
                                                            <img src="assets/images/gallery/gallery-4.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-5.jpg">
                                                            <img src="assets/images/gallery/gallery-5.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-6.jpg">
                                                            <img src="assets/images/gallery/gallery-6.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-7.jpg">
                                                            <img src="assets/images/gallery/gallery-7.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-8.jpg">
                                                            <img src="assets/images/gallery/gallery-8.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="gallery-tem">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/gallery/gallery-9.jpg">
                                                            <img src="assets/images/gallery/gallery-9.jpg"
                                                                alt="sweet memory" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* widget single item end */}
                            {/* widget single item start */}
                            <div className="card widget-item">
                                <h4 className="widget-title">page you may like</h4>
                                <div className="widget-body">
                                    <ul className="like-page-list-wrapper">
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-33.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Travel The World</a></h3>
                                                <p className="list-subtitle"><a href="#">adventure</a></p>
                                            </div>
                                            <button className="like-button active">
                                                <img className="heart" src="assets/images/icons/heart.png" alt="" />
                                                <img className="heart-color" src="assets/images/icons/heart-color.png"
                                                    alt="" />
                                            </button>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-30.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Foodcort Nirala</a></h3>
                                                <p className="list-subtitle"><a href="#">food</a></p>
                                            </div>
                                            <button className="like-button">
                                                <img className="heart" src="assets/images/icons/heart.png" alt="" />
                                                <img className="heart-color" src="assets/images/icons/heart-color.png"
                                                    alt="" />
                                            </button>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-5.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Rolin Theitar</a></h3>
                                                <p className="list-subtitle"><a href="#">drama</a></p>
                                            </div>
                                            <button className="like-button">
                                                <img className="heart" src="assets/images/icons/heart.png" alt="" />
                                                <img className="heart-color" src="assets/images/icons/heart-color.png"
                                                    alt="" />
                                            </button>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-29.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Active Mind</a></h3>
                                                <p className="list-subtitle"><a href="#">fitness</a></p>
                                            </div>
                                            <button className="like-button">
                                                <img className="heart" src="assets/images/icons/heart.png" alt="" />
                                                <img className="heart-color" src="assets/images/icons/heart-color.png"
                                                    alt="" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* widget single item end */}
                        </aside>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        {/* share box start */}
                        <div className="card card-small">
                            <div className="share-box-inner">
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-middle">
                                            <img src="assets/images/profile/profile-small-37.jpg"
                                                alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}
                                {/* share content box start */}
                                <div className="share-content-box w-100">
                                    <form className="share-text-box">
                                        <textarea name="share" className="share-text-field" aria-disabled="true"
                                            placeholder="Say Something" data-toggle="modal" data-target="#textbox"
                                            id="email" defaultValue={""} />
                                        <button className="btn-share" type="submit">share</button>
                                    </form>
                                </div>
                                {/* share content box end */}
                                {/* Modal start */}
                                <div className="modal fade" id="textbox" aria-labelledby="textbox">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Share Your Mood</h5>
                                                <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body custom-scroll">
                                                <textarea name="share" className="share-field-big custom-scroll"
                                                    placeholder="Say Something" defaultValue={""} />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="post-share-btn"
                                                    data-dismiss="modal">cancel</button>
                                                <button type="button" className="post-share-btn">post</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal end */}
                            </div>
                        </div>
                        {/* share box end */}
                        {/* post status start */}
                        <div className="card">
                            {/* post title start */}
                            <div className="post-title d-flex align-items-center">
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-middle">
                                            <img src="assets/images/profile/profile-small-5.jpg"
                                                alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}
                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Kate Palson</a></h6>
                                    <span className="post-time">35 min ago</span>
                                </div>
                                <div className="post-settings-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <div className="post-settings arrow-shape">
                                        <ul>
                                            <li><button>copy link to adda</button></li>
                                            <li><button>edit post</button></li>
                                            <li><button>embed adda</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* post title start */}
                            <div className="post-content">
                                <p className="post-desc">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy.
                                </p>
                                <div className="post-thumb-gallery img-gallery">
                                    <div className="row no-gutters">
                                        <div className="col-8">
                                            <figure className="post-thumb">
                                                <a className="gallery-selector"
                                                    href="assets/images/post/post-large-2.jpg">
                                                    <img src="assets/images/post/post-2.jpg" alt="post image" />
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="col-12">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/post/post-large-3.jpg">
                                                            <img src="assets/images/post/post-3.jpg" alt="post image" />
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="col-12">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/post/post-large-4.jpg">
                                                            <img src="assets/images/post/post-4.jpg" alt="post image" />
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="col-12">
                                                    <figure className="post-thumb">
                                                        <a className="gallery-selector"
                                                            href="assets/images/post/post-large-5.jpg">
                                                            <img src="assets/images/post/post-5.jpg" alt="post image" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-meta">
                                    <button className="post-meta-like">
                                        <i className="bi bi-heart-beat" />
                                        <span>You and 207 people like this</span>
                                        <strong>207</strong>
                                    </button>
                                    <ul className="comment-share-meta">
                                        <li>
                                            <button className="post-comment">
                                                <i className="bi bi-chat-bubble" />
                                                <span>41</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="post-share">
                                                <i className="bi bi-share" />
                                                <span>07</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* post status end */}
                        {/* post status start */}
                        <div className="card">
                            {/* post title start */}
                            <div className="post-title d-flex align-items-center">
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-middle">
                                            <img src="assets/images/profile/profile-small-3.jpg"
                                                alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}
                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                    <span className="post-time">15 min ago</span>
                                </div>
                                <div className="post-settings-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <div className="post-settings arrow-shape">
                                        <ul>
                                            <li><button>copy link to adda</button></li>
                                            <li><button>edit post</button></li>
                                            <li><button>embed adda</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* post title start */}
                            <div className="post-content">
                                <p className="post-desc pb-0">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for
                                </p>
                                <div className="post-meta">
                                    <button className="post-meta-like">
                                        <i className="bi bi-heart-beat" />
                                        <span>You and 201 people like this</span>
                                        <strong>201</strong>
                                    </button>
                                    <ul className="comment-share-meta">
                                        <li>
                                            <button className="post-comment">
                                                <i className="bi bi-chat-bubble" />
                                                <span>41</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="post-share">
                                                <i className="bi bi-share" />
                                                <span>07</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* post status end */}
                        {/* post status start */}
                        <div className="card">
                            {/* post title start */}
                            <div className="post-title d-flex align-items-center">
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-middle">
                                            <img src="assets/images/profile/profile-small-4.jpg"
                                                alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}
                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">william henry</a></h6>
                                    <span className="post-time">35 min ago</span>
                                </div>
                                <div className="post-settings-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <div className="post-settings arrow-shape">
                                        <ul>
                                            <li><button>copy link to adda</button></li>
                                            <li><button>edit post</button></li>
                                            <li><button>embed adda</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* post title start */}
                            <div className="post-content">
                                <p className="post-desc">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy.
                                </p>
                                <div className="plyr__video-embed plyr-video">
                                    <iframe src="https://www.youtube.com/embed/WeA7edXsU40"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen />
                                </div>
                                <div className="post-meta">
                                    <button className="post-meta-like">
                                        <i className="bi bi-heart-beat" />
                                        <span>You and 201 people like this</span>
                                        <strong>201</strong>
                                    </button>
                                    <ul className="comment-share-meta">
                                        <li>
                                            <button className="post-comment">
                                                <i className="bi bi-chat-bubble" />
                                                <span>41</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="post-share">
                                                <i className="bi bi-share" />
                                                <span>07</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* post status end */}
                        {/* post status start */}
                        <div className="card">
                            {/* post title start */}
                            <div className="post-title d-flex align-items-center">
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-middle">
                                            <img src="assets/images/profile/profile-small-8.jpg"
                                                alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}
                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                    <span className="post-time">50 min ago</span>
                                </div>
                                <div className="post-settings-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <div className="post-settings arrow-shape">
                                        <ul>
                                            <li><button>copy link to adda</button></li>
                                            <li><button>edit post</button></li>
                                            <li><button>embed adda</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* post title start */}
                            <div className="post-content">
                                <p className="post-desc">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy.
                                </p>
                                <div className="post-thumb-gallery img-gallery">
                                    <div className="row no-gutters">
                                        <div className="col-6">
                                            <figure className="post-thumb">
                                                <a className="gallery-selector"
                                                    href="assets/images/post/post-large-6.jpg">
                                                    <img src="assets/images/post/post-6.jpg" alt="post image" />
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="col-6">
                                            <figure className="post-thumb">
                                                <a className="gallery-selector"
                                                    href="assets/images/post/post-large-7.jpg">
                                                    <img src="assets/images/post/post-7.jpg" alt="post image" />
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-meta">
                                    <button className="post-meta-like">
                                        <i className="bi bi-heart-beat" />
                                        <span>You and 230 people like this</span>
                                        <strong>230</strong>
                                    </button>
                                    <ul className="comment-share-meta">
                                        <li>
                                            <button className="post-comment">
                                                <i className="bi bi-chat-bubble" />
                                                <span>65</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="post-share">
                                                <i className="bi bi-share" />
                                                <span>04</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* post status end */}
                        {/* post status start */}
                        <div className="card">
                            {/* post title start */}
                            <div className="post-title d-flex align-items-center">
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-middle">
                                            <img src="assets/images/profile/profile-small-6.jpg"
                                                alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}
                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Robart Faul</a></h6>
                                    <span className="post-time">40 min ago</span>
                                </div>
                                <div className="post-settings-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <div className="post-settings arrow-shape">
                                        <ul>
                                            <li><button>copy link to adda</button></li>
                                            <li><button>edit post</button></li>
                                            <li><button>embed adda</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* post title start */}
                            <div className="post-content">
                                <p className="post-desc pb-0">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for Many desktop publishing packages and web page
                                    editors now use Lorem Ipsum as their default model text, and a search for Many
                                    desktop publishing duskam azer.
                                </p>
                                <div className="post-meta">
                                    <button className="post-meta-like">
                                        <i className="bi bi-heart-beat" />
                                        <span>You and 250 people like this</span>
                                        <strong>250</strong>
                                    </button>
                                    <ul className="comment-share-meta">
                                        <li>
                                            <button className="post-comment">
                                                <i className="bi bi-chat-bubble" />
                                                <span>80</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="post-share">
                                                <i className="bi bi-share" />
                                                <span>10</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* post status end */}
                        {/* post status start */}
                        <div className="card">
                            {/* post title start */}
                            <div className="post-title d-flex align-items-center">
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-middle">
                                            <img src="assets/images/profile/profile-small-2.jpg"
                                                alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}
                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                    <span className="post-time">20 min ago</span>
                                </div>
                                <div className="post-settings-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <div className="post-settings arrow-shape">
                                        <ul>
                                            <li><button>copy link to adda</button></li>
                                            <li><button>edit post</button></li>
                                            <li><button>embed adda</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* post title start */}
                            <div className="post-content">
                                <p className="post-desc">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still
                                    in their infancy.
                                </p>
                                <div className="post-thumb-gallery">
                                    <figure className="post-thumb img-popup">
                                        <a href="assets/images/post/post-large-1.jpg">
                                            <img src="assets/images/post/post-1.jpg" alt="post image" />
                                        </a>
                                    </figure>
                                </div>
                                <div className="post-meta">
                                    <button className="post-meta-like">
                                        <i className="bi bi-heart-beat" />
                                        <span>You and 201 people like this</span>
                                        <strong>201</strong>
                                    </button>
                                    <ul className="comment-share-meta">
                                        <li>
                                            <button className="post-comment">
                                                <i className="bi bi-chat-bubble" />
                                                <span>41</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="post-share">
                                                <i className="bi bi-share" />
                                                <span>07</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* post status end */}
                        {/* post status start */}
                        <div className="card">
                            {/* post title start */}
                            <div className="post-title d-flex align-items-center">
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-middle">
                                            <img src="assets/images/profile/profile-small-3.jpg"
                                                alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}
                                <div className="posted-author">
                                    <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                    <span className="post-time">15 min ago</span>
                                </div>
                                <div className="post-settings-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <div className="post-settings arrow-shape">
                                        <ul>
                                            <li><button>copy link to adda</button></li>
                                            <li><button>edit post</button></li>
                                            <li><button>embed adda</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* post title start */}
                            <div className="post-content">
                                <p className="post-desc pb-0">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text, and a search for
                                </p>
                                <div className="post-meta">
                                    <button className="post-meta-like">
                                        <i className="bi bi-heart-beat" />
                                        <span>You and 204 people like this</span>
                                        <strong>204</strong>
                                    </button>
                                    <ul className="comment-share-meta">
                                        <li>
                                            <button className="post-comment">
                                                <i className="bi bi-chat-bubble" />
                                                <span>41</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="post-share">
                                                <i className="bi bi-share" />
                                                <span>07</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* post status end */}
                    </div>
                    <div className="col-lg-3 order-3">
                        <aside className="widget-area">
                            {/* widget single item start */}
                            <div className="card widget-item">
                                <h4 className="widget-title">Recent Notifications</h4>
                                <div className="widget-body">
                                    <ul className="like-page-list-wrapper">
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-9.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Any one can join with us if you
                                                        want</a></h3>
                                                <p className="list-subtitle">5 min ago</p>
                                            </div>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-35.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Any one can join with us if you
                                                        want</a></h3>
                                                <p className="list-subtitle">10 min ago</p>
                                            </div>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-15.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Any one can join with us if you
                                                        want</a></h3>
                                                <p className="list-subtitle">18 min ago</p>
                                            </div>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-6.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Any one can join with us if you
                                                        want</a></h3>
                                                <p className="list-subtitle">25 min ago</p>
                                            </div>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-34.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Any one can join with us if you
                                                        want</a></h3>
                                                <p className="list-subtitle">39 min ago</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* widget single item end */}
                            {/* widget single item start */}
                            <div className="card widget-item">
                                <h4 className="widget-title">Advertizement</h4>
                                <div className="widget-body">
                                    <div className="add-thumb">
                                        <a href="#">
                                            <img src="assets/images/banner/advertise.jpg" alt="advertisement" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* widget single item end */}
                            {/* widget single item start */}
                            <div className="card widget-item">
                                <h4 className="widget-title">Friends Zone</h4>
                                <div className="widget-body">
                                    <ul className="like-page-list-wrapper">
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-10.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">arfim bolt</a></h3>
                                                <p className="list-subtitle"><a href="#">10 mutual</a></p>
                                            </div>
                                            <button className="like-button">
                                                <img className="heart" src="assets/images/icons/heart.png" alt="" />
                                                <img className="heart-color" src="assets/images/icons/heart-color.png"
                                                    alt="" />
                                            </button>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-2.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">marry wither</a></h3>
                                                <p className="list-subtitle"><a href="#">02 mutual</a></p>
                                            </div>
                                            <button className="like-button active">
                                                <img className="heart" src="assets/images/icons/heart.png" alt="" />
                                                <img className="heart-color" src="assets/images/icons/heart-color.png"
                                                    alt="" />
                                            </button>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-5.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Rolin Theitar</a></h3>
                                                <p className="list-subtitle"><a href="#">drama</a></p>
                                            </div>
                                            <button className="like-button">
                                                <img className="heart" src="assets/images/icons/heart.png" alt="" />
                                                <img className="heart-color" src="assets/images/icons/heart-color.png"
                                                    alt="" />
                                            </button>
                                        </li>
                                        <li className="unorder-list">
                                            {/* profile picture end */}
                                            <div className="profile-thumb">
                                                <a href="#">
                                                    <figure className="profile-thumb-small">
                                                        <img src="assets/images/profile/profile-small-14.jpg"
                                                            alt="profile picture" />
                                                    </figure>
                                                </a>
                                            </div>
                                            {/* profile picture end */}
                                            <div className="unorder-list-info">
                                                <h3 className="list-title"><a href="#">Active Mind</a></h3>
                                                <p className="list-subtitle"><a href="#">fitness</a></p>
                                            </div>
                                            <button className="like-button">
                                                <img className="heart" src="assets/images/icons/heart.png" alt="" />
                                                <img className="heart-color" src="assets/images/icons/heart-color.png"
                                                    alt="" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* widget single item end */}
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Main
