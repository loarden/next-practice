import Link from "next/link";

export const metadata = {
  title: 'Login'
}

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <Link href='/auth/signin'>Go to SignIn</Link>
    </div>
  );
}
