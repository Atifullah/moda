
import { React, useContext } from "react";
import shopdata from './../../Api/shopApi.json';
import { CartContext } from "../../context/cartContext";
import WomenProductComponent from "./women-product-component";

const ShopFullWidth = ( ) =>{
    const { addItemToCart } = useContext(CartContext);
    
    return(
 

<div className="container-fluid">
        	<div className="row" style={{marginTop:'20px'}}>
          
            	<div className="col-12 col-sm-12 col-md-3 col-lg-2 sidebar filterbar" >
                	<div className="closeFilter d-block d-md-none d-lg-none"><i className="icon icon anm anm-times-l"></i></div>
                	<div className="sidebar_tags">
                    
                    	<div className="sidebar_widget categories filter-widget">
                            <div className="widget-title"><h2>Categories</h2></div>
                            <div className="widget-content">
                                <ul className="sidebar_categories">
                                    <li className="level1 sub-level"><a href="#;" className="site-nav">Clothing</a>
                                    	<ul className="sublinks">
                                        	<li className="level2"><a href="#;" className="site-nav">Men</a></li>
                                            <li className="level2"><a href="#;" className="site-nav">Women</a></li>
                                            <li className="level2"><a href="#;" className="site-nav">Child</a></li>
                                            <li className="level2"><a href="#;" className="site-nav">View All Clothing</a></li>
                                        </ul>
                                    </li>
                                    <li className="level1 sub-level"><a href="#;" className="site-nav">Jewellery</a>
                                    	<ul className="sublinks">
                                        	<li className="level2"><a href="#;" className="site-nav">Ring</a></li>
                                            <li className="level2"><a href="#;" className="site-nav">Neckalses</a></li>
                                            <li className="level2"><a href="#;" className="site-nav">Eaarings</a></li>
                                            <li className="level2"><a href="#;" className="site-nav">View All Jewellery</a></li>
                                        </ul>
                                    </li>
                                    <li className="lvl-1"><a href="#;" className="site-nav">Shoes</a></li>
                                    <li className="lvl-1"><a href="#;" className="site-nav">Accessories</a></li>
                                    <li className="lvl-1"><a href="#;" className="site-nav">Collections</a></li>
                                    <li className="lvl-1"><a href="#;" className="site-nav">Sale</a></li>
                                    <li className="lvl-1"><a href="#;" className="site-nav">Page</a></li>
                                </ul>
                            </div>
                        </div>
                     
                        <div className="sidebar_widget filterBox filter-widget">
                            <div className="widget-title">
                            	<h2>Price</h2>
                            </div>
                            <form action="#" method="post" className="price-filter">
                                <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                	<div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <p className="no-margin"><input id="amount" type="text"/></p>
                                    </div>
                                    <div className="col-6 text-right margin-25px-top">
                                        <button className="btn btn-secondary btn--small">filter</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                     
                        <div className="sidebar_widget filterBox filter-widget size-swacthes">
                            <div className="widget-title"><h2>Size</h2></div>
                            <div className="filter-color swacth-list">
                            	<ul>
                                    <li><span className="swacth-btn checked">X</span></li>
                                    <li><span className="swacth-btn">XL</span></li>
                                    <li><span className="swacth-btn">XLL</span></li>
                                    <li><span className="swacth-btn">M</span></li>
                                    <li><span className="swacth-btn">L</span></li>
                                    <li><span className="swacth-btn">S</span></li>
                                    <li><span className="swacth-btn">XXXL</span></li>
                                    <li><span className="swacth-btn">XXL</span></li>
                                    <li><span className="swacth-btn">XS</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                        <div className="sidebar_widget filterBox filter-widget">
                            <div className="widget-title"><h2>Color</h2></div>
                            <div className="filter-color swacth-list clearfix">
                                <span className="swacth-btn black"></span>
                                <span className="swacth-btn white checked"></span>
                                <span className="swacth-btn red"></span>
                                <span className="swacth-btn blue"></span>
                                <span className="swacth-btn pink"></span>
                                <span className="swacth-btn gray"></span>
                                <span className="swacth-btn green"></span>
                                <span className="swacth-btn orange"></span>
                                <span className="swacth-btn yellow"></span>
                                <span className="swacth-btn blueviolet"></span>
                                <span className="swacth-btn brown"></span>
                                <span className="swacth-btn darkGoldenRod"></span> 
                                <span className="swacth-btn darkGreen"></span> 
                                <span className="swacth-btn darkRed"></span> 
                                <span className="swacth-btn dimGrey"></span>
                                <span className="swacth-btn khaki"></span> 
                            </div>
                        </div>
                      
                        <div className="sidebar_widget filterBox filter-widget">
                            <div className="widget-title"><h2>Brands</h2></div>
                            <ul>
                                <li>
                                  <input type="checkbox" value="allen-vela" id="check1"/>
                                  <label for="check1"><span><span></span></span>Allen Vela</label>
                                </li>
                                <li>
                                  <input type="checkbox" value="oxymat" id="check3"/>
                                  <label for="check3"><span><span></span></span>Oxymat</label>
                                </li>
                                <li>
                                  <input type="checkbox" value="vanelas" id="check4"/>
                                  <label for="check4"><span><span></span></span>Vanelas</label>
                                </li>
                                <li>
                                  <input type="checkbox" value="pagini" id="check5"/>
                                  <label for="check5"><span><span></span></span>Pagini</label>
                                </li>
                                <li>
                                  <input type="checkbox" value="monark" id="check6"/>
                                  <label for="check6"><span><span></span></span>Monark</label>
                                </li>
                            </ul>
                        </div>
                     
						<div className="sidebar_widget">
                        	<div className="widget-title"><h2>Popular Products</h2></div>
							<div className="widget-content">
                                <div className="list list-sidebar-products">
                                  <div className="grid">
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image">
                                            <a className="grid-view-item__link" href="#">
                                                <img className="grid-view-item__image" src="images/product-images/mini-product-img.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Cena Skirt</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$173.60</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image" src="images/product-images/mini-product-img1.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Block Button Up</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$378.00</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image" src="images/product-images/mini-product-img2.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Balda Button Pant</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$278.60</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image" src="images/product-images/mini-product-img3.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Border Dress in Black/Silver</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$228.00</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          	</div>
						</div>
                    
                        <div className="sidebar_widget static-banner">
                        	<img src="assets/images/side-banner-2.jpg" alt="" />
                        </div>
                    
                        <div className="sidebar_widget">
                            <div className="widget-title"><h2>Information</h2></div>
                            <div className="widget-content"><p>Use this text to share information about your brand with your customers. Describe a product, share announcements, or welcome customers to your store.</p></div>
                        </div>
                  
                        <div className="sidebar_widget">
                          <div className="widget-title">
                            <h2>Product Tags</h2>
                          </div>
                          <div className="widget-content">
                            <ul className="product-tags">
                              <li><a href="#" title="Show products matching tag $100 - $400">$100 - $400</a></li>
                              <li><a href="#" title="Show products matching tag $400 - $600">$400 - $600</a></li>
                              <li><a href="#" title="Show products matching tag $600 - $800">$600 - $800</a></li>
                              <li><a href="#" title="Show products matching tag Above $800">Above $800</a></li>
                              <li><a href="#" title="Show products matching tag Allen Vela">Allen Vela</a></li>
                              <li><a href="#" title="Show products matching tag Black">Black</a></li>
                              <li><a href="#" title="Show products matching tag Blue">Blue</a></li>
                              <li><a href="#" title="Show products matching tag Cantitate">Cantitate</a></li>
                              <li><a href="#" title="Show products matching tag Famiza">Famiza</a></li>
                              <li><a href="#" title="Show products matching tag Gray">Gray</a></li>
                              <li><a href="#" title="Show products matching tag Green">Green</a></li>
                              <li><a href="#" title="Show products matching tag Hot">Hot</a></li>
                              <li><a href="#" title="Show products matching tag jean shop">jean shop</a></li>
                              <li><a href="#" title="Show products matching tag jesse kamm">jesse kamm</a></li>
                              <li><a href="#" title="Show products matching tag L">L</a></li>
                              <li><a href="#" title="Show products matching tag Lardini">Lardini</a></li>
                              <li><a href="#" title="Show products matching tag lareida">lareida</a></li>
                              <li><a href="#" title="Show products matching tag Lirisla">Lirisla</a></li>
                              <li><a href="#" title="Show products matching tag M">M</a></li>
                              <li><a href="#" title="Show products matching tag mini-dress">mini-dress</a></li>
                              <li><a href="#" title="Show products matching tag Monark">Monark</a></li>
                              <li><a href="#" title="Show products matching tag Navy">Navy</a></li>
                              <li><a href="#" title="Show products matching tag new">new</a></li>
                              <li><a href="#" title="Show products matching tag new arrivals">new arrivals</a></li>
                              <li><a href="#" title="Show products matching tag Orange">Orange</a></li>
                              <li><a href="#" title="Show products matching tag oxford">oxford</a></li>
                              <li><a href="#" title="Show products matching tag Oxymat">Oxymat</a></li>
                            </ul>
                            <span className="btn btn--small btnview">View all</span> </div>
                        </div>
                  
                    </div>
                </div>
            
                <div className="col-12 col-sm-12 col-md-9 col-lg-10 main-col">
                	<div className="productList">
                   
                        <button type="button" className="btn btn-filter d-block d-md-none d-lg-none"> Product Filters</button>
                    	<div className="toolbar">
                        	<div className="filters-toolbar-wrapper">
                            	<div className="row">
                                	<div className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                                    	<a href="shop-left-sidebar.html" title="Grid View" className="change-view change-view--active">
                                        	<img src="images/grid.jpg" alt="Grid" />
                                        </a>
                                        <a href="shop-listview.html" title="List View" className="change-view">
                                        	<img src="images/list.jpg" alt="List" />
                                        </a>
                                    </div>
                                    <div className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                                    	<span className="filters-toolbar__product-count">Showing: 22</span>
                                    </div>
                                    <div className="col-4 col-md-4 col-lg-4 text-right">
                                    	<div className="filters-toolbar__item">
                                      		<label for="SortBy" className="hidden">Sort</label>
                                      		<select name="SortBy" id="SortBy" className="filters-toolbar__input filters-toolbar__input--sort">
                                                <option value="title-ascending" selected="selected"> Women </option>
                                                <option>Childern</option>
                                                <option>Men</option>
                                      		</select>
                                      		<input className="collection-header__default-sort" type="hidden" value="manual"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>


                                <WomenProductComponent/>
                                </div>
                            

                        
                                 
                  
                
            
            </div>
           
    
        </div>
        
    </div> 
    );
    
}
export default ShopFullWidth;
