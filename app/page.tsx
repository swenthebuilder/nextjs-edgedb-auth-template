import { auth } from "@/edgedb";
import Link from "next/link";
import NextSteps from "@/components/NextSteps";

export default async function Home() {
  const session = auth.getSession();

  const signedIn = await session.isSignedIn();
 console.log("test",signedIn)
 console.log("test",session)
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 justify-end space-x-2">
            {!signedIn ? (
              <>
                <Link
                  href={auth.getBuiltinUIUrl()}
                  prefetch={false}
                  className="text-sm font-semibold leading-6 text-gray-800"
                >
                  <button className="ring-2 ring-inset ring-primary bg-primarylight px-4 py-2 rounded-md">
                    Sign in
                  </button>
                </Link>
                <Link
                  href={auth.getBuiltinUISignUpUrl()}
                  prefetch={false}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  <button className="bg-primary px-4 py-2 rounded-md text-white">
                    Sign up
                  </button>
                </Link>
              </>
            ) : (
              <Link
                href="dashboard"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <button className="bg-primary px-4 py-2 rounded-md text-white">
                  Dashboard
                </button>
              </Link>
            )}
          </div>
        </nav>
      </header>


    </div>
  );
}
