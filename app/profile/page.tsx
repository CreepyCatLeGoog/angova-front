import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import TopNavigation from "@/components/topNavigation"
import BottomNavigation from "@/components/BottomNavigation"

const ProfilePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <TopNavigation title="Mon profil" isTitle={true} isLanguage={false} isGear={true} />
        <BottomNavigation />
      </MaxWidthWrapper>
    </>
  )
}

export default ProfilePage