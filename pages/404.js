import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oh...</h1>
      <h2>This page don`n extends here!</h2>
      <p>
        You are going to <Link href={"/"}>Home page</Link> in three seconds
      </p>
    </div>
  );
};

export default NotFoundPage;
