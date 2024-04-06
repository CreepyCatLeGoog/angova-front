import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import Road from "@/components/road";
import Ellipse from "@/components/ellipse";

const SessionPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <TopNavigation isTitle={false} isLanguage={true} isGear={true} />

        <BottomNavigation />
      </MaxWidthWrapper>
      <div className="flex flex-row h-200 justify-center content-betweenlg:pl-60 md:pl-60">
        <div className="flex flex-col">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Ellipse />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Ellipse />
        </div>
        <div className="">
          {/* <div className="flex justify-center items-center lg:pl-60 md:pl-60"> */}
          <Road />
        </div>
        <div className="flex flex-col">
          <Ellipse />
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <Ellipse />
        </div>
      </div>
    </>
  );
};

export default SessionPage;
