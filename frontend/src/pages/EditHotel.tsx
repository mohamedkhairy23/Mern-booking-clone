import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import ManageHotelForm from "../forms/ManageHtelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";
import Spinner from "../components/Spinner";

const EditHotel = () => {
  const { showToast } = useAppContext();
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelByID(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {
      showToast({ message: "Updated Hotel Successfully!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Updating Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  if (!hotel) {
    <>
      <Spinner />
    </>;
  }

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditHotel;
