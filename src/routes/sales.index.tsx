import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sales/")({
  component: NoSales,
});

function NoSales() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <FileIcon className="h-16 w-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
        Select an invoice
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-center">
        Select an invoice from the list on the left to view the details here.
      </p>
    </div>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
