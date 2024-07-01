import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Button } from "@/components/ui/button";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="flex h-full">
        <nav className="min-w-64 bg-white p-6">
          <div className="flex items-center space-x-2">
            <BookIcon className="h-6 w-6" />
            <span className="font-semibold">Unreal Books</span>
          </div>
          <div className="mt-6 flex flex-col space-y-1">
            <Button className={"justify-start"} variant="ghost" asChild>
              <Link
                to="/"
                activeProps={{
                  className: "bg-link-active",
                }}
              >
                Dashboard
              </Link>
            </Button>
            <Button className={"justify-start"} variant="ghost" asChild>
              <Link
                to="/sales"
                activeProps={{
                  className: "bg-link-active",
                }}
                activeOptions={{
                  includeSearch: false
                }}
                search={{
                  filters: [],
                  sort: "date-desc",
                  search: "",
                }}
              >
                Sales
              </Link>
            </Button>
          </div>
        </nav>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
