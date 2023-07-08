import "./Spinner.css"
const Spinner=()=>{
    return(
        <div className="flex flex-col items-center space-y-2">
        <div className="spinner"></div>
        <div className="text-bgDark text-lg font-semibold">Loading...</div>
        </div>
    );

}
export default Spinner;