import AddPost from "@/components/PageComponents/AddPost";
import CenterMenu from "@/components/PageComponents/CenterMenu";
import Feed from "@/components/PageComponents/Feed";
import LeftMenu from "@/components/PageComponents/LeftMenu";
import RightMenu from "@/components/PageComponents/RightMenu";
import Stories from "@/components/PageComponents/Stories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sosial",
  description: "Generated by create next app",
};
const Page = () => {
  return (
    <main className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
        <CenterMenu />
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </main>
  );
};

export default Page;
