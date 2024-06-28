import { createFileRoute } from "@tanstack/react-router";
import { CardContent, Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <main className="flex-1 bg-white p-6 pr-16">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome to Unreal Books Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Here's a quick overview of your business metrics.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs uppercase text-muted-foreground">
                    Total Revenue
                  </div>
                  <div className="text-2xl font-semibold">$10000</div>
                </div>
                <DollarSignIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs uppercase text-muted-foreground">
                    New Customers
                  </div>
                  <div className="text-2xl font-semibold">23</div>
                </div>
                <UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs uppercase text-muted-foreground">
                    Invoices Paid
                  </div>
                  <div className="text-2xl font-semibold">3</div>
                </div>
                <CreditCardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs uppercase text-muted-foreground">
                    Overdue Invoices
                  </div>
                  <div className="text-2xl font-semibold">5</div>
                </div>
                <ActivityIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
