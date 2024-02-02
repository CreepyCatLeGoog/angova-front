import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"

import BottomNavigation from "@/components/bottomNavigation"

const ProfilePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        <BottomNavigation />
      </MaxWidthWrapper>
    </>
  )
}

export default ProfilePage