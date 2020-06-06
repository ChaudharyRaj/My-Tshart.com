import  React from "react"
import {API} from "../../backend";
const ImageHelper = ({product}) =>{

    const imageUrl = product ? `${API}/product/photo/${product._id}`:`https://cdn.pixabay.com/photo/2016/10/26/19/12/bad-story-1772283_960_720.jpg`;

    return(
        <div className="">
        <img
          src={imageUrl}
          alt="photo"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          className="mb-3 rounded"
        />
      </div>
    )
}
export default  ImageHelper;