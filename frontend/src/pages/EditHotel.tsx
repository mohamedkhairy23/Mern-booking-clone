import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import ManageHotelForm from "../forms/ManageHtelForm/ManageHotelForm";

const EditHotel = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelByID(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  return <ManageHotelForm hotel={hotel} />;
};

export default EditHotel;
