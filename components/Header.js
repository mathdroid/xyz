import { index } from "../xyz";
import Link from "next/link";
export default () => (
  <div className={"xyz-header"}>
    <Link prefetch href={"/"}>
      <a>{index.title}</a>
    </Link>
    <style jsx>
      {`
        .xyz-header {
          position: absolute;
          top: 0%;
          padding: 1em;
        }
      `}
    </style>
  </div>
);
