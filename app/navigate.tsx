
import Link from "next/link";
import { FC } from "react";

const Navigate: FC = () => {
  return <>
    <h1>Navigate</h1>
    <Link href={"/login"}>go login</Link>
  </>
}
export default Navigate