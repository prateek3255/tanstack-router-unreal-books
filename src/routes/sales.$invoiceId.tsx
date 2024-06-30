import { Link, createFileRoute } from "@tanstack/react-router";
import {
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchInvoice } from "@/lib/api";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sales/$invoiceId")({
  component: Invoice,
  loader: ({ params, abortController }) => fetchInvoice(params.invoiceId, abortController),
  notFoundComponent: () => (
    <div className="h-full w-full flex justify-center items-center text-lg font-semibold">
      Invoice not found 😢
    </div>
  ),
});

function Invoice() {
  const invoice = Route.useLoaderData();
  return (
    <>
      <Card>
        <CardHeader>
          <div className="space-y-1">
            <CardTitle>{invoice.customer.name}</CardTitle>
            <CardDescription>${invoice.total}</CardDescription>
            <Badge variant="secondary">Due today</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {invoice.items.map((item) => (
            <div key={item.id}>
              <div className="text-xs text-muted-foreground">{item.name}</div>
              <div className="text-lg">${item.price}</div>
            </div>
          ))}
          <div className="pt-6 border-t">
            <div className="text-xs text-muted-foreground">Net Total</div>
            <div className="text-lg">${invoice.total}</div>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full mt-4" asChild>
        <Link to="/sales">
          Clear
        </Link>
      </Button>
    </>
  );
}
