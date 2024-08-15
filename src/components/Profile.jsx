import "../blocks/profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

const Profile = ({ handleButtonClick, handleItemClick, clothingItems }) => (
  <div className="profile">
    <Sidebar />
    <ClothesSection
      handleButtonClick={handleButtonClick}
      handleItemClick={handleItemClick}
      clothingItems={clothingItems}
    />
  </div>
);

export default Profile;
