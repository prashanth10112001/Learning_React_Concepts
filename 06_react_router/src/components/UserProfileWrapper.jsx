import { useParams } from "react-router-dom";
import UserProfile from "./UserProfile";

function UserProfileWrapper() {
  const { id } = useParams();
  return <UserProfile id={id} />;
}

export default UserProfileWrapper;
