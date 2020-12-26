import React, { Component } from "react";
import {
  IconButton,
  Grid,
  Icon,
  TablePagination,
  Button,
  TextField
} from "@material-ui/core";
import MaterialTable, { MTableToolbar, Chip, MTableBody, MTableHeader } from 'material-table';
import { RedirectToLandingPage } from "./RedirectToLandingPageService";
import { Breadcrumb, ConfirmationDialog } from "egret";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { saveAs } from 'file-saver';
import { Helmet } from 'react-helmet';



class Landing3 extends Component {
  state = {}

  handleRedirectToLandingPage = () => {
    RedirectToLandingPage(this.props.match.params.id).then(({ data }) => {
      window.location = data.linkRedirect;
    });
  };

  componentWillMount() {
    this.handleRedirectToLandingPage()
  }

  render() {
    const { t, i18n } = this.props
    return (
      

      <div className="body-wrapper">
        {/* Begin Header Area */}
        <header>
          {/* Begin Header Top Area */}
          <div className="header-top">
            <div className="container">
              <div className="row">
                {/* Begin Header Top Left Area */}
                <div className="col-lg-3 col-md-4">
                  <div className="header-top-left">
                    <ul className="phone-wrap">
                      <li><span>Telephone Enquiry:</span><a href="#">(+123) 123 321 345</a></li>
                    </ul>
                  </div>
                </div>
                {/* Header Top Left Area End Here */}
                {/* Begin Header Top Right Area */}
                <div className="col-lg-9 col-md-8">
                  <div className="header-top-right">
                    <ul className="ht-menu">
                      {/* Begin Setting Area */}
                      <li>
                        <div className="ht-setting-trigger"><span>Setting</span></div>
                        <div className="setting ht-setting">
                          <ul className="ht-setting-list">
                            <li><a href="login-register.html">My Account</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="login-register.html">Sign In</a></li>
                          </ul>
                        </div>
                      </li>
                      {/* Setting Area End Here */}
                      {/* Begin Currency Area */}
                      <li>
                        <span className="currency-selector-wrapper">Currency :</span>
                        <div className="ht-currency-trigger"><span>USD $</span></div>
                        <div className="currency ht-currency">
                          <ul className="ht-setting-list">
                            <li><a href="#">EUR €</a></li>
                            <li className="active"><a href="#">USD $</a></li>
                          </ul>
                        </div>
                      </li>
                      {/* Currency Area End Here */}
                      {/* Begin Language Area */}
                      <li>
                        <span className="language-selector-wrapper">Language :</span>
                        <div className="ht-language-trigger"><span>English</span></div>
                        <div className="language ht-language">
                          <ul className="ht-setting-list">
                            <li className="active"><a href="#"><img src="images/menu/flag-icon/1.jpg" alt="" />English</a></li>
                            <li><a href="#"><img src="images/menu/flag-icon/2.jpg" alt="" />Français</a></li>
                          </ul>
                        </div>
                      </li>
                      {/* Language Area End Here */}
                    </ul>
                  </div>
                </div>
                {/* Header Top Right Area End Here */}
              </div>
            </div>
          </div>
          {/* Header Top Area End Here */}
          {/* Begin Header Middle Area */}
          <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
            <div className="container">
              <div className="row">
                {/* Begin Header Logo Area */}
                <div className="col-lg-3">
                  <div className="logo pb-sm-30 pb-xs-30">
                    <a href="index.html">
                      <img src="images/menu/logo/1.jpg" alt="" />
                    </a>
                  </div>
                </div>
                {/* Header Logo Area End Here */}
                {/* Begin Header Middle Right Area */}
                <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                  {/* Begin Header Middle Searchbox Area */}
                  <form action="#" className="hm-searchbox">
                    <select className="nice-select select-search-category">
                      <option value={0}>All</option>
                      <option value={10}>Laptops</option>
                      <option value={17}>- -  Prime Video</option>
                      <option value={20}>- - - -  All Videos</option>
                      <option value={21}>- - - -  Blouses</option>
                      <option value={22}>- - - -  Evening Dresses</option>
                      <option value={23}>- - - -  Summer Dresses</option>
                      <option value={24}>- - - -  T-shirts</option>
                      <option value={25}>- - - -  Rent or Buy</option>
                      <option value={26}>- - - -  Your Watchlist</option>
                      <option value={27}>- - - -  Watch Anywhere</option>
                      <option value={28}>- - - -  Getting Started</option>
                      <option value={18}>- - - -  Computers</option>
                      <option value={29}>- - - -  More to Explore</option>
                      <option value={30}>- - - -  TV &amp; Video</option>
                      <option value={31}>- - - -  Audio &amp; Theater</option>
                      <option value={32}>- - - -  Camera, Photo </option>
                      <option value={33}>- - - -  Cell Phones</option>
                      <option value={34}>- - - -  Headphones</option>
                      <option value={35}>- - - -  Video Games</option>
                      <option value={36}>- - - -  Wireless Speakers</option>
                      <option value={19}>- - - -  Electronics</option>
                      <option value={37}>- - - -  Amazon Home</option>
                      <option value={38}>- - - -  Kitchen &amp; Dining</option>
                      <option value={39}>- - - -  Furniture</option>
                      <option value={40}>- - - -  Bed &amp; Bath</option>
                      <option value={41}>- - - -  Appliances</option>
                      <option value={11}>TV &amp; Audio</option>
                      <option value={42}>- -  Chamcham</option>
                      <option value={45}>- - - -  Office</option>
                      <option value={47}>- - - -  Gaming</option>
                      <option value={48}>- - - -  Chromebook</option>
                      <option value={49}>- - - -  Refurbished</option>
                      <option value={50}>- - - -  Touchscreen</option>
                      <option value={51}>- - - -  Ultrabooks</option>
                      <option value={52}>- - - -  Blouses</option>
                      <option value={43}>- -  Sanai</option>
                      <option value={53}>- - - -  Hard Drives</option>
                      <option value={54}>- - - -  Graphic Cards</option>
                      <option value={55}>- - - -  Processors (CPU)</option>
                      <option value={56}>- - - -  Memory</option>
                      <option value={57}>- - - -  Motherboards</option>
                      <option value={58}>- - - -  Fans &amp; Cooling</option>
                      <option value={59}>- - - -  CD/DVD Drives</option>
                      <option value={44}>- -  Meito</option>
                      <option value={60}>- - - -  Sound Cards</option>
                      <option value={61}>- - - -  Cases &amp; Towers</option>
                      <option value={62}>- - - -  Casual Dresses</option>
                      <option value={63}>- - - -  Evening Dresses</option>
                      <option value={64}>- - - -  T-shirts</option>
                      <option value={65}>- - - -  Tops</option>
                      <option value={12}>Smartphone</option>
                      <option value={66}>- -  Camera Accessories</option>
                      <option value={68}>- - - -  Octa Core</option>
                      <option value={69}>- - - -  Quad Core</option>
                      <option value={70}>- - - -  Dual Core</option>
                      <option value={71}>- - - -  7.0 Screen</option>
                      <option value={72}>- - - -  9.0 Screen</option>
                      <option value={73}>- - - -  Bags &amp; Cases</option>
                      <option value={67}>- -  XailStation</option>
                      <option value={74}>- - - -  Batteries</option>
                      <option value={75}>- - - -  Microphones</option>
                      <option value={76}>- - - -  Stabilizers</option>
                      <option value={77}>- - - -  Video Tapes</option>
                      <option value={78}>- - - -  Memory Card Readers</option>
                      <option value={79}>- - - -  Tripods</option>
                      <option value={13}>Cameras</option>
                      <option value={14}>headphone</option>
                      <option value={15}>Smartwatch</option>
                      <option value={16}>Accessories</option>
                    </select>
                    <input type="text" placeholder="Enter your search key ..." />
                    <button className="li-btn" type="submit"><i className="fa fa-search" /></button>
                  </form>
                  {/* Header Middle Searchbox Area End Here */}
                  {/* Begin Header Middle Right Area */}
                  <div className="header-middle-right">
                    <ul className="hm-menu">
                      {/* Begin Header Middle Wishlist Area */}
                      <li className="hm-wishlist">
                        <a href="wishlist.html">
                          <span className="cart-item-count wishlist-item-count">0</span>
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                      {/* Header Middle Wishlist Area End Here */}
                      {/* Begin Header Mini Cart Area */}
                      <li className="hm-minicart">
                        <div className="hm-minicart-trigger">
                          <span className="item-icon" />
                          <span className="item-text">£80.00
                            <span className="cart-item-count">2</span>
                          </span>
                        </div>
                        <span />
                        <div className="minicart">
                          <ul className="minicart-product-list">
                            <li>
                              <a href="single-product.html" className="minicart-product-image">
                                <img src="images/product/small-size/5.jpg" alt="cart products" />
                              </a>
                              <div className="minicart-product-details">
                                <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                <span>£40 x 1</span>
                              </div>
                              <button className="close" title="Remove">
                                <i className="fa fa-close" />
                              </button>
                            </li>
                            <li>
                              <a href="single-product.html" className="minicart-product-image">
                                <img src="images/product/small-size/6.jpg" alt="cart products" />
                              </a>
                              <div className="minicart-product-details">
                                <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                <span>£40 x 1</span>
                              </div>
                              <button className="close" title="Remove">
                                <i className="fa fa-close" />
                              </button>
                            </li>
                          </ul>
                          <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                          <div className="minicart-button">
                            <a href="shopping-cart.html" className="li-button li-button-fullwidth li-button-dark">
                              <span>View Full Cart</span>
                            </a>
                            <a href="checkout.html" className="li-button li-button-fullwidth">
                              <span>Checkout</span>
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* Header Mini Cart Area End Here */}
                    </ul>
                  </div>
                  {/* Header Middle Right Area End Here */}
                </div>
                {/* Header Middle Right Area End Here */}
              </div>
            </div>
          </div>
          {/* Header Middle Area End Here */}
          {/* Begin Header Bottom Area */}
          <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Begin Header Bottom Menu Area */}
                  <div className="hb-menu">
                    <nav>
                      <ul>
                        <li className="dropdown-holder"><a href="index.html">Home</a>
                          <ul className="hb-dropdown">
                            <li className="active"><a href="index.html">Home One</a></li>
                            <li><a href="index-2.html">Home Two</a></li>
                            <li><a href="index-3.html">Home Three</a></li>
                            <li><a href="index-4.html">Home Four</a></li>
                          </ul>
                        </li>
                        <li className="megamenu-holder"><a href="shop-left-sidebar.html">Shop</a>
                          <ul className="megamenu hb-megamenu">
                            <li><a href="shop-left-sidebar.html">Shop Page Layout</a>
                              <ul>
                                <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                                <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                <li><a href="shop-list.html">Shop List</a></li>
                                <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a href="single-product-gallery-left.html">Single Product Style</a>
                              <ul>
                                <li><a href="single-product-carousel.html">Single Product Carousel</a></li>
                                <li><a href="single-product-gallery-left.html">Single Product Gallery Left</a></li>
                                <li><a href="single-product-gallery-right.html">Single Product Gallery Right</a></li>
                                <li><a href="single-product-tab-style-top.html">Single Product Tab Style Top</a></li>
                                <li><a href="single-product-tab-style-left.html">Single Product Tab Style Left</a></li>
                                <li><a href="single-product-tab-style-right.html">Single Product Tab Style Right</a></li>
                              </ul>
                            </li>
                            <li><a href="single-product.html">Single Products</a>
                              <ul>
                                <li><a href="single-product.html">Single Product</a></li>
                                <li><a href="single-product-sale.html">Single Product Sale</a></li>
                                <li><a href="single-product-group.html">Single Product Group</a></li>
                                <li><a href="single-product-normal.html">Single Product Normal</a></li>
                                <li><a href="single-product-affiliate.html">Single Product Affiliate</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-holder"><a href="blog-left-sidebar.html">Blog</a>
                          <ul className="hb-dropdown">
                            <li className="sub-dropdown-holder"><a href="blog-left-sidebar.html">Blog Grid View</a>
                              <ul className="hb-dropdown hb-sub-dropdown">
                                <li><a href="blog-2-column.html">Blog 2 Column</a></li>
                                <li><a href="blog-3-column.html">Blog 3 Column</a></li>
                                <li><a href="blog-left-sidebar.html">Grid Left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Grid Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="sub-dropdown-holder"><a href="blog-list-left-sidebar.html">Blog List View</a>
                              <ul className="hb-dropdown hb-sub-dropdown">
                                <li><a href="blog-list.html">Blog List</a></li>
                                <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                                <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="sub-dropdown-holder"><a href="blog-details-left-sidebar.html">Blog Details</a>
                              <ul className="hb-dropdown hb-sub-dropdown">
                                <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="sub-dropdown-holder"><a href="blog-gallery-format.html">Blog Format</a>
                              <ul className="hb-dropdown hb-sub-dropdown">
                                <li><a href="blog-audio-format.html">Blog Audio Format</a></li>
                                <li><a href="blog-video-format.html">Blog Video Format</a></li>
                                <li><a href="blog-gallery-format.html">Blog Gallery Format</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="megamenu-static-holder"><a href="index.html">Pages</a>
                          <ul className="megamenu hb-megamenu">
                            <li><a href="blog-left-sidebar.html">Blog Layouts</a>
                              <ul>
                                <li><a href="blog-2-column.html">Blog 2 Column</a></li>
                                <li><a href="blog-3-column.html">Blog 3 Column</a></li>
                                <li><a href="blog-left-sidebar.html">Grid Left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Grid Right Sidebar</a></li>
                                <li><a href="blog-list.html">Blog List</a></li>
                                <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                                <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a href="blog-details-left-sidebar.html">Blog Details Pages</a>
                              <ul>
                                <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                                <li><a href="blog-audio-format.html">Blog Audio Format</a></li>
                                <li><a href="blog-video-format.html">Blog Video Format</a></li>
                                <li><a href="blog-gallery-format.html">Blog Gallery Format</a></li>
                              </ul>
                            </li>
                            <li><a href="index.html">Other Pages</a>
                              <ul>
                                <li><a href="login-register.html">My Account</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="compare.html">Compare</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="shopping-cart.html">Shopping Cart</a></li>
                              </ul>
                            </li>
                            <li><a href="index.html">Other Pages 2</a>
                              <ul>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="404.html">404 Error</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="shop-left-sidebar.html">Smartwatch</a></li>
                        <li><a href="shop-left-sidebar.html">Accessories</a></li>
                      </ul>
                    </nav>
                  </div>
                  {/* Header Bottom Menu Area End Here */}
                </div>
              </div>
            </div>
          </div>
          {/* Header Bottom Area End Here */}
          {/* Begin Mobile Menu Area */}
          <div className="mobile-menu-area d-lg-none d-xl-none col-12">
            <div className="container">
              <div className="row">
                <div className="mobile-menu">
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu Area End Here */}
        </header>
        {/* Header Area End Here */}
        {/* Begin Slider With Banner Area */}
        <div className="slider-with-banner">
          <div className="container">
            <div className="row">
              {/* Begin Slider Area */}
              <div className="col-lg-8 col-md-8">
                <div className="slider-area">
                  <div className="slider-active owl-carousel">
                    {/* Begin Single Slide Area */}
                    <div className="single-slide align-center-left  animation-style-01 bg-1">
                      <div className="slider-progress" />
                      <div className="slider-content">
                        <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                        <h2>Chamcham Galaxy S9 | S9+</h2>
                        <h3>Starting at <span>$1209.00</span></h3>
                        <div className="default-btn slide-btn">
                          <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                        </div>
                      </div>
                    </div>
                    {/* Single Slide Area End Here */}
                    {/* Begin Single Slide Area */}
                    <div className="single-slide align-center-left animation-style-02 bg-2">
                      <div className="slider-progress" />
                      <div className="slider-content">
                        <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                        <h2>Work Desk Surface Studio 2018</h2>
                        <h3>Starting at <span>$824.00</span></h3>
                        <div className="default-btn slide-btn">
                          <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                        </div>
                      </div>
                    </div>
                    {/* Single Slide Area End Here */}
                    {/* Begin Single Slide Area */}
                    <div className="single-slide align-center-left animation-style-01 bg-3">
                      <div className="slider-progress" />
                      <div className="slider-content">
                        <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                        <h2>Phantom 4 Pro+ Obsidian</h2>
                        <h3>Starting at <span>$1849.00</span></h3>
                        <div className="default-btn slide-btn">
                          <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                        </div>
                      </div>
                    </div>
                    {/* Single Slide Area End Here */}
                  </div>
                </div>
              </div>
              {/* Slider Area End Here */}
              {/* Begin Li Banner Area */}
              <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                <div className="li-banner">
                  <a href="#">
                    <img src="images/banner/1_1.jpg" alt="" />
                  </a>
                </div>
                <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
                  <a href="#">
                    <img src="images/banner/1_2.jpg" alt="" />
                  </a>
                </div>
              </div>
              {/* Li Banner Area End Here */}
            </div>
          </div>
        </div>
        {/* Slider With Banner Area End Here */}
        {/* Begin Product Area */}
        <div className="product-area pt-60 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="li-product-tab">
                  <ul className="nav li-product-menu">
                    <li><a className="active" data-toggle="tab" href="#li-new-product"><span>New Arrival</span></a></li>
                    <li><a data-toggle="tab" href="#li-bestseller-product"><span>Bestseller</span></a></li>
                    <li><a data-toggle="tab" href="#li-featured-product"><span>Featured Products</span></a></li>
                  </ul>
                </div>
                {/* Begin Li's Tab Menu Content Area */}
              </div>
            </div>
            <div className="tab-content">
              <div id="li-new-product" className="tab-pane active show" role="tabpanel">
                <div className="row">
                  <div className="product-active owl-carousel">
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/1.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/2.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/3.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/4.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/5.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/6.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                  </div>
                </div>
              </div>
              <div id="li-bestseller-product" className="tab-pane" role="tabpanel">
                <div className="row">
                  <div className="product-active owl-carousel">
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/12.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/11.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/10.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/9.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/8.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/7.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                  </div>
                </div>
              </div>
              <div id="li-featured-product" className="tab-pane" role="tabpanel">
                <div className="row">
                  <div className="product-active owl-carousel">
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/3.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/5.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/7.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/9.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/11.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/12.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Area End Here */}
        {/* Begin Li's Static Banner Area */}
        <div className="li-static-banner">
          <div className="container">
            <div className="row">
              {/* Begin Single Banner Area */}
              <div className="col-lg-4 col-md-4 text-center">
                <div className="single-banner">
                  <a href="#">
                    <img src="images/banner/1_3.jpg" alt="Li's Static Banner" />
                  </a>
                </div>
              </div>
              {/* Single Banner Area End Here */}
              {/* Begin Single Banner Area */}
              <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                <div className="single-banner">
                  <a href="#">
                    <img src="images/banner/1_4.jpg" alt="Li's Static Banner" />
                  </a>
                </div>
              </div>
              {/* Single Banner Area End Here */}
              {/* Begin Single Banner Area */}
              <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                <div className="single-banner">
                  <a href="#">
                    <img src="images/banner/1_5.jpg" alt="Li's Static Banner" />
                  </a>
                </div>
              </div>
              {/* Single Banner Area End Here */}
            </div>
          </div>
        </div>
        {/* Li's Static Banner Area End Here */}
        {/* Begin Li's Laptop Product Area */}
        <section className="product-area li-laptop-product pt-60 pb-45">
          <div className="container">
            <div className="row">
              {/* Begin Li's Section Area */}
              <div className="col-lg-12">
                <div className="li-section-title">
                  <h2>
                    <span>Laptop</span>
                  </h2>
                  <ul className="li-sub-category-list">
                    <li className="active"><a href="shop-left-sidebar.html">Prime Video</a></li>
                    <li><a href="shop-left-sidebar.html">Computers</a></li>
                    <li><a href="shop-left-sidebar.html">Electronics</a></li>
                  </ul>
                </div>
                <div className="row">
                  <div className="product-active owl-carousel">
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/1.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/2.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/3.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/4.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/5.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/6.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Li's Section Area End Here */}
            </div>
          </div>
        </section>
        {/* Li's Laptop Product Area End Here */}
        {/* Begin Li's TV & Audio Product Area */}
        <section className="product-area li-laptop-product li-tv-audio-product pb-45">
          <div className="container">
            <div className="row">
              {/* Begin Li's Section Area */}
              <div className="col-lg-12">
                <div className="li-section-title">
                  <h2>
                    <span>TV &amp; Audio</span>
                  </h2>
                  <ul className="li-sub-category-list">
                    <li className="active"><a href="shop-left-sidebar.html">Chamcham</a></li>
                    <li><a href="shop-left-sidebar.html">Sanai</a></li>
                    <li><a href="shop-left-sidebar.html">Meito</a></li>
                  </ul>
                </div>
                <div className="row">
                  <div className="product-active owl-carousel">
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/3.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/5.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/7.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/9.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/11.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/11.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Li's Section Area End Here */}
            </div>
          </div>
        </section>
        {/* Li's TV & Audio Product Area End Here */}
        {/* Begin Li's Static Home Area */}
        <div className="li-static-home">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Begin Li's Static Home Image Area */}
                <div className="li-static-home-image" />
                {/* Li's Static Home Image Area End Here */}
                {/* Begin Li's Static Home Content Area */}
                <div className="li-static-home-content">
                  <p>Sale Offer<span>-20% Off</span>This Week</p>
                  <h2>Featured Product</h2>
                  <h2>Meito Accessories 2018</h2>
                  <p className="schedule">
                    Starting at
                    <span> $1209.00</span>
                  </p>
                  <div className="default-btn">
                    <a href="shop-left-sidebar.html" className="links">Shopping Now</a>
                  </div>
                </div>
                {/* Li's Static Home Content Area End Here */}
              </div>
            </div>
          </div>
        </div>
        {/* Li's Static Home Area End Here */}
        {/* Begin Li's Trending Product Area */}
        <section className="product-area li-trending-product pt-60 pb-45">
          <div className="container">
            <div className="row">
              {/* Begin Li's Tab Menu Area */}
              <div className="col-lg-12">
                <div className="li-product-tab li-trending-product-tab">
                  <h2>
                    <span>Trendding Products</span>
                  </h2>
                  <ul className="nav li-product-menu li-trending-product-menu">
                    <li><a className="active" data-toggle="tab" href="#home1"><span>Sanai</span></a></li>
                    <li><a data-toggle="tab" href="#home2"><span>Camera Accessories</span></a></li>
                    <li><a data-toggle="tab" href="#home3"><span>XailStation</span></a></li>
                  </ul>
                </div>
                {/* Begin Li's Tab Menu Content Area */}
                <div className="tab-content li-tab-content li-trending-product-content">
                  <div id="home1" className="tab-pane show fade in active">
                    <div className="row">
                      <div className="product-active owl-carousel">
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/2.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/4.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/6.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/8.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/10.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/12.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="home2" className="tab-pane fade">
                    <div className="row">
                      <div className="product-active owl-carousel">
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/11.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/7.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/9.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/5.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/7.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/5.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="home3" className="tab-pane fade">
                    <div className="row">
                      <div className="product-active owl-carousel">
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/3.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/7.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/9.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/1.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/11.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Graphic Corner</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                <div className="price-box">
                                  <span className="new-price">$46.80</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                        <div className="col-lg-12">
                          {/* single-product-wrap start */}
                          <div className="single-product-wrap">
                            <div className="product-image">
                              <a href="single-product.html">
                                <img src="images/product/large-size/9.jpg" alt="Li's Product Image" />
                              </a>
                              <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                              <div className="product_desc_info">
                                <div className="product-review">
                                  <h5 className="manufacturer">
                                    <a href="shop-left-sidebar.html">Studio Design</a>
                                  </h5>
                                  <div className="rating-box">
                                    <ul className="rating">
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                      <li className="no-star"><i className="fa fa-star-o" /></li>
                                    </ul>
                                  </div>
                                </div>
                                <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                <div className="price-box">
                                  <span className="new-price new-price-2">$71.80</span>
                                  <span className="old-price">$77.22</span>
                                  <span className="discount-percentage">-7%</span>
                                </div>
                              </div>
                              <div className="add-actions">
                                <ul className="add-actions-link">
                                  <li className="add-cart active"><a href="#">Add to cart</a></li>
                                  <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                                  <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* single-product-wrap end */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab Menu Content Area End Here */}
              </div>
              {/* Tab Menu Area End Here */}
            </div>
          </div>
        </section>
        {/* Li's Trending Product Area End Here */}
        {/* Begin Li's Trendding Products Area */}
        <section className="product-area li-laptop-product li-trendding-products best-sellers pb-45">
          <div className="container">
            <div className="row">
              {/* Begin Li's Section Area */}
              <div className="col-lg-12">
                <div className="li-section-title">
                  <h2>
                    <span>Bestsellers</span>
                  </h2>
                </div>
                <div className="row">
                  <div className="product-active owl-carousel">
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/11.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/7.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/9.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/5.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/7.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-12">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img src="images/product/large-size/5.jpg" alt="Li's Product Image" />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">Studio Design</a>
                              </h5>
                              <div className="rating-box">
                                <ul className="rating">
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                  <li className="no-star"><i className="fa fa-star-o" /></li>
                                </ul>
                              </div>
                            </div>
                            <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                            <div className="price-box">
                              <span className="new-price new-price-2">$71.80</span>
                              <span className="old-price">$77.22</span>
                              <span className="discount-percentage">-7%</span>
                            </div>
                          </div>
                          <div className="add-actions">
                            <ul className="add-actions-link">
                              <li className="add-cart active"><a href="#">Add to cart</a></li>
                              <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                              <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Li's Section Area End Here */}
            </div>
          </div>
        </section>
        {/* Li's Trendding Products Area End Here */}
        {/* Begin Footer Area */}
        <div className="footer">
          {/* Begin Footer Static Top Area */}
          <div className="footer-static-top">
            <div className="container">
              {/* Begin Footer Shipping Area */}
              <div className="footer-shipping pt-60 pb-55 pb-xs-25">
                <div className="row">
                  {/* Begin Li's Shipping Inner Box Area */}
                  <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                    <div className="li-shipping-inner-box">
                      <div className="shipping-icon">
                        <img src="images/shipping-icon/1.png" alt="Shipping Icon" />
                      </div>
                      <div className="shipping-text">
                        <h2>Free Delivery</h2>
                        <p>And free returns. See checkout for delivery dates.</p>
                      </div>
                    </div>
                  </div>
                  {/* Li's Shipping Inner Box Area End Here */}
                  {/* Begin Li's Shipping Inner Box Area */}
                  <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                    <div className="li-shipping-inner-box">
                      <div className="shipping-icon">
                        <img src="images/shipping-icon/2.png" alt="Shipping Icon" />
                      </div>
                      <div className="shipping-text">
                        <h2>Safe Payment</h2>
                        <p>Pay with the world's most popular and secure payment methods.</p>
                      </div>
                    </div>
                  </div>
                  {/* Li's Shipping Inner Box Area End Here */}
                  {/* Begin Li's Shipping Inner Box Area */}
                  <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                    <div className="li-shipping-inner-box">
                      <div className="shipping-icon">
                        <img src="images/shipping-icon/3.png" alt="Shipping Icon" />
                      </div>
                      <div className="shipping-text">
                        <h2>Shop with Confidence</h2>
                        <p>Our Buyer Protection covers your purchasefrom click to delivery.</p>
                      </div>
                    </div>
                  </div>
                  {/* Li's Shipping Inner Box Area End Here */}
                  {/* Begin Li's Shipping Inner Box Area */}
                  <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                    <div className="li-shipping-inner-box">
                      <div className="shipping-icon">
                        <img src="images/shipping-icon/4.png" alt="Shipping Icon" />
                      </div>
                      <div className="shipping-text">
                        <h2>24/7 Help Center</h2>
                        <p>Have a question? Call a Specialist or chat online.</p>
                      </div>
                    </div>
                  </div>
                  {/* Li's Shipping Inner Box Area End Here */}
                </div>
              </div>
              {/* Footer Shipping Area End Here */}
            </div>
          </div>
          {/* Footer Static Top Area End Here */}
          {/* Begin Footer Static Middle Area */}
          <div className="footer-static-middle">
            <div className="container">
              <div className="footer-logo-wrap pt-50 pb-35">
                <div className="row">
                  {/* Begin Footer Logo Area */}
                  <div className="col-lg-4 col-md-6">
                    <div className="footer-logo">
                      <img src="images/menu/logo/1.jpg" alt="Footer Logo" />
                      <p className="info">
                        We are a team of designers and developers that create high quality HTML Template &amp; Woocommerce, Shopify Theme.
                      </p>
                    </div>
                    <ul className="des">
                      <li>
                        <span>Address: </span>
                        6688Princess Road, London, Greater London BAS 23JK, UK
                      </li>
                      <li>
                        <span>Phone: </span>
                        <a href="#">(+123) 123 321 345</a>
                      </li>
                      <li>
                        <span>Email: </span>
                        <a href="mailto://info@yourdomain.com">info@yourdomain.com</a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Logo Area End Here */}
                  {/* Begin Footer Block Area */}
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-block">
                      <h3 className="footer-block-title">Product</h3>
                      <ul>
                        <li><a href="#">Prices drop</a></li>
                        <li><a href="#">New products</a></li>
                        <li><a href="#">Best sales</a></li>
                        <li><a href="#">Contact us</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Footer Block Area End Here */}
                  {/* Begin Footer Block Area */}
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer-block">
                      <h3 className="footer-block-title">Our company</h3>
                      <ul>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Legal Notice</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Footer Block Area End Here */}
                  {/* Begin Footer Block Area */}
                  <div className="col-lg-4">
                    <div className="footer-block">
                      <h3 className="footer-block-title">Follow Us</h3>
                      <ul className="social-link">
                        <li className="twitter">
                          <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="rss">
                          <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="RSS">
                            <i className="fa fa-rss" />
                          </a>
                        </li>
                        <li className="google-plus">
                          <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li className="facebook">
                          <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="youtube">
                          <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                            <i className="fa fa-youtube" />
                          </a>
                        </li>
                        <li className="instagram">
                          <a href="https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Begin Footer Newsletter Area */}
                    <div className="footer-newsletter">
                      <h4>Sign up to newsletter</h4>
                      <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footer-subscribe-form validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                          <div id="mc-form" className="mc-form subscribe-form form-group">
                            <input id="mc-email" type="email" autoComplete="off" placeholder="Enter your email" />
                            <button className="btn" id="mc-submit">Subscribe</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* Footer Newsletter Area End Here */}
                  </div>
                  {/* Footer Block Area End Here */}
                </div>
              </div>
            </div>
          </div>
          {/* Footer Static Middle Area End Here */}
          {/* Begin Footer Static Bottom Area */}
          <div className="footer-static-bottom pt-55 pb-55">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Begin Footer Links Area */}
                  <div className="footer-links">
                    <ul>
                      <li><a href="#">Online Shopping</a></li>
                      <li><a href="#">Promotions</a></li>
                      <li><a href="#">My Orders</a></li>
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Customer Service</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Most Populars</a></li>
                      <li><a href="#">New Arrivals</a></li>
                      <li><a href="#">Special Products</a></li>
                      <li><a href="#">Manufacturers</a></li>
                      <li><a href="#">Our Stores</a></li>
                      <li><a href="#">Shipping</a></li>
                      <li><a href="#">Payments</a></li>
                      <li><a href="#">Warantee</a></li>
                      <li><a href="#">Refunds</a></li>
                      <li><a href="#">Checkout</a></li>
                      <li><a href="#">Discount</a></li>
                      <li><a href="#">Refunds</a></li>
                      <li><a href="#">Policy Shipping</a></li>
                    </ul>
                  </div>
                  {/* Footer Links Area End Here */}
                  {/* Begin Footer Payment Area */}
                  <div className="copyright text-center">
                    <a href="#">
                      <img src="images/payment/1.png" alt="" />
                    </a>
                  </div>
                  {/* Footer Payment Area End Here */}
                  {/* Begin Copyright Area */}
                  <div className="copyright text-center pt-25">
                    <span><a href="https://www.templatespoint.net" target="_blank">Templates Point</a></span>
                  </div>
                  {/* Copyright Area End Here */}
                </div>
              </div>
            </div>
          </div>
          {/* Footer Static Bottom Area End Here */}
        </div>
        {/* Footer Area End Here */}
        {/* Begin Quick View | Modal Area */}
        <div className="modal fade modal-wrapper" id="exampleModalCenter">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-inner-area row">
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    {/* Product Details Left */}
                    <div className="product-details-left">
                      <div className="product-details-images slider-navigation-1">
                        <div className="lg-image">
                          <img src="images/product/large-size/1.jpg" alt="product image" />
                        </div>
                        <div className="lg-image">
                          <img src="images/product/large-size/2.jpg" alt="product image" />
                        </div>
                        <div className="lg-image">
                          <img src="images/product/large-size/3.jpg" alt="product image" />
                        </div>
                        <div className="lg-image">
                          <img src="images/product/large-size/4.jpg" alt="product image" />
                        </div>
                        <div className="lg-image">
                          <img src="images/product/large-size/5.jpg" alt="product image" />
                        </div>
                        <div className="lg-image">
                          <img src="images/product/large-size/6.jpg" alt="product image" />
                        </div>
                      </div>
                      <div className="product-details-thumbs slider-thumbs-1">
                        <div className="sm-image"><img src="images/product/small-size/1.jpg" alt="product image thumb" /></div>
                        <div className="sm-image"><img src="images/product/small-size/2.jpg" alt="product image thumb" /></div>
                        <div className="sm-image"><img src="images/product/small-size/3.jpg" alt="product image thumb" /></div>
                        <div className="sm-image"><img src="images/product/small-size/4.jpg" alt="product image thumb" /></div>
                        <div className="sm-image"><img src="images/product/small-size/5.jpg" alt="product image thumb" /></div>
                        <div className="sm-image"><img src="images/product/small-size/6.jpg" alt="product image thumb" /></div>
                      </div>
                    </div>
                    {/*// Product Details Left */}
                  </div>
                  <div className="col-lg-7 col-md-6 col-sm-6">
                    <div className="product-details-view-content pt-60">
                      <div className="product-info">
                        <h2>Today is a good day Framed poster</h2>
                        <span className="product-details-ref">Reference: demo_15</span>
                        <div className="rating-box pt-20">
                          <ul className="rating rating-with-review-item">
                            <li><i className="fa fa-star-o" /></li>
                            <li><i className="fa fa-star-o" /></li>
                            <li><i className="fa fa-star-o" /></li>
                            <li className="no-star"><i className="fa fa-star-o" /></li>
                            <li className="no-star"><i className="fa fa-star-o" /></li>
                            <li className="review-item"><a href="#">Read Review</a></li>
                            <li className="review-item"><a href="#">Write Review</a></li>
                          </ul>
                        </div>
                        <div className="price-box pt-20">
                          <span className="new-price new-price-2">$57.98</span>
                        </div>
                        <div className="product-desc">
                          <p>
                            <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                            </span>
                          </p>
                        </div>
                        <div className="product-variants">
                          <div className="produt-variants-size">
                            <label>Dimension</label>
                            <select className="nice-select">
                              <option value={1} title="S" selected="selected">40x60cm</option>
                              <option value={2} title="M">60x90cm</option>
                              <option value={3} title="L">80x120cm</option>
                            </select>
                          </div>
                        </div>
                        <div className="single-add-to-cart">
                          <form action="#" className="cart-quantity">
                            <div className="quantity">
                              <label>Quantity</label>
                              <div className="cart-plus-minus">
                                <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                                <div className="dec qtybutton"><i className="fa fa-angle-down" /></div>
                                <div className="inc qtybutton"><i className="fa fa-angle-up" /></div>
                              </div>
                            </div>
                            <button className="add-to-cart" type="submit">Add to cart</button>
                          </form>
                        </div>
                        <div className="product-additional-info pt-25">
                          <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o" />Add to wishlist</a>
                          <div className="product-social-sharing pt-25">
                            <ul>
                              <li className="facebook"><a href="#"><i className="fa fa-facebook" />Facebook</a></li>
                              <li className="twitter"><a href="#"><i className="fa fa-twitter" />Twitter</a></li>
                              <li className="google-plus"><a href="#"><i className="fa fa-google-plus" />Google +</a></li>
                              <li className="instagram"><a href="#"><i className="fa fa-instagram" />Instagram</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick View | Modal Area End Here */}
      </div>
    )
  }
}


export default Landing3;
