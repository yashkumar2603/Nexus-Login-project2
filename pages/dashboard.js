import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (loading) return <h1>Loading</h1>;
  if (!user) route.push("/auth/login");
  if (user)
    return (
      <div>
        <h1 className="font-semibold" >Welcome to Nexus Restaurant {user.displayName}</h1>     {/* change this to restaurant website div
        this has the tailwind config, use tailwind for styling.*/}
        <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
}
