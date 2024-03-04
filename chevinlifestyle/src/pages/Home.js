import Layout from "../components/Layout/Layout";

 
const Home=()=>{
    return(
        <Layout title={"Chevin Lifetsyle"}>
        <div className="img-carousal">
            <div className="image1">
            <img src="/images/chevin.png" alt="bagimage"></img>
            </div>
            <div className="prod-explore">
                <h1 className="prod-explore-heading">DIVE AND EXPLORE OUR COLLECTIONS</h1>
                <div className="prod-explore-images" >
                    <div className="prod-explore-image-container " onClick={()=>console.log("clicked")}>
                      <img className="prod-explore-image" src="/images/backpacks.jpg" alt="duffle"/>
                      <h2 className="prod-explore-image-heading">BACKPACKS</h2>
                    </div>
                    
                    <div className="prod-explore-image-container" onClick={()=>console.log("clicked")}>
                    <img className="prod-explore-image" src="/images/Duffle.png" alt="duffle"/>
                    <h2 className="prod-explore-image-heading">DUFFLE BAGS</h2>
                    </div>
                    <div className="prod-explore-image-container" onClick={()=>console.log("clicked")}>
                    <img className="prod-explore-image" src="/images/laptop.png" alt="duffle"/>
                    <h2 className="prod-explore-image-heading">LAPTOP BAGS</h2>
                    </div>
                    <div className="prod-explore-image-container" onClick={()=>console.log("clicked")}>
                    <img className="prod-explore-image" src="/images/daypacks.png" alt="duffle"/>
                    <h2 className="prod-explore-image-heading">DAYPACKS</h2>
                    </div>
                </div>
            </div>
            <h1 className="prod-explore-heading">OUR TOP SELLING PRODUCTS</h1>
         <div className="top-selling">
       
            <div className="top-selling-prod-1-container">
            <img className="top-selling-prod-1-image"src="/images/top-selling1.png" alt="top1" onClick={()=>console.log("clicked")}/>
            </div>
            <div className="top-selling-prod-2-container">
            <div className="top-selling-prod-2">
                <div>
                    <img className="top-selling-prod-2-image1" src="/images/topselling2.jpg" alt="top2" onClick={()=>console.log("clicked")}/>
                </div>
               <div><h3 className="top-selling-prod-2-info">Indulge in a fusion of culture and convenience with our AYS Mini Navy Backpack. Embrace the spirit of exploration while showcasing your style, making a statement wherever your journey takes you. </h3></div>
            </div>
            <div className="top-selling-prod-3">
            <div>
                <button  className=" shop-now-button"onClick={()=>console.log("clicked")}>SHOP NOW</button>
            </div>
            <div>
                <img className="top-selling-prod-2-image2" src="/images/topselling3.jpg" alt="top3"onClick={()=>console.log("clicked")}/>
                </div>
               
            </div>

            </div>
            
         </div>
         <div>

         </div>
            
        </div>
        </Layout>
    )
}
export default Home;
