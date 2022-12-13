import Footer from "./Footer";
export default function Layout({children}){
    return(
        <div>
            <div className="bg-purple-600 p-5">
            {children} 
        </div>
        <Footer/>
        </div>
    );
}