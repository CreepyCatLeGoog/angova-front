import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import LandingForm from "@/components/landingform"
import Navbar from "@/components/navbar"

const LandingPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        <LandingForm /> 
      </MaxWidthWrapper>
    </>
  )
}

export default LandingPage