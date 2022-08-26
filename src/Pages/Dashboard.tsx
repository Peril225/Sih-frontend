import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ExploreC, SideBar } from "../layouts";

function Standard() {
  const [Explore, setExplore] = useState(false);
  const history = useNavigate();
  const { level } = useParams();
  useEffect(() => {
    switch (level) {
      case "primary":
        break;
      case "secondary":
        break;
      case "technical":
        break;
      default:
        history("/404");
        break;
    }
  }, []);

  return (
    <div className='flex h-screen  items-center bg-bgr'>
      <ExploreC Explore={Explore} setExplore={setExplore} />
      <SideBar setExplore={setExplore} Explore={Explore} />
      <div className='w-full text-white flex items-center justify-center'>
        {/* hi mom */}
      </div>
    </div>
  );
}

export default Standard;
