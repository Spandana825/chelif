import Layout from "../components/Layout/Layout";

 
const Home=()=>{
    return(
        <Layout title={"Chevin Lifetsyle"}>
        <div className="img-carousal">
            <div className="image1">
            <img src="/images/chevin.png" alt="bagimage"></img>
            </div>
            <div className="prod-explore">
                <h1 className="prod-explore-heading">DIVE AND EXPLORE</h1>
                <div className="prod-explore-images">
                    <div className="prod-explore-image"></div>
                    <div className="prod-explore-image"></div>
                    <div className="prod-explore-image"></div>
                    <div className="prod-explore-image"></div>
                </div>
            </div>
         <div className="top-selleing">
            <div className="top-selling-prod-1">

            </div>
            <div className="top-selling-prod-2">
                <div></div>
               <div></div>
            </div>
            <div className="top-selling-prod-3">
               <div></div>
               <div></div>
            </div>

         </div>
         <div>

         </div>
            
        </div>
        </Layout>
    )
}
export default Home;
