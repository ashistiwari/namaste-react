import {RES_CARD} from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
    const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines } = resData.info;
  console.log(resData);
  console.log(name)
  const something = {}
    return (

        <div className="res-card" style={{ background: "#f0f0f0" }}>
            <div>{null}</div>
            <img className="res-logo"
                alt="res-logo"
                src={RES_CARD + resData?.info?. cloudinaryImageId} />
            {/* <h3>{resData?.info?.name}</h3> */}
            <h3>{name}</h3>
            <h3>{resData?.cuisines?.info?.cuisines.join(",")}</h3>
            <h3>{resData?.info?.avgRating}</h3> </div>
    )
}
export default RestaurantCard;