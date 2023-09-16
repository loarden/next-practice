import Link from "next/link";

export const metadata = {
  title: 'SignIn'
}

export default function SignIn() {
  return (
    <div>
      <h2>SignIn</h2>
      <Link href="/auth/login">Go to LogIn</Link>
    </div>
  );
}
