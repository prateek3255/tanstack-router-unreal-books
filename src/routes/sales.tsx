import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ALLOWED_FILTERS, ALLOWED_SORTS, Filter, Sort } from "@/types";
import { fetchInvoices } from "@/lib/api";

export const Route = createFileRoute("/sales")({
  component: Sales,
  loader: () => fetchInvoices(),
  staleTime: 60 * 1000,
});

function Sales() {
  const { invoices, totalAmount, totalInvoices } = Route.useLoaderData();
  return (
    <div key="1" className="flex w-full h-full">
      <main className="flex-[6] bg-white p-6 w-[65%]">
        <h1 className="text-3xl font-bold">Sales</h1>
        <div className="mt-6 grid grid-cols-2 gap-8">
          <SalesStatCard title="Total Invoices" value={totalInvoices} />
          <SalesStatCard title="Total Amount" value={`$${totalAmount}`} />
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <h2 className="text-lg font-semibold">Invoice List</h2>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <FilterIcon className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 space-y-2 p-2">
                  <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {ALLOWED_FILTERS.map((filter) => (
                    <DropdownMenuCheckboxItem checked={false} key={filter}>
                      <div className="flex items-center space-x-2">
                        <span>{FILTER_LABELS[filter]}</span>
                      </div>
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <ListIcon className="mr-2 h-4 w-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 space-y-2 p-2">
                  <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup>
                    {ALLOWED_SORTS.map((sort) => (
                      <DropdownMenuRadioItem key={sort} value={sort}>
                        {SORT_LABELS[sort]}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Input
                className="max-w-xs"
                placeholder="Search invoices..."
                type="search"
              />
            </div>
          </div>
          <ul className="mt-4">
            {invoices.map((invoice) => (
              <li key={invoice.id}>
                <Link
                  className="border-b transition-colors hover:bg-muted/50 flex justify-between px-2 py-3"
                  to="/sales/$invoiceId"
                  params={{ invoiceId: invoice.id.toString() }}
                  activeProps={{
                    className: "bg-muted",
                  }}
                  preload="intent"
                >
                  <div className="font-semibold flex-[4]">
                    {invoice.customer.name}
                  </div>

                  <div className="text-sm text-muted-foreground flex-[3]">
                    {invoice.invoiceDate}
                  </div>
                  <div className="font-semibold flex-[2]">${invoice.total}</div>
                  <div className="flex-[2]">
                    <Badge
                      variant={
                        invoice.status === "Paid"
                          ? "default"
                          : invoice.status === "Overdue"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <aside className="flex-[4] bg-white p-6 border-l border-gray-200 dark:border-gray-800 sticky top-0">
        <Outlet />
      </aside>
    </div>
  );
}

const SalesStatCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <Card className="col-span-1">
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs uppercase text-muted-foreground">
              {title}
            </div>
            <div className="text-2xl font-semibold">{value}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

const FILTER_LABELS: Record<Filter, string> = {
  overdue: "Overdue",
  "due-soon": "Due soon",
  paid: "Paid",
};

const SORT_LABELS: Record<Sort, string> = {
  "date-desc": "Date (Newest)",
  "date-asc": "Date (Oldest)",
  "amount-desc": "Amount (High to Low)",
  "amount-asc": "Amount (Low to High)",
};
