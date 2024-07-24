const HeroSection = () => {
  return (
    <div className="hero_section container">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="buttons">
            <button>Shop Now</button>
            <button className="secondary_btn">Category</button>
        </div>
        <div className="shopping" >
            <p>Now Available On</p>
            <div className="brand_icons">
                <a href="www.flipkart.com"><img src="/images/flipkart.png" alt="flipkart" /></a>
                <a href="www.amazon.com"><img src="/images/amazon.png" alt="amazon" /></a>
            </div>
        </div>
      </div>
      <div className="hero_image">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
    </div>
  );
};
export default HeroSection;
