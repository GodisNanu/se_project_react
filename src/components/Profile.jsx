import "../blocks/profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

const Profile = ({
  userData,
  handleEditProfileClick,
  handleLogout,
  handleAddButtonClick,
  handleItemClick,
  clothingItems,
  onCardLike,
}) => (
  <div className="profile">
    <Sidebar
      userData={userData}
      handleEditProfileClick={handleEditProfileClick}
      handleLogout={handleLogout}
    />
    <ClothesSection
      handleAddButtonClick={handleAddButtonClick}
      handleItemClick={handleItemClick}
      userData={userData}
      clothingItems={clothingItems}
      onCardLike={onCardLike}
    />
  </div>
);

export default Profile;
