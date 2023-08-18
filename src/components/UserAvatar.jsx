import { Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserAvatar() {
  const navigate = useNavigate();
  const { state } = useAuth();
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="header__avatar">
      <figure
        className="avatar head"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        {state.user?.file ? (
          <img src={state.user?.file} alt="userImg" />
        ) : (
          <FaUser size={25} />
        )}
      </figure>

      <ul className={`header__avatar--details ${showDetails ? "show" : ""} `}>
        {state.user?.name ? (
          <>
            <li>Name: {state.user.name}</li>
            <li>Email: {state.user.email}</li>
          </>
        ) : (
          <Button onClick={() => navigate("/settings")} className="btn">
            Save User Details
          </Button>
        )}
      </ul>
    </div>
  );
}
