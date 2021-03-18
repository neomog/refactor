import React from 'react'

const Main = () => {
    return (
        <main>
          <div className="main-wrapper">
            {/* profile banner area start */}
            <div
              className="profile-banner-large bg-img"
              data-bg="assets/images/banner/profile-banner.jpg"
            ></div>
            {/* profile banner area end */}
            {/* profile menu area start */}
            <div className="profile-menu-area secondary-navigation-style bg-white">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-3">
                    <div className="profile-picture-box">
                      <figure className="profile-picture">
                        <a href="#">
                          <img
                            src="assets/images/profile/profile-1.jpg"
                            alt="profile picture"
                          />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 offset-lg-1">
                    <div className="profile-menu-wrapper">
                      <div className="main-menu-inner header-top-navigation">
                        <nav>
                          <ul className="main-menu">
                            <li className="active">
                              <a href="#">timeline</a>
                            </li>
                            <li>
                              <a href="about.html">about</a>
                            </li>
                            <li>
                              <a href="photos.html">photos</a>
                            </li>
                            <li>
                              <a href="friends.html">friends</a>
                            </li>
                            <li>
                              <a href="about.html">more</a>
                            </li>
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
            {/* profile menu area end */}
            {/* sendary menu start */}
            <div className="menu-secondary">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="secondary-menu-wrapper secondary-menu-2 bg-white">
                      <div className="page-title-inner">
                        <h4 className="page-title">friends (1250)</h4>
                      </div>
                      <div className="filter-menu">
                        <button className="active" data-filter="*">
                          all
                        </button>
                        <button data-filter=".recently">recently</button>
                        <button data-filter=".relative">relative</button>
                        <button data-filter=".collage">collage</button>
                        <button data-filter=".request">request</button>
                      </div>
                      <div className="post-settings-bar">
                        <span />
                        <span />
                        <span />
                        <div className="post-settings arrow-shape">
                          <ul>
                            <li>
                              <button>edit profile</button>
                            </li>
                            <li>
                              <button>activity log</button>
                            </li>
                            <li>
                              <button>embed adda</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* sendary menu end */}
            {/* photo section start */}
            <div className="friends-section mt-20">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="content-box friends-zone">
                      <div className="row mt--20 friends-list">
                        <div className="col-lg-3 col-sm-6 recently request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-1.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Kate Midiltoin</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-4.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Jon Wileyam</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently collage request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-7.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william henry</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-22.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Kate Midiltoin</a>
                              </h6>
                              <button className="add-frnd">
                                friend request sent
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-10.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Omio Morganik</a>
                              </h6>
                              <button className="add-frnd">
                                friend request sent
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-13.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william henry</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 collage request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-18.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">erik jonson</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-25.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">peter looks</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-16.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">jhon doe</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-12.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william henry</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-9.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william henry</a>
                              </h6>
                              <button className="add-frnd">
                                friend request sent
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-17.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">musa kollins</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-11.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">petter jhon</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 request collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-20.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">henry william</a>
                              </h6>
                              <button className="add-frnd">
                                friend request sent
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently relative">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-32.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">cristian paul</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative collage request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-31.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">willson merry</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 request recently">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-29.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">jhonsina boss</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-26.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william jowel</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-19.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">ashim pual</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-23.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Barak Obama</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-1.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Kate Midiltoin</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-4.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Jon Wileyam</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently collage request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-7.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william henry</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-22.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Kate Midiltoin</a>
                              </h6>
                              <button className="add-frnd">
                                friend request sent
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-10.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Omio Morganik</a>
                              </h6>
                              <button className="add-frnd">
                                friend request sent
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-13.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william henry</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 collage request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-18.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">erik jonson</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-25.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">peter looks</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-16.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">jhon doe</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-12.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william henry</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-9.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william henry</a>
                              </h6>
                              <button className="add-frnd">
                                friend request sent
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-17.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">musa kollins</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-11.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">petter jhon</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 request collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-20.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">henry william</a>
                              </h6>
                              <button className="add-frnd">
                                friend request sent
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently relative">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-32.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">cristian paul</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative collage request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-31.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">willson merry</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 request recently">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-29.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">jhonsina boss</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-26.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">william jowel</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 relative collage">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-19.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">ashim pual</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 recently request">
                          <div className="friend-list-view">
                            {/* profile picture end */}
                            <div className="profile-thumb">
                              <a href="#">
                                <figure className="profile-thumb-middle">
                                  <img
                                    src="assets/images/profile/profile-small-23.jpg"
                                    alt="profile picture"
                                  />
                                </figure>
                              </a>
                            </div>
                            {/* profile picture end */}
                            <div className="posted-author">
                              <h6 className="author">
                                <a href="profile.html">Barak Obama</a>
                              </h6>
                              <button className="add-frnd">add friend</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* photo section end */}
          </div>
        </main>
    )
}

export default Main
