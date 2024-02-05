import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import TopNavigation from "@/components/topNavigation"
import BottomNavigation from "@/components/BottomNavigation"


const SessionPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <TopNavigation isTitle={false} isLanguage={true} isGear={true} />
        <BottomNavigation />
      </MaxWidthWrapper>
    </>
  )
}

export default SessionPage