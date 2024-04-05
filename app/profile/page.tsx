import TopNavigation from "@/components/TopNavigation"
import BottomNavigation from "@/components/BottomNavigation"
import Profile from "@/components/Profile"
import ProfileWrapper from "@/components/profileWrapper"

const ProfilePage = () => {
  // this needs to be in a userContext
  const user = {
    firstName: "Eddy",
    lastName: "Wall",
    username: "eddwall",
    password: "password",
    mail: "eddywall@gmail.com",
    image_url: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
    inscription_date: new Date()
  }

  return (
    <>
      <ProfileWrapper>
        <TopNavigation title="Mon profil" isTitle={true} isLanguage={false} isGear={true} />
        <Profile {...user}/>
        <BottomNavigation />
      </ProfileWrapper>
    </>
  )
}

export default ProfilePage